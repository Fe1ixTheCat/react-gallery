import React, { useContext} from 'react';
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { ShowItem } from "./components/ShowItem";
import { ModalContext } from "./context/ModalContext";

function App() {

  const {modal, open, close} = useContext(ModalContext);

  return (
    <div className="App">
      <Header />
      <Main />

      {modal && <Modal onClose={close}>
        <ShowItem onCreate={close} />
      </Modal>}
    </div>
  );
}

export default App;
