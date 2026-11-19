"use client";

import { useEffect, useState } from "react";
import { handleGetItemFromCart } from "@/lib/localStorage";
import { CartStorageItem } from "@/types/cartStorageItem";

export default function Cart() {
  const [data, setData] = useState<CartStorageItem[]>([]);

  useEffect(() => {
    setData(handleGetItemFromCart());
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}
