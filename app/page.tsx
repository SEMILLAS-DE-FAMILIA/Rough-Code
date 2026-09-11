'use client';

import React, { useState } from 'react';
import CarouselHero from './components/Carousel';
import NovedadesCarousel from './components/NovedadesCarousel';
import ProductGrid from './components/ProductGrid';
import HeaderNav from './components/HeaderNav';
import WholesaleAuthModal from './components/WholesaleAuthModal';
import NavigationControls from './components/NavigationControls';
import TrustBanner from './components/TrustBanner';
import AlertBanner from './components/AlertBanner';
import { useCartStore, NewCartItem } from '../src/lib/useCartStore';

export default function Home() {
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeItem);
  
  const [lastAdded, setLastAdded] = useState<string | null>(null);
  const [isDistributorModalOpen, setIsDistributorModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>(''); // <- Estado de búsqueda

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
        onSearch={(query) => setSearchQuery(query)} // <- Captura la búsqueda
      />
      <NavigationControls lastAddedProduct={lastAdded} />
      
      {/* Oculta los carruseles superiores si el usuario está buscando algo */}
      {!searchQuery && (
        <>
          <CarouselHero />
          <NovedadesCarousel onAddToCart={handleAddToCart} />
        </>
      )}
      
      {/* Pasar el texto de búsqueda al catálogo */}
      <ProductGrid 
        searchQuery={searchQuery}
        onAddToCart={handleAddToCart} 
        onOpenDistributorModal={() => setIsDistributorModalOpen(true)}
      />

      {isDistributorModalOpen && <WholesaleAuthModal onClose={() => setIsDistributorModalOpen(false)} />}
    </main>
  );
}