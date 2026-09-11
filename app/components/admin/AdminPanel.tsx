'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import Dashboard from './Dashboard';
import ProductsManager from './ProductsManager';
import CategoriesManager from './CategoriesManager';
import CarouselManager from './CarouselManager';
import BannerManager from './BannerManager';
import DistributorsManager from './DistributorsManager';
import OrdersManager from './OrdersManager';
import styles from './Admin.module.css';

type Tab = 'dashboard' | 'products' | 'categories' | 'carousel' | 'banner' | 'distributors' | 'orders';
const TABS: { id: Tab; label: string }[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'orders', label: 'Pedidos' },
  { id: 'categories', label: 'Categorías' },
  { id: 'products', label: 'Productos' },
  { id: 'carousel', label: 'Carrusel' },
  { id: 'banner', label: 'Banner' },
  { id: 'distributors', label: 'Distribuidores' },
];

// Cierra la sesión automáticamente tras este tiempo sin actividad
const INACTIVITY_LIMIT_MS = 15 * 60 * 1000; // 15 minutos

// Eventos que cuentan como "actividad" y reinician el contador
const ACTIVITY_EVENTS: (keyof WindowEventMap)[] = [
  'mousemove',
  'mousedown',
  'keydown',
  'scroll',
  'touchstart',
];

export default function AdminPanel({ onLoggedOut }: { onLoggedOut: (reason?: 'inactivity') => void }) {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogout = useCallback(
    async (reason?: 'inactivity') => {
      await supabase.auth.signOut();
      onLoggedOut(reason);
    },
    [onLoggedOut]
  );

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      handleLogout('inactivity');
    }, INACTIVITY_LIMIT_MS);
  }, [handleLogout]);

  useEffect(() => {
    resetInactivityTimer();

    ACTIVITY_EVENTS.forEach((event) => window.addEventListener(event, resetInactivityTimer));

    return () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      ACTIVITY_EVENTS.forEach((event) => window.removeEventListener(event, resetInactivityTimer));
    };
  }, [resetInactivityTimer]);

  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>
          <span className={styles.sidebarBrandTitle}>Semillas de Familia</span>
          <span className={styles.sidebarBrandSub}>Panel Admin</span>
        </div>

        <nav className={styles.sidebarNav}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.sidebarNavItem} ${activeTab === tab.id ? styles.sidebarNavItemActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className={styles.navDot} />
              {tab.label}
            </button>
          ))}
        </nav>

        <button className={styles.sidebarLogout} onClick={() => handleLogout()}>
          Cerrar sesión
        </button>
      </aside>

      <main className={styles.mainArea}>
        <div className={styles.panelBody}>
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'orders' && <OrdersManager />}
          {activeTab === 'categories' && <CategoriesManager />}
          {activeTab === 'products' && <ProductsManager />}
          {activeTab === 'carousel' && <CarouselManager />}
          {activeTab === 'banner' && <BannerManager />}
          {activeTab === 'distributors' && <DistributorsManager />}
        </div>
      </main>
    </div>
  );
}