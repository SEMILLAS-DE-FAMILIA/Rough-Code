'use client';

import { useDistributorStore } from '../../src/lib/useDistributorStore';
import React, { useState } from 'react';
import styles from './AppLayout.module.css';

interface CartItem {
  id: number;
  title: string;
  price: string;
  img: string;
}

interface HeaderNavProps {
  cartItems: CartItem[];
  onRemoveFromCart: (index: number) => void;
  onOpenDistributorModal: () => void;
}

export default function HeaderNav({ cartItems, onRemoveFromCart, onOpenDistributorModal }: HeaderNavProps) {
    const isDistributor = useDistributorStore((s) => s.status === 'approved');
    const distributorName = useDistributorStore((s) => s.profile?.company_name);
    const logout = useDistributorStore((s) => s.logout);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className={styles.floatingNavbar}>
        <div className={styles.navActions}>
          <button 
            className={styles.iconBtn} 
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Abrir Menú"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className={styles.brandLogo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Semillas de Familia
          </span>
        </div>

        <div className={styles.navActions} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {/* Botón rápido de acceso a distribuidores en la barra superior */}
          <button 
            onClick={isDistributor ? logout : onOpenDistributorModal}            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: '20px',
              background: isDistributor ? '#15803d' : '#1e293b',
              color: '#fff',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {isDistributor ? `✓ ${distributorName}` : 'Soy Distribuidor'}
          </button>

          <button 
            className={styles.iconBtn} 
            onClick={() => setIsCartOpen(true)}
            aria-label="Ver Carrito"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartItems.length > 0 && (
              <span className={styles.cartBadge}>{cartItems.length}</span>
            )}
          </button>
        </div>
      </header>

      <div 
        className={`${styles.sidebarOverlay} ${(isSidebarOpen || isCartOpen) ? styles.isOpen : ''}`}
        onClick={() => { setIsSidebarOpen(false); setIsCartOpen(false); }}
      />

      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.isOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <h3>Panel Control</h3>
          <button className={styles.iconBtn} onClick={() => setIsSidebarOpen(false)}>✕</button>
        </div>
        <nav className={styles.sidebarNav}>
          <button className={`${styles.sidebarLink} ${styles.active}`}>
            <span>👤</span> Mi Cuenta
          </button>
          <button className={styles.sidebarLink}>
            <span>📦</span> Mis Pedidos
          </button>
          
          <hr style={{ border: '0.5px solid rgba(255,255,255,0.1)', margin: '0.5rem 0' }} />
          
          <button 
            className={styles.sidebarLink} 
            onClick={() => { setIsSidebarOpen(false); onOpenDistributorModal(); }}
            style={{ color: '#38bdf8' }}
          >
            <span>🤝</span> {isDistributor ? 'Configuración Mayorista' : 'Acceso Distribuidores'}
          </button>

          <button className={styles.sidebarLink}>
            <span>🛠️</span> Panel Admin
            <span className={styles.adminBadge}>ADMIN</span>
          </button>
        </nav>
      </aside>

      <aside className={`${styles.cartDrawer} ${isCartOpen ? styles.isOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <h3>Carrito ({cartItems.length})</h3>
          <button className={styles.iconBtn} onClick={() => setIsCartOpen(false)}>✕</button>
        </div>

        <div className={styles.cartList}>
          {cartItems.length === 0 ? (
            <p style={{ color: '#94a3b8', textAlign: 'center', marginTop: '2rem' }}>
              El carrito está vacío.
            </p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className={styles.cartItem}>
               {item.img && <img src={item.img} alt={item.title} className={styles.cartItemImg} />}
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '600' }}>{item.title}</h4>
                  <p style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: '700' }}>{item.price}</p>
                </div>
                <button className={styles.iconBtn} onClick={() => onRemoveFromCart(index)}>✕</button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <button className={styles.cartCheckoutBtn}>
            Finalizar Compra
          </button>
        )}
      </aside>
    </>
  );
}