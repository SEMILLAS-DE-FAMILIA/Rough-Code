'use client';

import React, { useEffect, useState } from 'react';
import { useDistributorStore } from '../../src/lib/useDistributorStore';
import { Product } from '../../src/types/product';
import { useProducts } from '../../src/lib/useProducts';
import { NewCartItem } from '../../src/lib/useCartStore';
import ProductCard from './products/ProductCard';
import ProductModalDetails from './products/ProductModalDetails';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  searchQuery?: string;
  onAddToCart: (item: NewCartItem) => void;
  onOpenDistributorModal: () => void;
}

export default function ProductGrid({
  searchQuery = '',
  onAddToCart,
  onOpenDistributorModal,
}: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 12;

  const isDistributorLoggedIn = useDistributorStore((s) => s.status === 'approved');
  const distributorPrices = useDistributorStore((s) => s.prices);

  const { products, categories, loading, error, totalCount } = useProducts({
    activeCategory,
    searchQuery,
    currentPage,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  // Reinicia la página actual al cambiar la búsqueda o la categoría
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(totalCount / ITEMS_PER_PAGE));

  const goToPage = (page: number) => {
    setCurrentPage(page);
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCloseModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedProduct(null);
      setIsModalClosing(false);
    }, 250);
  };

  const viewingDistributorTab = activeCategory === 'Distribuidor';

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
              <button
                key={cat.name}
                className={`${styles.categoryBtn} ${activeCategory === cat.name ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat.name)}
              >
                {cat.name === 'Distribuidor' ? '🤝 Zona Distribuidores' : cat.name}
              </button>
            ))}
          </div>
        </div>

        {loading && <p className={styles.stateMessage}>Cargando...</p>}
        {error && <p className={styles.stateMessage}>{error}</p>}
        {!loading && !error && products.length === 0 && (
          <p className={styles.stateMessage}>
            {searchQuery ? `No encontramos productos para "${searchQuery}"` : 'No hay productos disponibles.'}
          </p>
        )}

        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenModal={(p) => {
                setIsModalClosing(false);
                setSelectedProduct(p);
              }}
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
          onClose={handleCloseModal}
          onAddToCart={onAddToCart}
          distributorPrices={viewingDistributorTab && isDistributorLoggedIn ? distributorPrices : undefined}
        />
      )}
    </section>
  );
}