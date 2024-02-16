"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Card, CardDescription, CardHeader } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface Props {
  length: number;
}

export function FilterSort({ length }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFieldValue = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("sort", term);
    } else {
      params.delete("sort");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardDescription className="flex items-center gap-3 -my-3">
            Sort By:
            <Select
              onValueChange={handleFieldValue}
              defaultValue={searchParams.get("sort")?.toString() || "name_ASC"}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Default Sorting" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="name_ASC">Name: ASC</SelectItem>
                  <SelectItem value="name_DESC">Name: DESC</SelectItem>
                  <SelectItem value="price_ASC">Price: Low to high</SelectItem>
                  <SelectItem value="price_DESC">Price: High to low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardDescription>
          <CardDescription className="flex items-center gap-2">
            {/* Showing 01-09 of 17 Results */}
            {length} Results
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
