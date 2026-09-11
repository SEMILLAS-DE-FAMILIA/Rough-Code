'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product, ProductVariant } from '../../../src/types/product';
import styles from './ProductCard.module.css';

const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

interface ProductCardProps {
  product: Product;
  onOpenModal: (p: Product) => void;
  viewingDistributorTab?: boolean;
  isDistributorLoggedIn?: boolean;
  distributorPrices?: Record<number, number>;
  onOpenDistributorModal?: () => void;
}

export default function ProductCard({
  product,
  onOpenModal,
  viewingDistributorTab = false,
  isDistributorLoggedIn = false,
  distributorPrices = {},
  onOpenDistributorModal,
}: ProductCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = product.images && product.images.length > 0 ? product.images : product.img_url ? [product.img_url] : [];

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const totalStock = product.variants.reduce((sum, v) => sum + v.stocks.reduce((s, e) => s + e.stock, 0), 0);
  const isOutOfStock = totalStock <= 0;
  const firstVariant = product.variants[0];
  const hasDiscount = firstVariant && firstVariant.discount_percent > 0;

  const isLocked = viewingDistributorTab && !isDistributorLoggedIn;

  const variantsWithDistPrice = product.variants
    .map((v) => ({ v, dp: distributorPrices[v.id] }))
    .filter((x): x is { v: ProductVariant; dp: number } => x.dp != null);
  const cheapestDistributor =
    variantsWithDistPrice.length > 0
      ? variantsWithDistPrice.reduce((min, x) => (x.dp < min.dp ? x : min))
      : undefined;

  const showDistributorPrice = viewingDistributorTab && isDistributorLoggedIn && cheapestDistributor != null;

  const handleCardClick = () => {
    if (isLocked) {
      onOpenDistributorModal?.();
    } else {
      onOpenModal(product);
    }
  };

  return (
    <div
      className={`${styles.productCard} ${isLocked ? styles.outOfStockCard : ''}`}
      onClick={handleCardClick}
    >
      <div className={styles.imageContainer}>
        <div className={styles.topLeftBadges}>
          {isOutOfStock ? (
            <span className={styles.outOfStockBadge}>Para Reservar</span>
          ) : (
            product.badge && <span className={styles.tagBadge}>{product.badge}</span>
          )}
          {product.is_distributor && (
            <span style={{ background: '#1e293b', color: '#fff', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
              MAYORISTA
            </span>
          )}
        </div>
        {hasDiscount && !isLocked && !showDistributorPrice && <span className={styles.discountBadge}>-{firstVariant.discount_percent}%</span>}

        <div className={styles.fadeImageWrap}>
          {images.map((img, idx) => (
            <Image
              key={img + idx}
              src={img}
              alt={product.title}
              fill
              className={`${styles.productImage} ${styles.fadeImage} ${activeImageIndex === idx ? styles.fadeImageActive : ''}`}
              sizes="(max-width: 768px) 100vw, 300px"
            />
          ))}
        </div>
      </div>

      <div className={styles.cardContent}>
        <span className={styles.productCategory}>{product.category_name || 'Sin categoría'}</span>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.stockText} style={{ color: isOutOfStock ? '#d97706' : '#64748b', fontWeight: isOutOfStock ? 600 : 400 }}>
          {totalStock > 0 ? `${product.variants.length} opciones de peso` : 'Disponible bajo reserva'}
        </p>

        <div className={styles.cardFooter}>
          <div className={styles.priceGroup}>
            {isLocked ? (
              <span style={{ fontSize: '0.8rem', color: '#d97706', fontWeight: 600 }}>Inicia sesión para ver precio</span>
            ) : showDistributorPrice ? (
              <>
                <span className={styles.originalPrice}>{formatCLP(cheapestDistributor!.v.price)}</span>
                <span className={styles.price} style={{ color: '#2563eb' }}>
                  Desde {formatCLP(cheapestDistributor!.dp)}
                </span>
              </>
            ) : firstVariant ? (
              <>
                {hasDiscount && <span className={styles.originalPrice}>{formatCLP(firstVariant.price)}</span>}
                <span className={styles.price}>
                  Desde {formatCLP(hasDiscount ? firstVariant.price * (1 - firstVariant.discount_percent / 100) : firstVariant.price)}
                </span>
              </>
            ) : null}
          </div>

          {isLocked ? (
            <button
              type="button"
              className={styles.addBtn}
              style={{ background: '#334155' }}
              onClick={(e) => {
                e.stopPropagation();
                onOpenDistributorModal?.();
              }}
            >
              Acceso
            </button>
          ) : (
            <button
              type="button"
              className={styles.addBtn}
              style={isOutOfStock ? { background: '#eab308', color: '#0f172a' } : undefined}
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(product);
              }}
            >
              {isOutOfStock ? 'Reservar' : 'Ver Opciones'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}