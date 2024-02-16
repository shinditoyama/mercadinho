import { Search } from "lucide-react";
import { Searchbar } from "./Searchbar";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function MobileSeachbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Search />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Buscar por produtos</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <Searchbar />
        </div>
      </SheetContent>
    </Sheet>
  );
}
