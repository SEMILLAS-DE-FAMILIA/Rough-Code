'use client';

import React, { useState } from 'react';
import CarouselHero from './components/Carousel';
import NovedadesCarousel from './components/NovedadesCarousel';
import ProductGrid, { Product } from './components/ProductGrid';
import NavigationControls from './components/NavigationControls';
import TrustBanner from './components/TrustBanner';
import AlertBanner from './components/AlertBanner';
import { useCartStore } from '../src/lib/useCartStore';

export default function Home() {
  const addToCart = useCartStore((state) => state.addToCart);
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setLastAdded(product.title);
    setTimeout(() => setLastAdded(null), 3500);
  };

  return (
    <main style={{ backgroundColor: '#fdfcf1', minHeight: '100vh' }}>
      <AlertBanner />
      <NavigationControls lastAddedProduct={lastAdded} />
      <CarouselHero />
      <NovedadesCarousel onAddToCart={handleAddToCart} />
      <ProductGrid onAddToCart={handleAddToCart} />
      <TrustBanner />
    </main>
  );
}