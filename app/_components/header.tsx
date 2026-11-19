import { Sofa } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <p className="font-bold text-2xl">restaurant name</p>

      <div className="flex items-center gap-2 bg-orange-100 text-orange-800 px-2 py-1 rounded-4xl">
        <Sofa className="size-4" />
        <p className="font-semibold text-sm">Table 01</p>
      </div>
    </div>
  );
}
