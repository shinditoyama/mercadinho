import { FilterCategory } from "@/components/FilterCategory";
import { ReactNode } from "react";
import { fetchCategory } from "../actions";

export default async function SearchLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { categories } = await fetchCategory();

  return (
    <section className="container py-8">
      <div className="flex flex-col md:flex-row gap-4">
        <aside className="md:w-1/3 lg:w-1/5 space-y-4">
          <FilterCategory categories={categories} />
        </aside>

        <main className="md:w-2/3 lg:w-4/5 space-y-2">{children}</main>
      </div>
    </section>
  );
}
