'use client';

import React, { useRef, useState } from 'react';
import { NewCartItem } from '../../../src/lib/useCartStore';
import { useDistributorStore } from '../../../src/lib/useDistributorStore';
import { Product } from '../../../src/types/product';
import { useProducts } from '../../../src/lib/useProducts';
import ProductCard from './ProductCard';
import ProductModalDetails from './ProductModalDetails';
import styles from './NovedadesCarousel.module.css';

interface NovedadesCarouselProps {
  onAddToCart: (item: NewCartItem) => void;
  onOpenDistributorModal?: () => void;
}

export default function NovedadesCarousel({ onAddToCart, onOpenDistributorModal }: NovedadesCarouselProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isDistributorLoggedIn = useDistributorStore((s) => s.status === 'approved');
  const distributorPrices = useDistributorStore((s) => s.prices);

  const { products, loading } = useProducts({ isNewOnly: true });

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
                onAddToCart={onAddToCart}
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