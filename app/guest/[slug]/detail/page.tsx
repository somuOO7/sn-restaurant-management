"use client";

import { useEffect, useState } from "react";
import { amountFormatterWithDecimal } from "@/lib/amountFormatter";
import { MenuItem } from "@/types/menuItem";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { handleAddItemToCart } from "@/lib/localStorage";

export default function MenuDetailPage() {
  const [isAdded, setIsAdded] = useState(false);
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    setIsAdded(false);
  }, []);

  const menuDetail: MenuItem = {
    id: "prod-001",
    title: "Tandoori Chicken",
    subtitle: "Spicy marinated chicken grilled in a tandoor",
    price: 10,
    image: "https://i.ibb.co/PscG8BZf/tandoori-chicken-3.webp",
    category: "non-veg",
    details: {
      ingredients: [
        "Chicken",
        "Yogurt",
        "Spices",
        "Yogurt",
        "Spices",
        "Yogurt",
        "Spices",
        "Yogurt",
        "Spices",
        "Yogurt",
        "Spices",
        "Yogurt",
        "Spices",
      ],
      spiceLevel: 3,
    },
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "veg":
        return "bg-green-200 text-green-800";
      case "non-veg":
        return "bg-red-200 text-red-800";
      default:
        return "bg-green-200 text-green-800";
    }
  };

  const getCategoryText = (category: string) => {
    switch (category) {
      case "veg":
        return "VEG";
      case "non-veg":
        return "NON VEG";
      default:
        return "VEG";
    }
  };

  return (
    <div className="p-4 flex-1 flex flex-col gap-4 pb-28">
      <div className="flex items-start gap-4">
        <div className="relative size-20 bg-orange-100 text-orange-800 rounded-xl flex flex-col justify-center items-center gap-2 shrink-0 overflow-hidden">
          {!menuDetail.image ? (
            <>
              <ImageIcon />
              <p className="text-xs">PHOTO</p>
            </>
          ) : (
            <Image
              src={menuDetail.image}
              alt={menuDetail.title}
              fill
              sizes="80px"
              className="object-cover"
            />
          )}
        </div>

        <div>
          <div
            className={`w-fit px-2 rounded-xl font-semibold text-xs ${getCategoryColor(menuDetail.category)} mb-3`}
          >
            {getCategoryText(menuDetail.category)}
          </div>

          <h1 className="text-xl font-bold">{menuDetail.title}</h1>
        </div>
      </div>

      <p className="text-gray-500 text-sm">{menuDetail.subtitle}</p>

      {/* Separator */}
      <div className="h-0.5 w-full bg-gray-200" />

      {/* Spice level */}
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">Spice level</h1>

        <div className="flex">
          {[...Array(menuDetail?.details?.spiceLevel)].map((_, index) => (
            <span key={index}>🌶️</span>
          ))}
        </div>
      </div>

      {/* Ingredients */}
      <div className="flex justify-between gap-4">
        <h1 className="font-semibold">Ingredients</h1>

        <p className="text-gray-500 text-sm text-end">
          {menuDetail.details?.ingredients?.join(", ")}
        </p>
      </div>

      {/* Cooking instruction */}
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold">Cooking instructions</h1>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full h-20 resize-none bg-white"
          placeholder="Anything we should know? e.g. no onions..."
        />
      </div>

      <p className="text-xs">Please tell your waiter about any allergies.</p>

      {/* Bottom Part */}
      <div className="fixed bottom-4 left-4 right-4 z-20">
        <div className="h-0.5 w-full bg-gray-200 mb-4" />
        <button
          className={`w-full rounded-xl font-semibold p-3 text-white transition-all cursor-pointer ${
            isAdded ? "bg-green-600" : "bg-orange-500 active:scale-[0.98]"
          }`}
          onClick={(e) =>
            handleAddItemToCart(e, menuDetail, instructions, setIsAdded)
          }
        >
          {isAdded
            ? "Added to Cart ✓"
            : `Add to Cart • ${amountFormatterWithDecimal(menuDetail.price)}`}
        </button>
      </div>
    </div>
  );
}
