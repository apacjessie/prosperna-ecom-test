import { CartProduct } from "@/lib/types";
import { create } from "zustand";

export interface StoreState {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeToCart: (id: string) => void;
  changeProductQuantity: (id: string, quantity: number) => void;
}

const useStore = create<StoreState>((set) => ({
  cart: [],
  addToCart: (product: CartProduct) =>
    set((state) => ({ cart: [product, ...state.cart] })),

  removeToCart: (id: string) =>
    set((state) => ({ cart: state.cart.filter((prod) => prod.id !== id) })),

  changeProductQuantity: (id: string, quantity: number) =>
    set((state) => ({
      cart: state.cart.map((prod) =>
        prod.id === id ? { ...prod, quantity: quantity } : prod
      ),
    })),
}));

export default useStore;
