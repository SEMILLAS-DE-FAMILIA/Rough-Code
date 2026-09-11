'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DistributorBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Si el usuario ya lo cerró previamente, no lo mostramos
    const isDismissed = localStorage.getItem('distributor_toast_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => setIsVisible(true), 1200); // Aparece suave a los 1.2s
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('distributor_toast_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99,
        background: '#ffffff',
        border: '1px solid rgba(15, 23, 42, 0.08)',
        borderRadius: '1rem',
        padding: '1rem 1.25rem',
        boxShadow: '0 12px 24px -4px rgba(0, 0, 0, 0.12)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        maxWidth: '420px',
        width: 'calc(100% - 48px)',
      }}
    >
      <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>🏷️</div>

      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.875rem', color: '#0f172a' }}>
          ¿Quieres ser distribuidor?
        </p>
        <p style={{ margin: '2px 0 0 0', fontSize: '0.78rem', color: '#64748b' }}>
          Accede a catálogo mayorista y precios preferenciales.
        </p>
      </div>

      <Link
        href="/registro-distribuidor"
        style={{
          background: '#0f172a',
          color: '#ffffff',
          padding: '8px 14px',
          borderRadius: '0.5rem',
          fontSize: '0.8rem',
          fontWeight: 600,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        Registrarme
      </Link>

      <button
        onClick={handleDismiss}
        style={{
          background: 'none',
          border: 'none',
          color: '#94a3b8',
          cursor: 'pointer',
          fontSize: '1rem',
          padding: '2px 4px',
          lineHeight: 1,
        }}
        title="Cerrar notificación"
      >
        ✕
      </button>
    </div>
  );
}