'use client';

import React, { useState } from 'react';
import styles from './AppLayout.module.css';
import { CartItem } from '../page';

interface NavigationControlsProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
  lastAddedProduct: string | null;
}

export default function NavigationControls({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  lastAddedProduct,
}: NavigationControlsProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Total de items para la insignia
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Total en CLP
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      const numericPrice = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
      return acc + numericPrice * item.quantity;
    }, 0);
  };

  const formattedTotal = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(calculateTotal());

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
        {totalItemCount > 0 && <span className={styles.cartBadge}>{totalItemCount}</span>}
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
          <button className={styles.sidebarLink}>
            <span>🛠️</span> Panel Admin
            <span className={styles.adminBadge}>ADMIN</span>
          </button>
        </nav>
      </aside>

      {/* Panel Desplegable del Carrito (Warm Theme) */}
      <aside className={`${styles.cartDrawer} ${isCartOpen ? styles.isOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <h3>Tu Carrito ({totalItemCount})</h3>
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
              <div key={item.id} className={styles.cartItem}>
                <img src={item.img} alt={item.title} className={styles.cartItemImg} />
                <div style={{ flex: 1 }}>
                  <h4 className={styles.cartItemTitle}>{item.title}</h4>
                  <p className={styles.cartItemPrice}>{item.price}</p>

                  {/* Selector de Cantidad */}
                  <div className={styles.quantityControls}>
                    <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>

                <button
                  className={styles.deleteBtn}
                  onClick={() => onRemoveItem(item.id)}
                  title="Eliminar producto"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Total y Finalizar Compra */}
        {cartItems.length > 0 && (
          <div className={styles.cartFooter}>
            <div className={styles.totalRow}>
              <span>Total acumulado:</span>
              <span className={styles.totalPrice}>{formattedTotal}</span>
            </div>
            <button className={styles.cartCheckoutBtn}>Ir a Pagar</button>
          </div>
        )}
      </aside>

      {/* Toast Flotante CÁLIDO */}
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