'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { formatCLP } from '../../../src/lib/format'; // ajusta la ruta relativa según el archivo
import { Product, ProductFlavor, ProductVariant } from '../../../src/types/product';
import { useCartStore, NewCartItem } from '../../../src/lib/useCartStore';
import styles from './ProductModalDetails.module.css';

const RESERVATION_DISPLAY_MAX = 99; // límite de UI para ítems bajo reserva (sin stock físico que los limite)

function stockFor(variant: ProductVariant | undefined, flavorId: number | undefined) {
  if (!variant || flavorId == null) return 0;
  return variant.stocks.find((s) => s.flavor_id === flavorId)?.stock ?? 0;
}

interface ProductModalDetailsProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (item: NewCartItem) => void; // antes: any
  distributorPrices?: Record<number, number>;
}

export default function ProductModalDetails({
  product,
  onClose,
  onAddToCart,
  distributorPrices,
}: ProductModalDetailsProps) {
  const [mounted, setMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVariantId, setSelectedVariantId] = useState<number>(product.variants[0]?.id || 0);
  const [flavorQuantities, setFlavorQuantities] = useState<Record<number, number>>({});

  const cart = useCartStore((s) => s.cart);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Bloquear el scroll del body al abrir el modal y restaurarlo al desmontar
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 250); // Ajusta este tiempo según la duración de tu animación CSS de salida
  };

  const alreadyInCart = (variantId: number, flavorId: number) => {
    const compositeId = `${variantId}-${flavorId}`;
    return cart.find((c) => c.id === compositeId)?.quantity ?? 0;
  };

  const images = product.images && product.images.length > 0 ? product.images : product.img_url ? [product.img_url] : [];

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const currentVariant = product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];

  const handleQuantityChange = (flavorId: number, qty: number, maxStock: number) => {
    const validQty = Math.max(0, Math.min(qty, maxStock));
    setFlavorQuantities((prev) => ({ ...prev, [flavorId]: validQty }));
  };

  const currentDistributorPrice = currentVariant && distributorPrices ? distributorPrices[currentVariant.id] : undefined;

  const unitPrice = () => {
    if (!currentVariant) return 0;
    if (currentDistributorPrice != null) return currentDistributorPrice;
    const disc = currentVariant.discount_percent || 0;
    return disc > 0 ? currentVariant.price * (1 - disc / 100) : currentVariant.price;
  };

  const handleReserveFlavor = (flavorObj: ProductFlavor) => {
    if (!currentVariant) return;
    const finalPrice = unitPrice();

    onAddToCart({
      product_id: product.id,
      product_title: product.title,
      variant_id: currentVariant.id,
      flavor_id: flavorObj.id,
      selected_weight: currentVariant.weight,
      selected_flavor: flavorObj.flavor_name,
      unit_price: finalPrice,
      quantity: 1,
      img_url: product.img_url,
      max_stock: RESERVATION_DISPLAY_MAX,
      is_reservation: true,
    });

    handleClose();
  };

  const handleAddAll = () => {
    if (!currentVariant) return;
    const finalPrice = unitPrice();

    Object.entries(flavorQuantities).forEach(([flavorIdStr, qty]) => {
      if (qty > 0) {
        const flavorId = parseInt(flavorIdStr, 10);
        const flavorObj = product.flavors.find((f) => f.id === flavorId);
        if (flavorObj) {
          const maxStock = stockFor(currentVariant, flavorObj.id);
          onAddToCart({
            product_id: product.id,
            product_title: product.title,
            variant_id: currentVariant.id,
            flavor_id: flavorObj.id,
            selected_weight: currentVariant.weight,
            selected_flavor: flavorObj.flavor_name,
            unit_price: finalPrice,
            quantity: qty,
            img_url: product.img_url,
            max_stock: maxStock,
          });
        }
      }
    });

    handleClose();
  };

  const totalSelectedCount = Object.values(flavorQuantities).reduce((sum, q) => sum + q, 0);

  if (!mounted) return null;

  return createPortal(
    <div 
      className={`${styles.modalOverlay} ${isClosing ? styles.modalOverlayExit : ''}`} 
      onClick={handleClose}
    >
      <div 
        className={`${styles.modalCard} ${isClosing ? styles.modalCardExit : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.modalCloseBtn} onClick={handleClose}>✕</button>

        {images.length > 0 && (
          <div className={styles.modalImageWrap}>
            <div className={styles.fadeImageWrap}>
              {images.map((img, idx) => (
                <Image
                  key={img + idx}
                  src={img}
                  alt={product.title}
                  fill
                  className={`${styles.modalImage} ${styles.fadeImage} ${activeImageIndex === idx ? styles.fadeImageActive : ''}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className={styles.modalInfoBox}>
          <span className={styles.productCategory}>{product.category_name || 'Sin categoría'}</span>
          <h3 className={styles.modalTitle}>{product.title}</h3>
          {product.description && <p className={styles.modalDescription}>{product.description}</p>}

          <div style={{ margin: '1rem 0' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Selecciona el Peso:</label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {product.variants.map((v) => {
                const isSelected = selectedVariantId === v.id;
                const vDistPrice = distributorPrices?.[v.id];
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => {
                      setSelectedVariantId(v.id);
                      setFlavorQuantities({});
                    }}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      border: isSelected ? '2px solid #22c55e' : '1px solid #cbd5e1',
                      background: isSelected ? '#f0fdf4' : '#fff',
                      color: isSelected ? '#15803d' : '#334155',
                      fontWeight: isSelected ? 600 : 400,
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                    }}
                  >
                    {v.weight} -{' '}
                    {vDistPrice != null
                      ? formatCLP(vDistPrice)
                      : formatCLP(v.discount_percent > 0 ? v.price * (1 - v.discount_percent / 100) : v.price)}
                    {vDistPrice == null && v.discount_percent > 0 && ` (-${v.discount_percent}%)`}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ margin: '1.2rem 0' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.6rem' }}>
              Elige los sabores y cantidades:
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {product.flavors.map((f) => {
                const maxStock = stockFor(currentVariant, f.id);
                const inCart = currentVariant ? alreadyInCart(currentVariant.id, f.id) : 0;
                const remainingRoom = Math.max(0, maxStock - inCart);
                const currentQty = flavorQuantities[f.id] || 0;
                const isFlavorOutOfStock = remainingRoom <= 0;

                return (
                  <div
                    key={f.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: currentQty > 0 ? '2px solid #22c55e' : '1px solid #e2e8f0',
                      background: currentQty > 0 ? '#f0fdf4' : isFlavorOutOfStock ? '#fefce8' : '#fafaf9',
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#1e293b', display: 'block' }}>{f.flavor_name}</span>
                      <span style={{ fontSize: '0.75rem', color: remainingRoom > 0 ? '#64748b' : '#d97706' }}>
                        {remainingRoom > 0
                          ? `Disponible: ${remainingRoom}${inCart > 0 ? ` (ya tienes ${inCart} en el carrito)` : ''}`
                          : 'Sin stock físico (Reservable)'}
                      </span>
                    </div>

                    {isFlavorOutOfStock ? (
                      <button
                        type="button"
                        onClick={() => handleReserveFlavor(f)}
                        style={{
                          background: '#eab308',
                          color: '#0f172a',
                          border: 'none',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                        }}
                      >
                        Reservar
                      </button>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <button
                          type="button"
                          disabled={remainingRoom <= 0 || currentQty <= 0}
                          onClick={() => handleQuantityChange(f.id, currentQty - 1, remainingRoom)}
                          style={{ width: '28px', height: '28px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#fff', cursor: 'pointer' }}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="0"
                          max={remainingRoom}
                          value={currentQty}
                          onChange={(e) => handleQuantityChange(f.id, parseInt(e.target.value, 10) || 0, remainingRoom)}
                          style={{ width: '45px', textAlign: 'center', padding: '4px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                        />
                        <button
                          type="button"
                          disabled={remainingRoom <= 0 || currentQty >= remainingRoom}
                          onClick={() => handleQuantityChange(f.id, currentQty + 1, remainingRoom)}
                          style={{ width: '28px', height: '28px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#fff', cursor: 'pointer' }}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.cardFooter}>
            <div className={styles.priceGroup}>
              {currentDistributorPrice != null && currentVariant && (
                <span className={styles.originalPrice}>{formatCLP(currentVariant.price)}</span>
              )}
              <span className={styles.price} style={currentDistributorPrice != null ? { color: '#2563eb' } : undefined}>
                {formatCLP(unitPrice())} c/u
              </span>
            </div>
            <button
              type="button"
              className={styles.addBtn}
              disabled={totalSelectedCount <= 0}
              onClick={handleAddAll}
              style={{ opacity: totalSelectedCount <= 0 ? 0.6 : 1 }}
            >
              + Agregar al carrito ({totalSelectedCount})
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}