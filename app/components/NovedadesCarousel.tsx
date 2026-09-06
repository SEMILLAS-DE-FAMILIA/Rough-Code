'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../src/lib/supabaseClient';
import { useCartStore } from '../../src/lib/useCartStore';
import { Product } from './ProductGrid';
import styles from './NovedadesCarousel.module.css';

const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

export default function NovedadesCarousel({ onAddToCart }: { onAddToCart: (product: Product) => void }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    let isMounted = true;

    async function fetchNovedades() {
      const { data, error } = await supabase
        .from('products')
        .select(`
          id, 
          title, 
          category_id, 
          price, 
          discount_percent, 
          final_price, 
          description, 
          img_url, 
          badge, 
          is_new, 
          stock,
          categories!fk_products_categories ( name )
        `)
        .eq('active', true)
        .eq('is_new', true)
        .order('created_at', { ascending: false });

      if (!isMounted) return;

      if (!error && data) {
        const mappedProducts: Product[] = data.map((p: any) => ({
          ...p,
          category: p.categories?.name || 'Sin categoría',
        }));
        setProducts(mappedProducts);
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

  const sortedProducts = [...products].sort((a, b) => (b.stock > 0 ? 1 : 0) - (a.stock > 0 ? 1 : 0));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Novedades</h2>
          </div>
          {sortedProducts.length > 1 && (
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
          {sortedProducts.map((p) => {
            const hasDiscount = p.discount_percent > 0;
            const isOutOfStock = p.stock <= 0;

            const cartItem = cart.find((item) => item.id === p.id);
            const quantityInCart = cartItem ? cartItem.quantity : 0;
            const isLimitReached = isOutOfStock || quantityInCart >= p.stock;

            return (
              <div 
                key={p.id} 
                className={`${styles.card} ${isOutOfStock ? styles.outOfStockCard : ''}`}
              >
                <div className={styles.imageWrap}>
                  {isOutOfStock && <span className={styles.outOfStockBadge}>Sin stock</span>}
                  {hasDiscount && <span className={styles.discountBadge}>-{p.discount_percent}%</span>}
                  {p.img_url && (
                    <Image src={p.img_url} alt={p.title} fill className={styles.image} sizes="240px" />
                  )}
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.category}>{p.category}</span>
                  <h3 className={styles.productTitle}>{p.title}</h3>

                  <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0.1rem 0 0.4rem 0' }}>
                    {p.stock > 0 ? `Stock: ${p.stock} un.` : 'Sin stock'}
                  </p>

                  <div className={styles.footer}>
                    <div className={styles.priceGroup}>
                      {hasDiscount && <span className={styles.originalPrice}>{formatCLP(p.price)}</span>}
                      <span className={styles.price}>{formatCLP(p.final_price)}</span>
                    </div>
                    <button 
                      type="button" 
                      className={styles.addBtn} 
                      onClick={() => onAddToCart(p)} 
                      disabled={isLimitReached} 
                      aria-label="Agregar al carrito"
                    >
                      {isOutOfStock ? '—' : quantityInCart >= p.stock ? 'Max' : '+'}
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