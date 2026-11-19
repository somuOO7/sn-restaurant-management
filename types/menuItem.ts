export interface MenuItem {
  id: string;
  title: string;
  subtitle: string;
  category: "veg" | "non-veg" | string;
  price: number;
  image?: string;
  details?: {
    ingredients: string[];
    spiceLevel: number;
  };
}
