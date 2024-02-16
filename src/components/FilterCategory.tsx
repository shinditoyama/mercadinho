"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

interface Props {
  categories: [ICategoryAttribute];
}

export function FilterCategory({ categories }: Props) {
  const pathname = usePathname();

  return (
    <Card className="bg-secondary">
      <CardHeader>
        <CardDescription className="font-bold">Categoria</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-start">
          {categories?.map((cat) => (
            <Link
              key={cat.id}
              href={`/busca/${cat.slug}`}
              className={`-ml-4 ${cn(
                buttonVariants({ variant: "link" }),
                pathname === `/busca/${cat.slug}` && "font-bold"
              )}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
