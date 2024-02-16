import { fetchProductByCategory } from "@/app/actions";
import { FilterSort } from "@/components/FilterSort";
import { PaginationComponent } from "@/components/Pagination";
import { ProductCard } from "@/components/ProductCard";

interface Props {
  params: { category: string };
  searchParams: { sort?: string; page?: string };
}

export default async function Category({ params, searchParams }: Props) {
  const category = params.category;
  const sort = searchParams?.sort || "name_ASC";
  const currentPage = Number(searchParams?.page) || 1;
  const pageSize = 12;

  const { productsConnection } = await fetchProductByCategory(
    currentPage,
    pageSize,
    category,
    sort
  );

  const { edges: products, aggregate, pageInfo } = productsConnection;

  return (
    <>
      <FilterSort length={aggregate.count} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(198px,1fr))] gap-2">
        {products?.map((product) => (
          <ProductCard key={product.cursor} product={product.node} />
        ))}
      </div>
      {pageInfo.hasNextPage && (
        <PaginationComponent
          pageSize={pageSize}
          currentPage={currentPage}
          totalPosts={aggregate.count}
          hasPreviousPage={pageInfo.hasPreviousPage}
          hasNextPage={pageInfo.hasNextPage}
        />
      )}
    </>
  );
}
