import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="flex items-center p-2 gap-4 rounded-xl bg-gray-200 text-gray-500">
      <SearchIcon />
      <input
        placeholder="Search dishes, ingredients…"
        className="w-full placeholder:text-gray-500"
      />
    </div>
  );
}
