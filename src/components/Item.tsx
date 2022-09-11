import { IItem } from "../models";
import { ModalContext } from "../context/ModalContext";
import { useContext } from "react";

interface IItemProps {
  item: IItem
}

export function Item({ item,  }: IItemProps) {

  const {open} = useContext(ModalContext);

  return (
    <div className="main-item" onClick={() => {open(item.id)}}>
      <div className="main-item-image" style={{backgroundImage: `url(${item.url})`}}>
      </div>
      <p className="main-text">id:<span>{item.id}</span></p>
    </div>
  )
}
