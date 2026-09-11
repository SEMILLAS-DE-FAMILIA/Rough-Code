'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../src/lib/supabaseClient';
import { Product, ProductModalDetails } from './ProductGrid';
import { NewCartItem } from '../../src/lib/useCartStore';
import { useDistributorStore } from '../../src/lib/useDistributorStore';
import styles from './NovedadesCarousel.module.css';

const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

interface NovedadesCarouselProps {
  onAddToCart: (item: NewCartItem) => void;
}

export default function NovedadesCarousel({ onAddToCart }: NovedadesCarouselProps) {
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
          {products.map((p) => {
            const firstVariant = p.variants[0];
            const hasDiscount = firstVariant && firstVariant.discount_percent > 0;
            const totalStock = p.variants.reduce(
              (sum, v) => sum + v.stocks.reduce((s, entry) => s + entry.stock, 0),
              0
            );

            const showDistributorPrice =
              p.is_distributor && isDistributorLoggedIn && firstVariant && distributorPrices[firstVariant.id] != null;

            return (
              <div key={p.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  {hasDiscount && !showDistributorPrice && <span className={styles.discountBadge}>-{firstVariant.discount_percent}%</span>}
                  {p.img_url && (
                    <Image src={p.img_url} alt={p.title} fill className={styles.image} sizes="240px" />
                  )}
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.category}>{p.category_name}</span>
                  <h3 className={styles.productTitle}>{p.title}</h3>

                  <div className={styles.footer}>
                    <div className={styles.priceGroup}>
                      {firstVariant && (
                        showDistributorPrice ? (
                          <>
                            <span className={styles.originalPrice}>{formatCLP(firstVariant.price)}</span>
                            <span className={styles.price} style={{ color: '#2563eb' }}>
                              {formatCLP(distributorPrices[firstVariant.id])}
                            </span>
                          </>
                        ) : (
                          <>
                            {hasDiscount && <span className={styles.originalPrice}>{formatCLP(firstVariant.price)}</span>}
                            <span className={styles.price}>
                              Desde {formatCLP(hasDiscount ? firstVariant.price * (1 - firstVariant.discount_percent / 100) : firstVariant.price)}
                            </span>
                          </>
                        )
                      )}
                    </div>
                    <button
                      type="button"
                      className={styles.addBtn}
                      onClick={() => setSelectedProduct(p)}
                      aria-label="Ver opciones"
                      disabled={totalStock <= 0}
                      style={{ opacity: totalStock <= 0 ? 0.5 : 1, cursor: totalStock <= 0 ? 'not-allowed' : 'pointer' }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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