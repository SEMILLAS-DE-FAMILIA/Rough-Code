'use client';

import React, { useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import Dashboard from './Dashboard';
import ProductsManager from './ProductsManager';
import CarouselManager from './CarouselManager';
import BannerManager from './BannerManager';
import styles from './Admin.module.css';

type Tab = 'dashboard' | 'products' | 'carousel' | 'banner';

const TABS: { id: Tab; label: string }[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'products', label: 'Productos' },
  { id: 'carousel', label: 'Carrusel' },
  { id: 'banner', label: 'Banner' },
];

export default function AdminPanel({ onLoggedOut }: { onLoggedOut: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLoggedOut();
  };

  return (
    <div className={styles.adminWrapper}>
      <header className={styles.panelHeader}>
        <h1>Semillas de Familia · Admin</h1>
        <button className={styles.logoutBtn} onClick={handleLogout}>
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
        {activeTab === 'carousel' && <CarouselManager />}
        {activeTab === 'banner' && <BannerManager />}
      </main>
    </div>
  );
}