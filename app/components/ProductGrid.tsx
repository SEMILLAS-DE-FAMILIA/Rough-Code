'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../src/lib/supabaseClient';
import { useDistributorStore } from '../../src/lib/useDistributorStore';
import { Product } from '../../src/types/product';
import ProductCard from './products/ProductCard';
import ProductModalDetails from './products/ProductModalDetails';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  searchQuery?: string;
  onAddToCart: (item: any) => void;
  onOpenDistributorModal: () => void;
}

export default function ProductGrid({
  searchQuery = '',
  onAddToCart,
  onOpenDistributorModal,
}: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(['Todos']);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [prevSearch, setPrevSearch] = useState(searchQuery);
  const [prevCategory, setPrevCategory] = useState(activeCategory);

  if (searchQuery !== prevSearch || activeCategory !== prevCategory) {
    setPrevSearch(searchQuery);
    setPrevCategory(activeCategory);
    setCurrentPage(1);
  }

  const ITEMS_PER_PAGE = 12;

  const isDistributorLoggedIn = useDistributorStore((s) => s.status === 'approved');
  const distributorPrices = useDistributorStore((s) => s.prices);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select(`
          id,
          title,
          category_id,
          description,
          img_url,
          images,
          badge,
          is_new,
          is_distributor,
          categories ( name ),
          product_variants (
            id,
            weight,
            price,
            discount_percent,
            variant_flavor_stock ( flavor_id, stock )
          ),
          product_flavors ( id, flavor_name )
        `)
        .eq('active', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching products:', error.message || error);
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

        const categoryNames = Array.from(
          new Set(fetched.map((p) => p.category_name).filter((name): name is string => Boolean(name)))
        );
        const hasDistributorProducts = fetched.some((p) => p.is_distributor);

        setCategories(['Todos', ...categoryNames, ...(hasDistributorProducts ? ['Distribuidor'] : [])]);
      }

      setLoading(false);
    }

    fetchProducts();
  }, []);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const viewingDistributorTab = activeCategory === 'Distribuidor';

  const filteredProducts = products.filter((p) => {
    const matchesCategory = viewingDistributorTab
      ? p.is_distributor
      : activeCategory === 'Todos'
      ? true
      : p.category_name === activeCategory;

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query
      ? true
      : p.title.toLowerCase().includes(query) ||
        (p.description && p.description.toLowerCase().includes(query)) ||
        (p.category_name && p.category_name.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getVisiblePages = (): (number | 'ellipsis')[] => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);

    const pages = new Set<number>([1, totalPages, currentPage, currentPage - 1, currentPage + 1]);
    const sorted = Array.from(pages)
      .filter((p) => p >= 1 && p <= totalPages)
      .sort((a, b) => a - b);

    const withEllipsis: (number | 'ellipsis')[] = [];
    sorted.forEach((p, idx) => {
      if (idx > 0 && p - sorted[idx - 1] > 1) withEllipsis.push('ellipsis');
      withEllipsis.push(p);
    });
    return withEllipsis;
  };

  return (
    <section id="catalogo" className={styles.catalogSection}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogHeader}>
          <span className={styles.preTitle}>Catálogo</span>
          <h2 className={styles.catalogTitle}>Nuestros Productos</h2>

          <div className={styles.categoriesWrapper}>
            {categories.map((cat) => (
              <button key={cat} className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ''}`} onClick={() => setActiveCategory(cat)}>
                {cat === 'Distribuidor' ? '🤝 Zona Distribuidores' : cat}
              </button>
            ))}
          </div>
        </div>

        {loading && <p className={styles.stateMessage}>Cargando...</p>}
        {error && <p className={styles.stateMessage}>{error}</p>}
        {!loading && !error && filteredProducts.length === 0 && (
          <p className={styles.stateMessage}>
            {searchQuery ? `No encontramos productos para "${searchQuery}"` : 'No hay productos disponibles.'}
          </p>
        )}

        <div className={styles.productGrid}>
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenModal={(p) => setSelectedProduct(p)}
              viewingDistributorTab={viewingDistributorTab}
              isDistributorLoggedIn={isDistributorLoggedIn}
              distributorPrices={distributorPrices}
              onOpenDistributorModal={onOpenDistributorModal}
            />
          ))}
        </div>

        {!loading && !error && totalPages > 1 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.4rem',
              marginTop: '2.5rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              onClick={() => goToPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '9999px',
                border: '1px solid #e2e8f0',
                background: '#fff',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                opacity: currentPage === 1 ? 0.4 : 1,
                fontSize: '0.9rem',
              }}
              aria-label="Página anterior"
            >
              ‹
            </button>

            {getVisiblePages().map((p, idx) =>
              p === 'ellipsis' ? (
                <span key={`ellipsis-${idx}`} style={{ padding: '0 0.3rem', color: '#a8a29e' }}>
                  …
                </span>
              ) : (
                <button
                  key={p}
                  type="button"
                  onClick={() => goToPage(p)}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '9999px',
                    border: p === currentPage ? 'none' : '1px solid #e2e8f0',
                    background: p === currentPage ? '#1c1917' : '#fff',
                    color: p === currentPage ? '#fff' : '#334155',
                    fontWeight: p === currentPage ? 700 : 500,
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                  }}
                >
                  {p}
                </button>
              )
            )}

            <button
              type="button"
              onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '9999px',
                border: '1px solid #e2e8f0',
                background: '#fff',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                opacity: currentPage === totalPages ? 0.4 : 1,
                fontSize: '0.9rem',
              }}
              aria-label="Página siguiente"
            >
              ›
            </button>
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModalDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
          distributorPrices={viewingDistributorTab && isDistributorLoggedIn ? distributorPrices : undefined}
        />
      )}
    </section>
  );
}