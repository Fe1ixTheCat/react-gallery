import React, {createContext, useState} from 'react';
import axios from "axios";

interface IModalContext {
  modal: boolean,
  open: (id: number) => void,
  close: () => void
}

export const ModalContext = createContext<IModalContext>({
  modal: false,
  open: (id: number) => {},
  close: () => {}
})

export const ModalState = ({ children }: {children: React.ReactNode}) => {

  const [modal, setModal] = useState(false);
  const open = (id: number) => {
    localStorage.setItem('id', String(id));
    setModal(true);
  };

  const close = () => setModal(false);

  return(
    <ModalContext.Provider value={{ modal, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}
