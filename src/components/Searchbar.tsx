"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { Input } from "./ui/input";

export function Searchbar() {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const search = useRef<HTMLInputElement | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search.current?.value) return;

    const params = new URLSearchParams(searchParams);

    if (search.current?.value) {
      params.set("query", search.current.value);
    } else {
      params.delete("query");
    }

    push(`/busca?${params.toString()}`);
    //push(`/product/?${search.current.value.replace(/ /g, "-").toLowerCase()}`);

    search.current.value = "";
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="relative flex items-center">
        <Search className="absolute left-4" />
        <Input
          type="search"
          id="search"
          ref={search}
          placeholder="Buscar..."
          className="pl-14 bg-secondary"
        />
      </div>
    </form>
  );
}
