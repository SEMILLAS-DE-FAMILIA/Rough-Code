import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Product } from '../types/product';

interface CategoryOption {
  id: string | null;
  name: string;
}

interface UseProductsOptions {
  activeCategory?: string;
  searchQuery?: string;
  isNewOnly?: boolean;
  currentPage?: number;
  itemsPerPage?: number;
}

export function useProducts({
  activeCategory = 'Todos',
  searchQuery = '',
  isNewOnly = false,
  currentPage = 1,
  itemsPerPage = 12,
}: UseProductsOptions = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  // Cargar categorías disponibles y verificar si hay productos de distribuidor
  useEffect(() => {
    async function fetchCategories() {
      const { data: catData, error: catError } = await supabase
        .from('categories')
        .select('id, name');

      if (!catError && catData) {
        const { count: distCount } = await supabase
          .from('products')
          .select('*', { count: 'exact', head: true })
          .eq('active', true)
          .eq('is_distributor', true);

        const loadedCategories: CategoryOption[] = [
          { id: null, name: 'Todos' },
          ...catData.map((c: any) => ({ id: c.id, name: c.name })),
          ...(distCount && distCount > 0 ? [{ id: 'distribuidor', name: 'Distribuidor' }] : []),
        ];

        setCategories(loadedCategories);
      }
    }

    fetchCategories();
  }, []);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    let matchedIds: number[] = [];
    const hasSearch = searchQuery.trim().length > 0;

    if (hasSearch) {
      const { data: matches, error: searchError } = await supabase.rpc('search_products', {
        p_query: searchQuery.trim(),
      });
      if (searchError) {
        console.error('Error en búsqueda:', searchError.message);
        setError('No se pudo realizar la búsqueda.');
        setLoading(false);
        return;
      }
      matchedIds = (matches || []).map((m: any) => m.id);
      if (matchedIds.length === 0) {
        setProducts([]);
        setTotalCount(0);
        setLoading(false);
        return;
      }
    }

    // Aplica los filtros comunes (categoría/distribuidor/búsqueda/novedad) a cualquier query base
    function applyFilters<T>(base: T): T {
      let q = (base as any).eq('active', true);
      if (isNewOnly) q = q.eq('is_new', true);
      if (activeCategory === 'Distribuidor') {
        q = q.eq('is_distributor', true);
      } else if (activeCategory !== 'Todos' && categories.length > 0) {
        const selectedCatObj = categories.find((c) => c.name === activeCategory);
        if (selectedCatObj?.id) {
          q = q.eq('category_id', selectedCatObj.id);
        }
      }
      if (hasSearch) {
        q = q.in('id', matchedIds);
      }
      return q;
    }

    // 1. Conteo liviano, solo para calcular la paginación real bajo los filtros actuales
    const countBase = supabase.from('products').select('id', { count: 'exact', head: true });
    const { count: filteredCount } = await applyFilters(countBase);
    const safeTotalPages = Math.max(1, Math.ceil((filteredCount || 0) / itemsPerPage));
    const safePage = Math.min(currentPage, safeTotalPages);
    const from = (safePage - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1;

    // 2. Query real, con los joins completos
    const dataBase = supabase
      .from('products')
      .select(
        `
        id,
        title,
        category_id,
        description,
        img_url,
        images,
        badge,
        is_new,
        is_distributor,
        categories ( id, name ),
        product_variants (
          id,
          weight,
          price,
          discount_percent,
          variant_flavor_stock ( flavor_id, stock )
        ),
        product_flavors ( id, flavor_name )
      `,
        { count: 'exact' }
      );

    let query = applyFilters(dataBase);
    query = query.order('created_at', { ascending: false });

    if (!isNewOnly) {
      query = query.range(from, to);
    } else {
      query = query.limit(12);
    }

    const { data, count, error: fetchError } = await query;

    if (fetchError) {
      console.error('Error fetching products:', fetchError.message || fetchError);
      setError('No se pudieron cargar los productos.');
      setLoading(false);
      return;
    }

    if (data) {
      const fetched: Product[] = data.map((item: any) => ({
        ...item,
        category_name: item.categories?.name || 'Sin categoría',
        variants: (item.product_variants || []).map((v: any) => ({
          id: v.id,
          weight: v.weight,
          price: v.price,
          discount_percent: v.discount_percent,
          stocks: (v.variant_flavor_stock || []).map((s: any) => ({ flavor_id: s.flavor_id, stock: s.stock })),
        })),
        flavors: item.product_flavors || [],
      }));
      setProducts(fetched);
      setTotalCount(count || 0);
    }

    setLoading(false);
  }, [currentPage, activeCategory, searchQuery, categories, isNewOnly, itemsPerPage]);

  useEffect(() => {
    if (categories.length > 0 || activeCategory === 'Todos' || isNewOnly) {
      fetchProducts();
    }
  }, [fetchProducts, categories.length, activeCategory, isNewOnly]);

  return {
    products,
    categories,
    loading,
    error,
    totalCount,
    refetch: fetchProducts,
  };
}