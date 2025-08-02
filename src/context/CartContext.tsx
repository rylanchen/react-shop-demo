import { createContext, useContext } from "react";
import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

type CartItem = Product & { quantity: number };

type CartState = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.cartItems.find((item) => item.id === product.id);
      if (existing) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cartItems: [] }),
}));

const CartContext = createContext<CartState | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useCartStore();
  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};