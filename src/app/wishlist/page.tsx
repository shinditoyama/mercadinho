"use client";

import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useFavoriteStore } from "@/store/wishlist";
import { Trash } from "lucide-react";

export default function Wishlist() {
  const { wishlistProducts, clearWishlist } = useFavoriteStore();

  return (
    <section className="container py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold uppercase tracking-wider">
          Favoritos
        </h2>
        {wishlistProducts?.length !== 0 && (
          <Button
            variant="destructive"
            disabled={wishlistProducts.length === 0}
            onClick={() => clearWishlist()}
          >
            <Trash />
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {wishlistProducts?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
