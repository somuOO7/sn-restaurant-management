"use client";

import { useState } from "react";

export default function Filter({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [selectedFilterId, setSelectedFilterId] = useState(items[0].id);

  return (
    <div className="flex gap-2">
      {items.map((i) => (
        <button
          key={i.id}
          className={`px-2 py-1 rounded-xl text-xs font-semibold ${selectedFilterId === i.id ? "bg-black text-white" : "bg-gray-200 text-black"}`}
          onClick={() => setSelectedFilterId(i.id)}
        >
          {i.label}
        </button>
      ))}
    </div>
  );
}
