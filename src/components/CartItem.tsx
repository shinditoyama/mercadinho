"use client";

import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import { useFavoriteStore } from "@/store/wishlist";
import { Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export function CartItem({ data }: { data: IProductsAttribute }) {
  const { addToCart, removeFromCart, deleteItem } = useCartStore();
  const { productsIDS, addToWishlist } = useFavoriteStore();

  return (
    <>
      <div key={data.id} className="flex flex-wrap lg:flex-row gap-5 mb-4">
        <div className="w-full lg:w-2/5 xl:w-2/4">
          <figure className="flex leading-5">
            <div className="block w-20 h-20 rounded border border-gray-200 overflow-hidden">
              <Image
                alt={data.name}
                src={data.image.url}
                width={80}
                height={80}
              />
            </div>
            <figcaption className="ml-3">
              <p>{data.name}</p>
              <p className="mt-1 text-gray-400">{data.category?.name}</p>
            </figcaption>
          </figure>
        </div>

        <div>
          <div className="mx-auto flex h-8 items-stretch text-gray-600">
            <button
              onClick={() => removeFromCart(data)}
              className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
            >
              -
            </button>
            <div className="flex w-full items-center justify-center bg-gray-200 px-4 text-xs uppercase transition">
              {data.quantity}
            </div>
            <button
              onClick={() => addToCart(data)}
              className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <div className="leading-5">
            {data.promotion && data.promotion.isActive ? (
              <>
                <p className="font-semibold not-italic">
                  {formatCurrency(data.promotion.price * data.quantity)}
                </p>
                <small className="text-gray-400">
                  {formatCurrency(data.promotion.price)} / por item
                </small>
              </>
            ) : (
              <>
                <p className="font-semibold not-italic">
                  {formatCurrency(data.price * data.quantity)}
                </p>
                <small className="text-gray-400">
                  {formatCurrency(data.price)} / por item
                </small>
              </>
            )}

            {/*<p className="font-semibold not-italic">
              {formatCurrency(data.price * data.quantity)}
            </p>
            <small className="text-gray-400">
              {formatCurrency(data.price)} / por item
          </small>*/}
          </div>
        </div>

        <div className="flex-auto">
          <div className="flex float-right gap-2">
            <Button
              variant="outline"
              onClick={() => addToWishlist(data)}
              className="bg-blue-100 text-blue-600 border-transparent hover:bg-blue-200"
            >
              {productsIDS.includes(data.id) ? (
                <Heart fill="blue" strokeWidth={0} />
              ) : (
                <Heart />
              )}
            </Button>
            <Button
              variant="outline"
              onClick={() => deleteItem(data)}
              className="bg-white text-red-600 shadow hover:bg-gray-100"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>

      <hr className="my-4" />
    </>
  );
}
