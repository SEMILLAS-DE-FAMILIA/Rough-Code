import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '../../app/components/ProductGrid';

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  lastUpdated: number | null; // Timestamp en ms
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
            newCart = [...state.cart];
            newCart[existingIndex].quantity += 1;
          } else {
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
                return newQty > 0 ? { ...item, quantity: newQty } : null;
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
      // Se ejecuta apenas Zustand lee los datos de localStorage al cargar la página
      onRehydrateStorage: () => (state) => {
        if (state && state.lastUpdated) {
          const now = Date.now();
          // Si pasaron más de 3 días desde la última modificación, vaciamos el carrito
          if (now - state.lastUpdated > THREE_DAYS_IN_MS) {
            state.clearCart();
          }
        }
      },
    }
  )
);