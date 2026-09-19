'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { formatCLP } from '../../../src/lib/format'; // ajusta la ruta relativa según el archivo
import { Product, ProductVariant } from '../../../src/types/product';
import { NewCartItem } from '../../../src/lib/useCartStore'; // nuevo import
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  onOpenModal: (p: Product) => void;
  onAddToCart?: (item: NewCartItem) => void; // nuevo prop
  viewingDistributorTab?: boolean;
  isDistributorLoggedIn?: boolean;
  distributorPrices?: Record<number, number>;
  onOpenDistributorModal?: () => void;
}

export default function ProductCard({
  product,
  onOpenModal,
  onAddToCart,
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

  // Lógica de quick-add
  const showQuickAdd =
    !!onAddToCart &&
    !viewingDistributorTab &&
    !isOutOfStock &&
    !!firstVariant &&
    product.flavors.length > 0 &&
    product.flavors.length <= 3;

  const stockForFlavor = (flavorId: number) =>
    firstVariant?.stocks.find((s) => s.flavor_id === flavorId)?.stock ?? 0;

  const handleQuickAdd = (e: React.MouseEvent, flavorId: number, flavorName: string) => {
    e.stopPropagation();
    if (!firstVariant || !onAddToCart) return;
    const stock = stockForFlavor(flavorId);
    if (stock <= 0) return;
    const price = hasDiscount ? firstVariant.price * (1 - firstVariant.discount_percent / 100) : firstVariant.price;
    onAddToCart({
      product_id: product.id,
      product_title: product.title,
      variant_id: firstVariant.id,
      flavor_id: flavorId,
      selected_weight: firstVariant.weight,
      selected_flavor: flavorName,
      unit_price: price,
      quantity: 1,
      img_url: product.img_url,
      max_stock: stock,
    });
  };

  const handleCardClick = () => {
    if (isLocked) {
      onOpenDistributorModal?.();
    } else {
      onOpenModal(product);
    }
  };

  const activeImage = images[activeImageIndex] || product.img_url;

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
          {activeImage && (
            <Image
              key={activeImage}
              src={activeImage}
              alt={product.title}
              fill
              priority={activeImageIndex === 0}
              className={`${styles.productImage} ${styles.fadeImage} ${styles.fadeImageActive}`}
              sizes="(max-width: 768px) 100vw, 300px"
            />
          )}
          {images.length > 1 && (
            <link
              rel="prefetch"
              href={images[(activeImageIndex + 1) % images.length]}
            />
          )}
        </div>
      </div>

      <div className={styles.cardContent}>
        <span className={styles.productCategory}>{product.category_name || 'Sin categoría'}</span>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.stockText} style={{ color: isOutOfStock ? '#d97706' : '#64748b', fontWeight: isOutOfStock ? 600 : 400 }}>
          {totalStock > 0 ? `${product.variants.length} opciones de peso` : 'Disponible bajo reserva'}
        </p>

        {/* Fila de Quick Add */}
        {showQuickAdd && (
          <div style={{ margin: '0.5rem 0' }}>
            <p style={{ fontSize: '0.7rem', color: '#78716c', fontWeight: 600, margin: '0 0 0.35rem 0' }}>
              Agregar directo · {firstVariant.weight} ·{' '}
              {formatCLP(hasDiscount ? firstVariant.price * (1 - firstVariant.discount_percent / 100) : firstVariant.price)}
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {product.flavors.map((f) => {
                const stock = stockForFlavor(f.id);
                const disabled = stock <= 0;
                return (
                  <button
                    key={f.id}
                    type="button"
                    disabled={disabled}
                    onClick={(e) => handleQuickAdd(e, f.id, f.flavor_name)}
                    title={disabled ? `${f.flavor_name} sin stock en ${firstVariant.weight}` : `Agregar 1x ${f.flavor_name} (${firstVariant.weight}) al carrito`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '4px 10px 4px 8px',
                      borderRadius: '9999px',
                      border: '1px solid #16a34a',
                      background: disabled ? '#f1f5f9' : '#f0fdf4',
                      color: disabled ? '#a8a29e' : '#15803d',
                      cursor: disabled ? 'not-allowed' : 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'transform 0.15s ease, background-color 0.15s ease',
                    }}
                    onMouseDown={(e) => {
                      if (!disabled) e.currentTarget.style.transform = 'scale(0.95)';
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {!disabled && <ShoppingCart size={12} strokeWidth={2.5} />}
                    {f.flavor_name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

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