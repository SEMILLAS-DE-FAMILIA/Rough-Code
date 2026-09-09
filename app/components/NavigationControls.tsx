'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './AppLayout.module.css';
import { useCartStore } from '../../src/lib/useCartStore';

interface NavigationControlsProps {
  lastAddedProduct: string | null;
}

const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

const REMOVE_ANIMATION_MS = 220;

function useIsHydrated() {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => setIsHydrated(true), []);
  return isHydrated;
}

export default function NavigationControls({ lastAddedProduct }: NavigationControlsProps) {
  const isHydrated = useIsHydrated();
  
  const storeCart = useCartStore((state) => state.cart);
  const storeItemCount = useCartStore((state) => state.itemCount());
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const cartItems = isHydrated ? storeCart : [];
  const itemCount = isHydrated ? storeItemCount : 0;

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [removingId, setRemovingId] = useState<string | null>(null);

  const subtotal = cartItems.reduce((acc, item) => acc + item.unit_price * item.quantity, 0);
  const total = subtotal;

  const handleRemoveClick = (id: string) => {
    setRemovingId(id);
    setTimeout(() => {
      removeItem(id);
      setRemovingId(null);
    }, REMOVE_ANIMATION_MS);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Logo Flotante Abajo-Izquierda (Sube al inicio) */}
      <button
        className={styles.menuFloatingBtn}
        onClick={scrollToTop}
        aria-label="Ir al inicio"
        style={{
          padding: '0',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '64px',
          height: '64px',
          cursor: 'pointer',
        }}
      >
        <Image
          src="/images/logo/logo.png"
          alt="Inicio"
          width={62}
          height={62}
          style={{ objectFit: 'contain' }}
        />
      </button>

      {/* 2. Botón Carrito Flotante Abajo-Derecha */}
      <button
        className={styles.cartFloatingBtn}
        onClick={() => setIsCartOpen(true)}
        aria-label="Ver Carrito"
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="22" height="22">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        {itemCount > 0 && (
          <span key={itemCount} className={styles.cartBadge}>
            {itemCount}
          </span>
        )}
      </button>

      {/* Overlay Sombra para el Carrito */}
      <div
        className={`${styles.sidebarOverlay} ${isCartOpen ? styles.isOpen : ''}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Panel Desplegable del Carrito */}
      <aside className={`${styles.cartDrawer} ${isCartOpen ? styles.isOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <h3>Tu Carrito ({itemCount})</h3>
          <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>
            ✕
          </button>
        </div>

        {/* Lista de Productos */}
        <div className={styles.cartList}>
          {cartItems.length === 0 ? (
            <div className={styles.emptyCartState}>
              <span>🌱</span>
              <p>Tu carrito está vacío por ahora.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className={`${styles.cartItem} ${removingId === item.id ? styles.cartItemRemoving : ''}`}
              >
                {item.img_url && (
                  <img src={item.img_url} alt={item.product_title} className={styles.cartItemImg} />
                )}
                <div style={{ flex: 1 }}>
                  <h4 className={styles.cartItemTitle}>{item.product_title}</h4>
                  <p className={styles.cartItemPrice}>{formatCLP(item.unit_price)}</p>

                  <div className={styles.quantityControls}>
                    <button onClick={() => updateQuantity(item.id, -1)} aria-label="Restar uno">
                      -
                    </button>
                    <span key={item.quantity}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} aria-label="Sumar uno">
                      +
                    </button>
                  </div>
                </div>

                <button
                  className={styles.deleteBtn}
                  onClick={() => handleRemoveClick(item.id)}
                  title="Eliminar producto"
                  aria-label="Eliminar producto"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Resumen de compra */}
        {cartItems.length > 0 && (
          <div className={styles.cartFooter}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.summaryRow}>
                <span className={styles.summaryRowLabel}>
                  {item.product_title}
                  {item.quantity > 1 && <span className={styles.summaryRowQty}> ×{item.quantity}</span>}
                </span>
                <span className={styles.summaryRowValue}>
                  {formatCLP(item.unit_price * item.quantity)}
                </span>
              </div>
            ))}

            <hr className={styles.summaryDivider} />

            <div className={styles.totalRow}>
              <span>Total</span>
              <span className={styles.totalPrice}>{formatCLP(total)}</span>
            </div>

            <Link
              href="/pedidos"
              className={styles.cartCheckoutBtn}
              style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
            >
              Ir a Pagar
            </Link>
          </div>
        )}
      </aside>

      {/* Toast Flotante */}
      {lastAddedProduct && !isCartOpen && (
        <div className={styles.toastNotification}>
          <span style={{ fontSize: '1.2rem' }}>🌿</span>
          <div>
            <p style={{ fontWeight: 600 }}>Agregado a tu selección</p>
            <p style={{ color: '#64748b', fontSize: '0.8rem' }}>{lastAddedProduct}</p>
          </div>
        </div>
      )}
    </>
  );
}