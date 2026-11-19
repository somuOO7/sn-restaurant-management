import Filter from "../_components/filter";
import Header from "../_components/header";
import Search from "../_components/search";
import TabSelector from "../_components/tabSelector";
import TitleSection from "../_components/titleSection";

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

  return (
    <div className="p-4 flex flex-col gap-4">
      <Header />

      <TitleSection />

      <Search />

      <TabSelector items={tabItems} />

      <Filter items={filters} />

      <p className="font-semibold text-lg">Start with something good</p>
    </div>
  );
}
