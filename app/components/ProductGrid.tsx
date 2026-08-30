'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../src/lib/supabaseClient';
import styles from './ProductGrid.module.css';

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  discount_percent: number;
  final_price: number;
  description: string | null;
  img_url: string | null;
  badge?: string | null;
  is_new?: boolean;
}

const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

export default function ProductGrid({ onAddToCart }: { onAddToCart: (product: Product) => void }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(['Todos']);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('id, title, category, price, discount_percent, final_price, description, img_url, badge, is_new')
        .eq('active', true)
        .order('created_at', { ascending: false });

      if (!isMounted) return;

      if (error) {
        setError('No se pudieron cargar los productos. Intenta de nuevo más tarde.');
        setLoading(false);
        return;
      }

      const fetched = data ?? [];
      setProducts(fetched);
      const uniqueCategories = Array.from(new Set(fetched.map((p) => p.category)));
      setCategories(['Todos', ...uniqueCategories]);
      setLoading(false);
    }

    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts =
    activeCategory === 'Todos' ? products : products.filter((p) => p.category === activeCategory);

  const toggleExpanded = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="catalogo" className={styles.catalogSection}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogHeader}>
          <span className={styles.preTitle}>Catálogo Seleccionado</span>
          <h2 className={styles.catalogTitle}>Productos para la Siembra</h2>

          <div className={styles.categoriesWrapper}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading && <p className={styles.stateMessage}>Cargando productos...</p>}
        {error && <p className={styles.stateMessage}>{error}</p>}
        {!loading && !error && filteredProducts.length === 0 && (
          <p className={styles.stateMessage}>Aún no hay productos en esta categoría.</p>
        )}

        <div className={styles.productGrid}>
          {filteredProducts.map((product) => {
            const hasDiscount = product.discount_percent > 0;
            const isExpanded = expandedId === product.id;

            return (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.imageContainer}>
                  <div className={styles.topLeftBadges}>
                    {product.badge && <span className={styles.tagBadge}>{product.badge}</span>}
                  </div>
                  {hasDiscount && (
                    <span className={styles.discountBadge}>-{product.discount_percent}%</span>
                  )}
                  {product.img_url && (
                    <Image
                      src={product.img_url}
                      alt={product.title}
                      fill
                      className={styles.productImage}
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  )}
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.titleRow}>
                    <span className={styles.productCategory}>{product.category}</span>
                    {product.description && (
                      <button
                        className={styles.infoBtn}
                        onClick={() => toggleExpanded(product.id)}
                        aria-label="Ver más información"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? '−' : '+'}
                      </button>
                    )}
                  </div>

                  <h3 className={styles.productTitle}>{product.title}</h3>

                  {isExpanded && product.description && (
                    <p className={styles.productDescription}>{product.description}</p>
                  )}

                  <div className={styles.cardFooter}>
                    <div className={styles.priceGroup}>
                      {hasDiscount && (
                        <span className={styles.originalPrice}>{formatCLP(product.price)}</span>
                      )}
                      <span className={styles.price}>{formatCLP(product.final_price)}</span>
                    </div>
                    <button className={styles.addBtn} onClick={() => onAddToCart(product)}>
                      + Agregar
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