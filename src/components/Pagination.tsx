"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface Props {
  currentPage: number;
  pageSize: number;
  totalPosts: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export function PaginationComponent({
  pageSize,
  currentPage,
  totalPosts,
  hasPreviousPage,
  hasNextPage,
}: Props) {
  const pathname = usePathname();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious
          href={`${pathname}?page=${currentPage > 1 ? currentPage - 1 : 1}`}
          className={cn(!hasPreviousPage && "pointer-events-none")}
        />

        {pageNumbers.map((p) => (
          <PaginationLink
            key={p}
            href={`${pathname}?page=${p}`}
            isActive={p === currentPage}
          >
            {p}
          </PaginationLink>
        ))}

        <PaginationNext
          href={`${pathname}?page=${currentPage + 1}`}
          className={cn(!hasNextPage && "pointer-events-none")}
        />
      </PaginationContent>
    </Pagination>
  );
}
