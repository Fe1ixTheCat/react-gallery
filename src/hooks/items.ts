import axios from "axios";
import { IItem } from "../models";
import { useEffect, useState } from "react";

export function useItems() {
  const [items, setItems] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchItems() {
    setLoading(true)
    const res = await axios.get<IItem[]>('https://boiling-refuge-66454.herokuapp.com/images');
    setItems(res.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchItems();
  }, [])

  return {
    items, loading
  }
}
