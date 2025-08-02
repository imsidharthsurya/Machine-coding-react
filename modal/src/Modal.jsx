import { useRef } from "react";
import useOutsideClick from "./useOutsideClick";

const Modal = ({ closeModal }) => {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, closeModal);
  return (
    <div className="container-modal" ref={modalRef}>
      <p>this is modal content</p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default Modal;
