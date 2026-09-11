'use client';

import React, { useState, useEffect } from 'react';
import CarouselHero from './components/Carousel';
import NovedadesCarousel from './components/NovedadesCarousel';
import ProductGrid from './components/ProductGrid';
import HeaderNav from './components/HeaderNav';
import WholesaleAuthModal from './components/WholesaleAuthModal';
import NavigationControls from './components/NavigationControls';
import TrustBanner from './components/TrustBanner';
import AlertBanner from './components/AlertBanner';
import { useCartStore, NewCartItem } from '../src/lib/useCartStore';

// Componente Toast Flotante Ubicado Arriba del Carrito
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
        bottom: '95px', // Elevado para no tapar el carrito flotante
        right: '24px',
        zIndex: 99,
        background: '#ffffff',
        border: '1px solid rgba(15, 23, 42, 0.1)',
        borderRadius: '1rem',
        padding: '1rem 1.25rem',
        boxShadow: '0 12px 28px -4px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        maxWidth: '400px',
        width: 'calc(100% - 48px)',
      }}
    >
      <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>🏷️</div>

      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.875rem', color: '#0f172a' }}>
          ¿Quieres ser distribuidor?
        </p>
        <p style={{ margin: '2px 0 0 0', fontSize: '0.78rem', color: '#64748b' }}>
          Accede a precios mayoristas y compras por volumen.
        </p>
      </div>

      <button
        onClick={() => {
          handleDismiss();
          onOpenModal();
        }}
        style={{
          background: '#0f172a',
          color: '#ffffff',
          border: 'none',
          padding: '8px 14px',
          borderRadius: '0.5rem',
          fontSize: '0.8rem',
          fontWeight: 600,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        Registrarme
      </button>

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

export default function Home() {
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeItem);
  
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
        cartItems={cartItems.map(i => ({ id: i.product_id, title: i.product_title, price: String(i.unit_price), img: i.img_url || '' }))}
        onRemoveFromCart={(index) => {
          const itemToRemove = cartItems[index];
          if (itemToRemove) {
            removeFromCart(itemToRemove.product_id as any);
          }
        }}
        onOpenDistributorModal={() => setIsDistributorModalOpen(true)}
        onSearch={(query) => setSearchQuery(query)}
      />
      <NavigationControls lastAddedProduct={lastAdded} />
      
      {!searchQuery && (
        <>
          <CarouselHero />
          <NovedadesCarousel onAddToCart={handleAddToCart} />
        </>
      )}
      
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