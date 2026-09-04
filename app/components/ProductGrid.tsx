'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../src/lib/supabaseClient';
import { useCartStore } from '../../src/lib/useCartStore';
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
  images?: string[] | null;
  badge?: string | null;
  is_new?: boolean;
  stock: number;
}

const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

/* Subcomponente para cada Tarjeta del Catálogo Principal con transición de opacidad */
function ProductCard({
  product,
  quantityInCart,
  onAddToCart,
  onOpenModal,
}: {
  product: Product;
  quantityInCart: number;
  onAddToCart: (p: Product) => void;
  onOpenModal: (p: Product) => void;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images =
    product.images && product.images.length > 0
      ? product.images
      : product.img_url
      ? [product.img_url]
      : [];

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const hasDiscount = product.discount_percent > 0;
  const isOutOfStock = product.stock <= 0;
  const isLimitReached = isOutOfStock || quantityInCart >= product.stock;

  return (
    <div className={`${styles.productCard} ${isOutOfStock ? styles.outOfStockCard : ''}`}>
      <div className={styles.imageContainer}>
        <div className={styles.topLeftBadges}>
          {isOutOfStock ? (
            <span className={styles.outOfStockBadge}>Sin stock</span>
          ) : (
            product.badge && <span className={styles.tagBadge}>{product.badge}</span>
          )}
        </div>
        {hasDiscount && (
          <span className={styles.discountBadge}>-{product.discount_percent}%</span>
        )}

        {/* Galería apilada con transición suave */}
        <div className={styles.fadeImageWrap}>
          {images.map((img, idx) => (
            <Image
              key={img + idx}
              src={img}
              alt={product.title}
              fill
              className={`${styles.productImage} ${styles.fadeImage} ${
                activeImageIndex === idx ? styles.fadeImageActive : ''
              }`}
              sizes="(max-width: 768px) 100vw, 300px"
            />
          ))}
        </div>
      </div>

      <div className={styles.cardContent}>
        <span className={styles.productCategory}>{product.category}</span>
        <h3 className={styles.productTitle}>{product.title}</h3>

        <p
          className={styles.stockText}
          style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.2rem 0' }}
        >
          {product.stock > 0 ? `Stock: ${product.stock} un.` : 'Agotado'}
        </p>

        {product.description && (
          <button className={styles.moreInfoLink} onClick={() => onOpenModal(product)}>
            Más información
          </button>
        )}

        <div className={styles.cardFooter}>
          <div className={styles.priceGroup}>
            {hasDiscount && (
              <span className={styles.originalPrice}>{formatCLP(product.price)}</span>
            )}
            <span className={styles.price}>{formatCLP(product.final_price)}</span>
          </div>
          <button
            className={styles.addBtn}
            onClick={() => onAddToCart(product)}
            disabled={isLimitReached}
          >
            {isOutOfStock
              ? 'Sin stock'
              : quantityInCart >= product.stock
              ? 'Máximo'
              : '+ Agregar'}
          </button>
        </div>
      </div>
    </div>
  );
}

/* Subcomponente para el Modal de Detalle con transición de opacidad */
function ProductModalDetails({
  product,
  cart,
  onClose,
  onAddToCart,
}: {
  product: Product;
  cart: Array<{ id: number; quantity: number }>;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images =
    product.images && product.images.length > 0
      ? product.images
      : product.img_url
      ? [product.img_url]
      : [];

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length, activeImageIndex]);

  const modalItem = cart.find((item) => item.id === product.id);
  const modalQtyInCart = modalItem ? modalItem.quantity : 0;
  const modalIsLimit = product.stock <= 0 || modalQtyInCart >= product.stock;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalCloseBtn} onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        {images.length > 0 && (
          <div className={styles.modalGalleryWrap}>
            <div className={styles.modalImageWrap} style={{ position: 'relative' }}>
              <div className={styles.fadeImageWrap}>
                {images.map((img, idx) => (
                  <Image
                    key={img + idx}
                    src={img}
                    alt={product.title}
                    fill
                    className={`${styles.modalImage} ${styles.fadeImage} ${
                      activeImageIndex === idx ? styles.fadeImageActive : ''
                    }`}
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                ))}
              </div>
            </div>

            {images.length > 1 && (
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  marginTop: '12px',
                  justifyContent: 'center',
                }}
              >
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      border:
                        activeImageIndex === idx
                          ? '2px solid #16a34a'
                          : '1px solid #e2e8f0',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      width: '48px',
                      height: '48px',
                      position: 'relative',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'border-color 0.2s ease',
                    }}
                  >
                    <Image src={img} alt="" fill style={{ objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className={styles.modalInfoBox}>
          <span className={styles.productCategory}>{product.category}</span>
          <h3 className={styles.modalTitle}>{product.title}</h3>

          {product.description && (
            <p className={styles.modalDescription}>{product.description}</p>
          )}

          <p className={styles.stockText}>
            {product.stock > 0
              ? `${product.stock} unidades disponibles`
              : 'Sin stock disponible'}
          </p>

          <div
            className={styles.cardFooter}
            style={{ margin: 0, padding: 0, border: 'none', background: 'transparent' }}
          >
            <div className={styles.priceGroup}>
              {product.discount_percent > 0 && (
                <span className={styles.originalPrice}>{formatCLP(product.price)}</span>
              )}
              <span className={styles.price}>{formatCLP(product.final_price)}</span>
            </div>

            <button
              className={styles.addBtn}
              disabled={modalIsLimit}
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
            >
              {product.stock <= 0
                ? 'Sin stock'
                : modalQtyInCart >= product.stock
                ? 'Máximo alcanzado'
                : '+ Agregar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({ onAddToCart }: { onAddToCart: (product: Product) => void }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(['Todos']);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('id, title, category, price, discount_percent, final_price, description, img_url, images, badge, is_new, stock')
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProducts = (
    activeCategory === 'Todos' ? products : products.filter((p) => p.category === activeCategory)
  ).sort((a, b) => (b.stock > 0 ? 1 : 0) - (a.stock > 0 ? 1 : 0));

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
            const cartItem = cart.find((item) => item.id === product.id);
            const quantityInCart = cartItem ? cartItem.quantity : 0;

            return (
              <ProductCard
                key={product.id}
                product={product}
                quantityInCart={quantityInCart}
                onAddToCart={onAddToCart}
                onOpenModal={(p) => setSelectedProduct(p)}
              />
            );
          })}
        </div>
      </div>

      {selectedProduct && (
        <ProductModalDetails
          product={selectedProduct}
          cart={cart}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
        />
      )}
    </section>
  );
}