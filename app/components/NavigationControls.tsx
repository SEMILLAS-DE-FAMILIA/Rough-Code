'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './AppLayout.module.css';
import { useCartStore } from '../../src/lib/useCartStore';

interface NavigationControlsProps {
  lastAddedProduct: string | null;
}

const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

const REMOVE_ANIMATION_MS = 220;

// Hook para evitar errores de hidratación (Hydration mismatch) en Next.js
function useIsHydrated() {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => setIsHydrated(true), []);
  return isHydrated;
}

export default function NavigationControls({ lastAddedProduct }: NavigationControlsProps) {
  const isHydrated = useIsHydrated();
  
  // Extraemos del store
  const storeCart = useCartStore((state) => state.cart);
  const storeItemCount = useCartStore((state) => state.itemCount());
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  // Evitamos renderizar datos de localStorage en el servidor
  const cartItems = isHydrated ? storeCart : [];
  const itemCount = isHydrated ? storeItemCount : 0;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [removingId, setRemovingId] = useState<number | null>(null);

  const subtotal = cartItems.reduce((acc, item) => acc + item.final_price * item.quantity, 0);
  const total = subtotal;

  const handleRemoveClick = (id: number) => {
    setRemovingId(id);
    setTimeout(() => {
      removeItem(id);
      setRemovingId(null);
    }, REMOVE_ANIMATION_MS);
  };

  return (
    <>
      {/* 1. Botón 3 Puntos (Izquierda) */}
      <button
        className={styles.menuFloatingBtn}
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Abrir Menú"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      </button>

      {/* 2. Botón Carrito Flotante (Derecha) */}
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

      {/* Overlay Sombra Suave */}
      <div
        className={`${styles.sidebarOverlay} ${
          isSidebarOpen || isCartOpen ? styles.isOpen : ''
        }`}
        onClick={() => {
          setIsSidebarOpen(false);
          setIsCartOpen(false);
        }}
      />

      {/* Sidebar Menú Lateral */}
      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.isOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <h3>Menú</h3>
          <button className={styles.closeBtn} onClick={() => setIsSidebarOpen(false)}>
            ✕
          </button>
        </div>
        <nav className={styles.sidebarNav}>
          <button className={`${styles.sidebarLink} ${styles.active}`}>
            <span>👤</span> Mi Cuenta
          </button>
          <button className={styles.sidebarLink}>
            <span>📦</span> Mis Pedidos
          </button>
          <hr style={{ border: '0.5px solid #e2e8f0', margin: '0.75rem 0' }} />
          <a href="/admin" className={styles.sidebarLink} style={{ textDecoration: 'none' }}>
            <span>🛠️</span> Panel Admin
            <span className={styles.adminBadge}>ADMIN</span>
          </a>
        </nav>
      </aside>

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
                  <img src={item.img_url} alt={item.title} className={styles.cartItemImg} />
                )}
                <div style={{ flex: 1 }}>
                  <h4 className={styles.cartItemTitle}>{item.title}</h4>
                  <p className={styles.cartItemPrice}>{formatCLP(item.final_price)}</p>

                  {/* Selector de Cantidad */}
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
                  {item.title}
                  {item.quantity > 1 && <span className={styles.summaryRowQty}> ×{item.quantity}</span>}
                </span>
                <span className={styles.summaryRowValue}>
                  {formatCLP(item.final_price * item.quantity)}
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