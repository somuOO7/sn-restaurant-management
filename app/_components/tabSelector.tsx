"use client";

import { useState } from "react";

export default function TabSelector({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [selectedTabId, setSelectedTabId] = useState(items[0].id);

  return (
    <div className="flex bg-gray-200 rounded-xl overflow-hidden">
      {items.map((i) => (
        <button
          className={`flex-1 p-2 text-center text-sm font-medium ${selectedTabId === i.id ? "bg-black text-white" : "bg-transparent text-black"}`}
          key={i.id}
          onClick={() => setSelectedTabId(i.id)}
        >
          {i.label}
        </button>
      ))}
    </div>
  );
}
