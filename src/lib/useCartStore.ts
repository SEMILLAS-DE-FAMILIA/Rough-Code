import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartItem {
  id: string; // clave compuesta: `${variant_id}-${flavor_id}`
  product_id: number;
  product_title: string;
  variant_id: number;
  flavor_id: number;
  selected_weight: string;
  selected_flavor: string;
  unit_price: number;
  quantity: number;
  img_url: string | null;
  max_stock: number;
}

export type NewCartItem = Omit<CartItem, 'id'>; // incluye quantity: la cantidad que se quiere agregar

interface CartStore {
  cart: CartItem[];
  lastUpdated: number | null;
  addToCart: (item: NewCartItem) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  itemCount: () => number;
}

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      lastUpdated: null,

      addToCart: (item) => {
        set((state) => {
          const compositeId = `${item.variant_id}-${item.flavor_id}`;
          const existingIndex = state.cart.findIndex((c) => c.id === compositeId);
          const incomingQty = Number.isFinite(item.quantity) && item.quantity > 0 ? item.quantity : 1;
          const itemMaxStock = Number.isFinite(item.max_stock) ? item.max_stock : 0;
          let newCart: CartItem[];

          console.log('[addToCart] item recibido:', item);
          console.log('[addToCart] compositeId:', compositeId, 'incomingQty:', incomingQty, 'itemMaxStock:', itemMaxStock);

          if (existingIndex > -1) {
            const current = state.cart[existingIndex];
            const currentQty = Number.isFinite(current.quantity) ? current.quantity : 0;
            const newQty = Math.min(currentQty + incomingQty, itemMaxStock);

            if (newQty <= currentQty) {
              console.warn('[addToCart] BLOQUEADO: ya en el tope de stock', { currentQty, itemMaxStock });
              return state;
            }

            newCart = [...state.cart];
            newCart[existingIndex] = {
              ...current,
              unit_price: item.unit_price,
              max_stock: itemMaxStock,
              quantity: newQty,
            };
          } else {
            if (itemMaxStock <= 0) {
              console.warn('[addToCart] BLOQUEADO: itemMaxStock <= 0', item);
              return state;
            }

            const cappedQty = Math.min(incomingQty, itemMaxStock);
            newCart = [...state.cart, { ...item, id: compositeId, quantity: cappedQty, max_stock: itemMaxStock }];
          }

          console.log('[addToCart] carrito resultante:', newCart);
          return { cart: newCart, lastUpdated: Date.now() };
        });
      },

      updateQuantity: (id, delta) => {
        set((state) => ({
          cart: state.cart
            .map((item) => {
              if (item.id === id) {
                const currentQty = Number.isFinite(item.quantity) ? item.quantity : 0;
                const maxStock = Number.isFinite(item.max_stock) ? item.max_stock : 0;
                const newQty = currentQty + delta;

                if (newQty <= 0) return null;
                if (delta > 0 && newQty > maxStock) return item;

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

      itemCount: () => get().cart.reduce((total, item) => total + (Number.isFinite(item.quantity) ? item.quantity : 0), 0),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (!state) return;

        // Descarta cualquier ítem corrupto o de una versión anterior del carrito
        // (forma vieja, quantity/max_stock inválidos, etc.) antes de que llegue a renderizarse.
        state.cart = (state.cart || []).filter(
          (item) =>
            item &&
            typeof item.id === 'string' &&
            typeof item.variant_id === 'number' &&
            typeof item.flavor_id === 'number' &&
            Number.isFinite(item.quantity) &&
            item.quantity > 0 &&
            Number.isFinite(item.max_stock) &&
            Number.isFinite(item.unit_price)
        );

        if (state.lastUpdated) {
          const now = Date.now();
          if (now - state.lastUpdated > THREE_DAYS_IN_MS) {
            state.clearCart();
          }
        }
      },
    }
  )
);