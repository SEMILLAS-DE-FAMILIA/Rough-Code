'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProductGrid.module.css';

export interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  img: string;
  badge?: string;
}

const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    title: 'Semillas de Tomate Limachino Orgánico',
    category: 'Semillas',
    price: '$4.990',
    img: '/images/slider/image1.png',
    badge: 'Orgánico',
  },
  {
    id: 2,
    title: 'Fertilizante Natural de Floración 1L',
    category: 'Insumos',
    price: '$12.500',
    img: '/images/slider/image2.png',
    badge: 'Top Ventas',
  },
  {
    id: 3,
    title: 'Kit de Germinación Biodegradable',
    category: 'Herramientas',
    price: '$8.990',
    img: '/images/slider/image3.png',
  },
];

const CATEGORIES = ['Todos', 'Semillas', 'Insumos', 'Herramientas'];

export default function ProductGrid({ onAddToCart }: { onAddToCart: (product: Product) => void }) {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProducts = activeCategory === 'Todos'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogo" className={styles.catalogSection}>
      <div className={styles.catalogContainer}>
        {/* Header de la tienda */}
        <div className={styles.catalogHeader}>
          <span className={styles.preTitle}>Catálogo Seleccionado</span>
          <h2 className={styles.catalogTitle}>Productos para la Siembra</h2>

          {/* Filtros por Categoría */}
          <div className={styles.categoriesWrapper}>
            {CATEGORIES.map((cat) => (
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

        {/* Grilla de productos */}
        <div className={styles.productGrid}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                {product.badge && <span className={styles.tagBadge}>{product.badge}</span>}
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className={styles.productImage}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>

              <div className={styles.cardContent}>
                <span className={styles.productCategory}>{product.category}</span>
                <h3 className={styles.productTitle}>{product.title}</h3>

                <div className={styles.cardFooter}>
                  <span className={priceStyle}>{product.price}</span>
                  <button className={styles.addBtn} onClick={() => onAddToCart(product)}>
                    + Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const priceStyle = styles.price;