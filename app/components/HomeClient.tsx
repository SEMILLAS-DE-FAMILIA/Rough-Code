'use client';

import React, { useState, useEffect } from 'react';
import NovedadesCarousel from './products/NovedadesCarousel';
import ProductGrid from './ProductGrid';
import HeaderNav from './HeaderNav';
import WholesaleAuthModal from './WholesaleAuthModal';
import NavigationControls from './NavigationControls';
import TrustBanner from './TrustBanner';
import AlertBanner from './AlertBanner';
import { useCartStore, NewCartItem } from '../../src/lib/useCartStore';

function DistributorToast({ onOpenModal }: { onOpenModal: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem('distributor_toast_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
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
      style={{
        position: 'fixed',
        bottom: '85px',
        left: '16px',
        right: '16px',
        margin: '0 auto',
        zIndex: 99,
        background: '#ffffff',
        border: '1px solid rgba(15, 23, 42, 0.1)',
        borderRadius: '0.75rem',
        padding: '0.75rem 0.8rem',
        boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.12)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        maxWidth: '380px',
        width: 'auto',
      }}
    >
      <div style={{ fontSize: '1.25rem', flexShrink: 0 }}>🏷️</div>
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.8rem', color: '#0f172a' }}>
          ¿Quieres ser distribuidor?
        </p>
        <p style={{ margin: '2px 0 0 0', fontSize: '0.7rem', color: '#64748b', lineHeight: 1.2 }}>
          Accede a precios por volumen.
        </p>
      </div>
      <button
        onClick={() => { handleDismiss(); onOpenModal(); }}
        style={{
          background: '#0f172a', color: '#ffffff', border: 'none', 
          padding: '6px 10px',
          borderRadius: '0.4rem', fontSize: '0.75rem', fontWeight: 600, 
          cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
        }}
      >
        Registrarme
      </button>
      <button
        onClick={handleDismiss}
        style={{
          background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer',
          fontSize: '1.1rem', padding: '0 4px', lineHeight: 1,
        }}
        title="Cerrar notificación"
      >
        ✕
      </button>
    </div>
  );
}

export default function HomeClient({ carouselSlot }: { carouselSlot: React.ReactNode }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const [lastAdded, setLastAdded] = useState<string | null>(null);
  const [isDistributorModalOpen, setIsDistributorModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleAddToCart = (item: NewCartItem) => {
    const result = addToCart(item);

    if (result.added <= 0) {
      setLastAdded(`⚠️ ${item.product_title}: ya tienes el máximo disponible en tu carrito`);
    } else if (result.added < result.requested) {
      setLastAdded(`${item.product_title}: se agregaron ${result.added} de ${result.requested} (stock limitado)`);
    } else {
      setLastAdded(item.product_title);
    }
    setTimeout(() => setLastAdded(null), 3500);
  };

  return (
    <main style={{ backgroundColor: '#fdfcf1', minHeight: '100vh' }}>
      <AlertBanner />
      <HeaderNav
        onOpenDistributorModal={() => setIsDistributorModalOpen(true)}
        onSearch={(query) => setSearchQuery(query)}
      />
      <NavigationControls lastAddedProduct={lastAdded} />

      <div
        style={{
          maxHeight: searchQuery ? '0px' : '2400px',
          opacity: searchQuery ? 0 : 1,
          overflow: 'hidden',
          transition: 'max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease',
        }}
      >
        {carouselSlot}
        <NovedadesCarousel
          onAddToCart={handleAddToCart}
          onOpenDistributorModal={() => setIsDistributorModalOpen(true)}
        />
      </div>

      <ProductGrid
        searchQuery={searchQuery}
        onAddToCart={handleAddToCart}
        onOpenDistributorModal={() => setIsDistributorModalOpen(true)}
      />

      <DistributorToast onOpenModal={() => setIsDistributorModalOpen(true)} />

      {isDistributorModalOpen && <WholesaleAuthModal onClose={() => setIsDistributorModalOpen(false)} />}
    </main>
  );
}