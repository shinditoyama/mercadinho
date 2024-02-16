// import { getCategories } from "@/lib/query/get-categories";
import { AlignJustify, Heart } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { MobileSeachbar } from "./MobileSeachbar";
import { Searchbar } from "./Searchbar";
import { Button, buttonVariants } from "./ui/button";

export function Header() {
  // const { categories } = await getCategories();

  return (
    <header className="sticky top-0 z-50 py-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <AlignJustify />
          </Button>
          <Link href="/" className="">
            <h2 className="text-3xl font-bold font-mono uppercase">Logo</h2>
          </Link>
        </div>

        <div className="hidden lg:flex">
          <Suspense fallback={<div>Loading...</div>}>
            <Searchbar />
          </Suspense>
        </div>

        <div className="space-x-1">
          <MobileSeachbar />
          {/* <Link
            href="/cart"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <ShoppingBag />
          </Link> */}
          <Link
            href="/wishlist"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Heart />
          </Link>
        </div>
      </div>
    </header>
  );
}
