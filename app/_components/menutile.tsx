"use client";

import { amountFormatterWithDecimal } from "@/lib/amountFormatter";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function MenuTile({
  title,
  subtitle,
  category,
  price,
  image = null,
}: {
  title: string;
  subtitle: string;
  category: string;
  price: number;
  image?: string | null;
}) {
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
    <div
      role="button"
      tabIndex={0}
      className="bg-white flex p-2 rounded-xl gap-2 text-left cursor-pointer border-2 border-orange-100"
      onClick={() => console.log("Show details button clicked")}
    >
      <div className="relative size-28 bg-orange-100 text-orange-800 rounded-xl flex flex-col justify-center items-center gap-4 shrink-0 overflow-hidden">
        {!image ? (
          <>
            <ImageIcon />
            <p className="text-xs">PHOTO</p>
          </>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            sizes="112px"
            className="object-cover"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h1 className="font-semibold">{title}</h1>
          <p className="text-xs">{subtitle}</p>
        </div>

        <div
          className={`w-fit px-2 py-1 rounded-4xl ${getCategoryColor(category)} font-semibold text-xs`}
        >
          {getCategoryText(category)}
        </div>

        <div className="flex items-center justify-between">
          <p className="font-semibold">{amountFormatterWithDecimal(price)}</p>
          <button
            className="bg-orange-100 text-orange-800 rounded-xl px-2 py-1 font-semibold text-sm"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Add to cart clicked");
            }}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
