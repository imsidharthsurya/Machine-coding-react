import { useEffect } from "react";
const useOutsideClick = (modalRef, closeModal) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !modalRef.current?.contains(e.target) &&
        e.target.id !== "toggle-btn"
      ) {
        console.log("outside click");
        closeModal();
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
};

export default useOutsideClick;
