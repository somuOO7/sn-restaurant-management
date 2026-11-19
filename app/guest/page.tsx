import { MenuItem } from "@/types/menuItem";
import {
  Filter,
  Header,
  MenuTile,
  Search,
  TabSelector,
  TitleSection,
} from "@/app/_components";

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
      id: "1",
      title: "Tandoori paneer",
      subtitle: "Smoky, charred & tender",
      category: "veg",
      price: 16,
    },
    {
      id: "2",
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
          title={item.title}
          subtitle={item.subtitle}
          category={item.category}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}
