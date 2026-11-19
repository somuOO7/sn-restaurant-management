import { MenuItem } from "@/types/menuItem";
import {
  Filter,
  Header,
  MenuTile,
  Search,
  TabSelector,
  TitleSection,
} from "@/app/_components";
import { ShoppingCart } from "lucide-react";
import { amountFormatterWithDecimal } from "@/lib/amountFormatter";
import Link from "next/link";

export default function Page() {
  const tabItems = [
    { id: "all", label: "All" },
    { id: "veg", label: "Veg" },
    { id: "non-veg", label: "Non veg" },
  ];

  const filters = [
    { id: "0", label: "All" },
    { id: "1", label: "Starters" },
    { id: "2", label: "Mains" },
    { id: "3", label: "Desserts" },
  ];

  const menuItems: MenuItem[] = [
    {
      id: "prod-001",
      title: "Tandoori paneer",
      subtitle: "Smoky, charred & tender",
      category: "veg",
      price: 16,
    },
    {
      id: "prod-002",
      title: "Tandoori chicken",
      subtitle: "Smoky, charred & tender",
      category: "non-veg",
      price: 250000,
      image: "https://i.ibb.co/PscG8BZf/tandoori-chicken-3.webp",
    },
  ];

  return (
    <div className="p-4 flex flex-col gap-4">
      <Header />

      <TitleSection />

      <Search />

      <TabSelector items={tabItems} />

      <Filter items={filters} />

      <p className="font-semibold text-lg">Start with something good</p>

      {menuItems.map((item) => (
        <MenuTile
          key={item.id}
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          category={item.category}
          price={item.price}
          image={item.image}
        />
      ))}

      <Link
        href="/guest/cart"
        className="fixed bottom-4 left-4 right-4 flex bg-black text-white rounded-xl h-14 items-center justify-between p-4 cursor-pointer"
      >
        <div className="flex items-center gap-2 bg-gray-600 rounded-full px-4 py-1">
          <ShoppingCart />
          <p>3</p>
        </div>
        <h1 className="font-semibold">View cart</h1>
        <p className="font-semibold">{amountFormatterWithDecimal(20)}</p>
      </Link>
    </div>
  );
}
