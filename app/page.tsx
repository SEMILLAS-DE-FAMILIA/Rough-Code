'use client';

import React, { useState } from 'react';
import CarouselHero from './components/Carousel';
import ProductGrid, { Product } from './components/ProductGrid';
import NavigationControls from './components/NavigationControls';
import TrustBanner from './components/TrustBanner';

// Interfaz extendida para el carrito
export interface CartItem extends Product {
  quantity: number;
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  // Agregar al carrito (o incrementar cantidad si ya existe)
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);

      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newCart[existingIndex].quantity + 1,
        };
        return newCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    setLastAdded(product.title);
    setTimeout(() => setLastAdded(null), 3500);
  };

  // Cambiar cantidad (+1 / -1)
  const handleUpdateQuantity = (id: number, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  // Eliminar producto completo del carrito
  const handleRemoveItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <main style={{ backgroundColor: '#fdfcf1', minHeight: '100vh' }}>
      <NavigationControls
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        lastAddedProduct={lastAdded}
      />

      <CarouselHero />
      <ProductGrid onAddToCart={handleAddToCart} />
      <TrustBanner />
    </main>
  );
}