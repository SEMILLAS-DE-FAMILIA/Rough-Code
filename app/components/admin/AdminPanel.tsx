'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import Dashboard from './Dashboard';
import ProductsManager from './ProductsManager';
import CategoriesManager from './CategoriesManager';
import CarouselManager from './CarouselManager';
import BannerManager from './BannerManager';
import styles from './Admin.module.css';

type Tab = 'dashboard' | 'products' | 'categories' | 'carousel' | 'banner';

const TABS: { id: Tab; label: string }[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'products', label: 'Productos' },
  { id: 'categories', label: 'Categorías' },
  { id: 'carousel', label: 'Carrusel' },
  { id: 'banner', label: 'Banner' },
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
    <div className={styles.adminWrapper}>
      <header className={styles.panelHeader}>
        <h1>Semillas de Familia · Admin</h1>
        <button className={styles.logoutBtn} onClick={() => handleLogout()}>
          Cerrar sesión
        </button>
      </header>

      <nav className={styles.tabBar}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className={styles.panelBody}>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'products' && <ProductsManager />}
        {activeTab === 'categories' && <CategoriesManager />}
        {activeTab === 'carousel' && <CarouselManager />}
        {activeTab === 'banner' && <BannerManager />}
      </main>
    </div>
  );
}