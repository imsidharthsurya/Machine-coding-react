import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button onClick={() => setShowModal(!showModal)} id="toggle-btn">
        Click Me
      </button>
      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
}

export default App;
