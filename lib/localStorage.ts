import { CartStorageItem } from "@/types/cartStorageItem";
import { MenuItem } from "@/types/menuItem";

export const handleAddItemToCart = (
  e: React.MouseEvent,
  menuDetail: MenuItem,
  instructions: string,
  setIsAdded?: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  e.stopPropagation();
  if (typeof window === "undefined") return;

  try {
    const existingCart = localStorage.getItem("cart");
    let parsed: unknown = null;
    try {
      parsed = existingCart ? JSON.parse(existingCart) : [];
    } catch {
      parsed = [];
    }
    const cart: CartStorageItem[] = Array.isArray(parsed) ? parsed : [];

    const itemIndex = cart.findIndex((item) => item.id === menuDetail.id);
    if (itemIndex > -1) {
      cart[itemIndex].quantity += 1;
      if (instructions.trim()) {
        cart[itemIndex].instructions = instructions.trim();
      }
    } else {
      cart.push({
        id: menuDetail.id,
        quantity: 1,
        instructions: instructions.trim() || undefined,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    if (setIsAdded) {
      setIsAdded(true);
    }
  } catch (err) {
    console.error("Failed to update cart:", err);
  }
};

export const handleGetItemFromCart = (): CartStorageItem[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const existingCart = localStorage.getItem("cart");
  let parsed: unknown = null;
  try {
    parsed = existingCart ? JSON.parse(existingCart) : [];
  } catch {
    parsed = [];
  }

  return Array.isArray(parsed) ? (parsed as CartStorageItem[]) : [];
};
