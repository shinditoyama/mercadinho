"use client";

import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import { useFavoriteStore } from "@/store/wishlist";
import { Heart } from "lucide-react";
import Image from "next/image";
import { Card } from "./ui/card";

interface Props {
  product: IProductsAttribute;
}

export function ProductCard({ product }: Props) {
  const { addToCart } = useCartStore();
  const { productsIDS, addToWishlist } = useFavoriteStore();

  return (
    <Card className="group">
      <div className="relative overflow-hidden">
        <Image
          alt={product.name}
          src={product.image.url}
          width={256}
          height={256}
          priority
          className="mx-auto w-auto h-40 lg:h-60 scale-90 group-hover:scale-95 transition-all object-contain"
        />
        {/*<div className="rounded-t-md absolute w-full h-full bottom-0 flex items-center justify-center gap-x-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            variant="secondary"
            size="icon"
            className="w-12 h-12 rounded-full"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="w-12 h-12 rounded-full"
          >
            <Heart />
          </Button>
        </div>*/}
        {product.promotion && product.promotion.isActive && (
          <span className="inline-block px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full absolute left-3 top-3">
            Oferta
          </span>
        )}
        <button
          onClick={() => addToWishlist(product)}
          className="inline-block text-sm text-red-500 rounded-full absolute right-3 top-3"
        >
          {productsIDS.includes(product.id) ? (
            <Heart fill="red" strokeWidth={0} />
          ) : (
            <Heart />
          )}
        </button>
        {/* <button
          onClick={() => addToCart(product)}
          className="inline-block text-sm text-red-500 rounded-full absolute right-3 top-12"
        >
          <ShoppingCart />
        </button> */}
      </div>
      <div className="p-3 border-t bg-red-">
        <div className="flex flex-col justify-between h-24">
          <h2 className="text-md font-medium line-clamp-2">{product.name}</h2>
          <div className="flex items-center gap-2">
            {product.promotion && product.promotion.isActive ? (
              <>
                <p className="text-lg font-semibold">
                  {formatCurrency(product.promotion.price)}
                </p>
                <p className="text-sm font-medium text-muted-foreground line-through">
                  {formatCurrency(product.price)}
                </p>
              </>
            ) : (
              <p className="text-lg font-semibold">
                {formatCurrency(product.price)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
