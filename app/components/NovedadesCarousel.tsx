'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../src/lib/supabaseClient';
import { Product } from './ProductGrid';
import styles from './NovedadesCarousel.module.css';

const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

export default function NovedadesCarousel({ onAddToCart }: { onAddToCart: (product: Product) => void }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchNovedades() {
      const { data, error } = await supabase
        .from('products')
        .select('id, title, category, price, discount_percent, final_price, description, img_url, badge, is_new')
        .eq('active', true)
        .eq('is_new', true)
        .order('created_at', { ascending: false });

      if (!isMounted) return;

      if (!error && data) setProducts(data);
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

  // Mientras carga no mostramos nada (evita parpadeo), y si no hay novedades
  // la sección completa desaparece, tal como se pidió.
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
            const hasDiscount = p.discount_percent > 0;
            return (
              <div key={p.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  {hasDiscount && <span className={styles.discountBadge}>-{p.discount_percent}%</span>}
                  {p.img_url && (
                    <Image src={p.img_url} alt={p.title} fill className={styles.image} sizes="240px" />
                  )}
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.category}>{p.category}</span>
                  <h3 className={styles.productTitle}>{p.title}</h3>

                  <div className={styles.footer}>
                    <div className={styles.priceGroup}>
                      {hasDiscount && <span className={styles.originalPrice}>{formatCLP(p.price)}</span>}
                      <span className={styles.price}>{formatCLP(p.final_price)}</span>
                    </div>
                    <button type="button" className={styles.addBtn} onClick={() => onAddToCart(p)} aria-label="Agregar al carrito">
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}