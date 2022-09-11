import { Item } from "./Item";
import { useItems } from "../hooks/items";
import { IItem } from "../models";


export function Main() {
  const {loading, items} = useItems();

  return (
    <main>
      {loading && <span className="loader">Loading...</span>}
      { items.map((item: IItem, index: any) => <Item key={item.id} item={ items[index] } />)}
    </main>
  )
}
