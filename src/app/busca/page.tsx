import { FilterSort } from "@/components/FilterSort";
import { PaginationComponent } from "@/components/Pagination";
import { ProductCard } from "@/components/ProductCard";
import { Card, CardHeader } from "@/components/ui/card";
import { fetchProductBySearch } from "../actions";

interface Props {
  searchParams: { query?: string; sort?: string; page?: string };
}

export default async function Busca({ searchParams }: Props) {
  const query = searchParams.query || "";
  const sort = searchParams?.sort || "name_ASC";
  const currentPage = Number(searchParams?.page) || 1;
  const pageSize = 12;

  const { productsConnection } = await fetchProductBySearch(
    currentPage,
    pageSize,
    query,
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
      {!aggregate.count ? (
        <Card>
          <CardHeader>
            <div className="text-lg">
              Não foram encontrados produtos com o nome:{" "}
              <span className="font-bold">{query}</span>
            </div>
          </CardHeader>
        </Card>
      ) : (
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
