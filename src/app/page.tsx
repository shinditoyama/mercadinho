import { ProductCard } from "@/components/ProductCard";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { fetchProductOnSale } from "./actions";

export default async function Home() {
  const { products } = await fetchProductOnSale();

  return (
    <section className="container py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold uppercase tracking-wide">
          Em Oferta
        </h2>
        <Link
          href="/busca"
          className={`${buttonVariants({
            variant: "secondary",
          })} hover:text-blue-500`}
        >
          Saiba mais
        </Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(198px,1fr))] gap-2">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
