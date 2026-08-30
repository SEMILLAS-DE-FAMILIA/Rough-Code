'use client';

import { useCallback, useEffect, useState } from 'react';
import { Product } from '../../app/components/ProductGrid';

export interface CartItem extends Product {
  quantity: number;
}

const CART_STORAGE_KEY = 'semillas_familia_cart_v1';

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Cargar el carrito guardado al montar (solo corre en el navegador)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CART_STORAGE_KEY);
      if (stored) setCart(JSON.parse(stored));
    } catch {
      // Si el dato guardado está corrupto, seguimos con carrito vacío
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Guardar cada vez que el carrito cambia (una vez que ya se cargó el inicial,
  // para no sobrescribir el guardado con un array vacío antes de leerlo)
  useEffect(() => {
    if (!isLoaded) return;
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Si el almacenamiento está lleno o bloqueado, no interrumpimos la compra
    }
  }, [cart, isLoaded]);

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.id === product.id);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return next;
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  }, []);

  const removeItem = useCallback((id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const total = cart.reduce((acc, item) => acc + item.final_price * item.quantity, 0);

  return { cart, isLoaded, addToCart, updateQuantity, removeItem, clearCart, itemCount, total };
}