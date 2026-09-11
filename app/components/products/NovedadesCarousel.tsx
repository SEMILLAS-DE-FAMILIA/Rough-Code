'use client';

import React, { useEffect, useRef, useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import { NewCartItem } from '../../../src/lib/useCartStore';
import { useDistributorStore } from '../../../src/lib/useDistributorStore';
import { Product } from '../../../src/types/product';
import ProductCard from './ProductCard';
import ProductModalDetails from './ProductModalDetails';
import styles from './NovedadesCarousel.module.css';

interface NovedadesCarouselProps {
  onAddToCart: (item: NewCartItem) => void;
  onOpenDistributorModal?: () => void;
}

export default function NovedadesCarousel({ onAddToCart, onOpenDistributorModal }: NovedadesCarouselProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isDistributorLoggedIn = useDistributorStore((s) => s.status === 'approved');
  const distributorPrices = useDistributorStore((s) => s.prices);

  useEffect(() => {
    let isMounted = true;

    async function fetchNovedades() {
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
        .eq('is_new', true)
        .order('created_at', { ascending: false });

      if (!isMounted) return;

      if (!error && data) {
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
      }
      setLoading(false);
    }

    fetchNovedades();
    return () => {
      isMounted = false;
    };
  }, []);

  const scroll = (direction: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: direction * 320, behavior: 'smooth' });
  };

  if (loading || products.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.preTitle}>Descubre lo último</span>
            <h2 className={styles.title}>Novedades</h2>
          </div>
          {products.length > 1 && (
            <div className={styles.arrowGroup}>
              <button type="button" className={styles.arrowBtn} onClick={() => scroll(-1)} aria-label="Anterior">
                &#10094;
              </button>
              <button type="button" className={styles.arrowBtn} onClick={() => scroll(1)} aria-label="Siguiente">
                &#10095;
              </button>
            </div>
          )}
        </div>

        <div className={styles.scrollRow} ref={scrollRef}>
          {products.map((p) => (
            <div key={p.id} style={{ flex: '0 0 280px', scrollSnapAlign: 'start' }}>
              <ProductCard
                product={p}
                onOpenModal={setSelectedProduct}
                isDistributorLoggedIn={isDistributorLoggedIn}
                distributorPrices={distributorPrices}
                onOpenDistributorModal={onOpenDistributorModal}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModalDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
          distributorPrices={selectedProduct.is_distributor && isDistributorLoggedIn ? distributorPrices : undefined}
        />
      )}
    </section>
  );
}