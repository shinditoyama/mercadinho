"use client";

import { CartItem } from "@/components/CartItem";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/store/cart";

export default function Cart() {
  const { cart } = useCartStore();

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalPriceWithDiscount = cart.reduce((acc, item) => {
    return item.promotion
      ? acc + item.promotion.price * item.quantity
      : acc + item.price * item.quantity;
  }, 0);

  return (
    <section className="container py-8">
      <Card className="shadow p-3 lg:p-6">
        {cart?.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
        {cart.length !== 0 && (
          <div className="flex flex-col items-end gap-3">
            <h6 className="">
              <span>Preço total: </span>
              {formatCurrency(totalPriceWithDiscount)}
            </h6>

            <h6 className="font-bold">
              <span>O quanto você economiza fazendo esta compra: </span>
              {formatCurrency(totalPrice - totalPriceWithDiscount)}
            </h6>
          </div>
        )}
        {cart.length === 0 && (
          <h2 className="text-xl font-bold">Carrinho vazio</h2>
        )}
      </Card>
    </section>
  );
}
