import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

type CartState = {
  cart: IProductsAttribute[];
  addToCart: (product: IProductsAttribute) => void;
  removeFromCart: (product: IProductsAttribute) => void;
  deleteItem: (product: IProductsAttribute) => void;
};

const myMiddleware = (f: StateCreator<CartState>) =>
  persist(f, { name: "cart-storage" });

export const useCartStore = create<CartState>()(
  myMiddleware((set, get) => ({
    cart: [],
    addToCart: (item) => {
      const { cart } = get();
      const itemIndex = cart.findIndex((p) => p.id === item.id);

      if (itemIndex !== -1) {
        cart[itemIndex].quantity = cart[itemIndex].quantity + 1;
        set((state) => ({ ...state, cart: cart }));
        return;
      }

      let data = {
        ...item,
        quantity: 1,
      };

      set((state) => ({ ...state, cart: [...state.cart, data] }));
    },
    removeFromCart: (item) => {
      const { cart } = get();
      const itemIndex = cart.findIndex((p) => p.id === item.id);

      if (cart[itemIndex]?.quantity > 1) {
        cart[itemIndex].quantity = cart[itemIndex].quantity - 1;
        set((state) => ({ ...state, cart: cart }));
        return;
      }

      const removeItem = cart.filter((p) => p.id !== item.id);
      set((state) => ({ ...state, cart: removeItem }));
    },
    deleteItem: (item) => {
      const { cart } = get();
      const itemIndex = cart.filter((p) => p.id !== item.id);

      set((state) => ({ ...state, cart: itemIndex }));
    },
  }))
);
