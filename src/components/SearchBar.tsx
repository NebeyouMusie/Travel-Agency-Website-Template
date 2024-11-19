import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-lg bg-white p-4 shadow-lg">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Input
          type="text"
          placeholder="Where do you want to go?"
          className="flex-grow"
        />
        <Button className="bg-primary hover:bg-primary/90">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;