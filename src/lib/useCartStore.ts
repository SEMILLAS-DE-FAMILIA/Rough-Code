import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '../../app/components/ProductGrid';

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  lastUpdated: number | null;
  addToCart: (product: Product) => void;
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  itemCount: () => number;
}

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      lastUpdated: null,

      addToCart: (product) => {
        set((state) => {
          const existingIndex = state.cart.findIndex((item) => item.id === product.id);
          let newCart: CartItem[];

          if (existingIndex > -1) {
            const current = state.cart[existingIndex];
            
            // Si la cantidad en el carrito ya es igual o mayor al stock disponible, se bloquea la acción
            if (current.quantity >= product.stock) return state;

            newCart = [...state.cart];
            newCart[existingIndex] = {
              ...product, // Actualiza datos por si cambiaron en BD (precio, imagen, stock)
              quantity: current.quantity + 1,
            };
          } else {
            // Si el producto no tiene stock, no se agrega al carrito
            if (product.stock <= 0) return state;

            newCart = [...state.cart, { ...product, quantity: 1 }];
          }

          return { cart: newCart, lastUpdated: Date.now() };
        });
      },

      updateQuantity: (id, delta) => {
        set((state) => ({
          cart: state.cart
            .map((item) => {
              if (item.id === id) {
                const newQty = item.quantity + delta;
                if (newQty <= 0) return null;
                
                // Si intenta incrementar y supera el stock máximo, no hace cambios
                if (delta > 0 && newQty > item.stock) return item;
                
                return { ...item, quantity: newQty };
              }
              return item;
            })
            .filter(Boolean) as CartItem[],
          lastUpdated: Date.now(),
        }));
      },

      removeItem: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
          lastUpdated: Date.now(),
        }));
      },

      clearCart: () => set({ cart: [], lastUpdated: null }),

      itemCount: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state && state.lastUpdated) {
          const now = Date.now();
          if (now - state.lastUpdated > THREE_DAYS_IN_MS) {
            state.clearCart();
          }
        }
      },
    }
  )
);