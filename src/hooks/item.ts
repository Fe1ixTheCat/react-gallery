import axios from "axios";
import { IItem } from "../models";
import { useEffect, useState } from "react";

export function useItem(id: number) {
  const [item, setItem] = useState({id: 0, url: '', comments: [{id: 0, text: 'text', date: 0}]});
  const [loading, setLoading] = useState(true);

  async function fetchItem(id: number) {
    const res = await axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`);
    setItem(res.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchItem(id);
  }, [])

  return {
    item, loading
  }
}
