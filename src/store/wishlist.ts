import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

type WishlistState = {
  productsIDS: string[];
  wishlistProducts: IProductsAttribute[];
  addToWishlist: (products: IProductsAttribute) => void;
  clearWishlist: () => void;
};

const myMiddleware = (f: StateCreator<WishlistState>) =>
  persist(f, { name: "wishlist-storage" });

export const useFavoriteStore = create<WishlistState>()(
  myMiddleware((set, get) => ({
    productsIDS: [],
    wishlistProducts: [],
    addToWishlist: (product) => {
      set((state) => {
        const index = state.productsIDS.findIndex((id) => id === product.id);

        if (!state.productsIDS.includes(product.id)) {
          return {
            ...state,
            productsIDS: [...state.productsIDS, product.id],
            wishlistProducts: [...state.wishlistProducts, product],
          };
        }

        if (index !== -1) {
          const updatedWishlistProducts = [...state.wishlistProducts];
          updatedWishlistProducts.splice(index, 1);
          const updatedProductsIDS = state.productsIDS.filter(
            (id) => id !== product.id
          );

          return {
            ...state,
            productsIDS: updatedProductsIDS,
            wishlistProducts: updatedWishlistProducts,
          };
        }

        return state;
      });
    },
    clearWishlist: () => set({ productsIDS: [], wishlistProducts: [] }),
  }))
);
