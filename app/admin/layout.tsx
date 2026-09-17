'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '../../src/lib/supabaseClient';
import styles from '../components/admin/Admin.module.css';

const TABS = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/pedidos', label: 'Pedidos' },
  { href: '/admin/categorias', label: 'Categorías' },
  { href: '/admin/productos', label: 'Productos' },
  { href: '/admin/carrusel', label: 'Carrusel' },
  { href: '/admin/banner', label: 'Banner' },
  { href: '/admin/distribuidores', label: 'Distribuidores' },
  { href: '/admin/carga-masiva', label: 'Carga Masiva' },
];

const INACTIVITY_LIMIT_MS = 15 * 60 * 1000;
const ACTIVITY_EVENTS: (keyof WindowEventMap)[] = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogout = useCallback(async (reason?: 'inactivity') => {
    await supabase.auth.signOut();
    router.push(reason === 'inactivity' ? '/login?reason=inactivity' : '/login');
  }, [router]);

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => handleLogout('inactivity'), INACTIVITY_LIMIT_MS);
  }, [handleLogout]);

  useEffect(() => {
    let active = true;

    async function verify() {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        if (active) { setAuthorized(false); setChecking(false); }
        router.push('/login');
        return;
      }
      const { data: isAdminData, error } = await supabase.rpc('is_admin');
      if (error || !isAdminData) {
        await supabase.auth.signOut();
        if (active) { setAuthorized(false); setChecking(false); }
        router.push('/login?reason=unauthorized'); // 👈 antes se perdía este caso
        return;
      }
      if (active) { setAuthorized(true); setChecking(false); }
    }

    verify();
    const { data: listener } = supabase.auth.onAuthStateChange(() => verify());
    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, [router]);

  useEffect(() => {
    if (!authorized) return;
    resetInactivityTimer();
    ACTIVITY_EVENTS.forEach((e) => window.addEventListener(e, resetInactivityTimer));
    return () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      ACTIVITY_EVENTS.forEach((e) => window.removeEventListener(e, resetInactivityTimer));
    };
  }, [authorized, resetInactivityTimer]);

  if (checking) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Cargando...
      </div>
    );
  }
  if (!authorized) return null;

  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>
          <span className={styles.sidebarBrandTitle}>Semillas de Familia</span>
          <span className={styles.sidebarBrandSub}>Panel Admin</span>
        </div>

        <nav className={styles.sidebarNav}>
          {TABS.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`${styles.sidebarNavItem} ${pathname === tab.href ? styles.sidebarNavItemActive : ''}`}
            >
              <span className={styles.navDot} />
              {tab.label}
            </Link>
          ))}
        </nav>

        <button className={styles.sidebarLogout} onClick={() => handleLogout()}>
          Cerrar sesión
        </button>
      </aside>

      <main className={styles.mainArea}>
        <div className={styles.panelBody}>{children}</div>
      </main>
    </div>
  );
}