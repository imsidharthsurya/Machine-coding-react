import { useEffect, useState, useRef } from "react";

const Carousel = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef(null);
  const handleLeftClick = () => {
    if (currentImage === 0) {
      setCurrentImage(data.length - 1);
    } else {
      setCurrentImage((prev) => prev - 1);
    }
  };
  const handleRightClick = () => {
    setCurrentImage((prev) => {
      return (prev + 1) % data.length;
    });
  };
  useEffect(() => {
    ref.current = setInterval(handleRightClick, 1000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);
  return (
    <div
      className="container"
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => (ref.current = setInterval(handleRightClick, 1000))}
    >
      <span className="btn left" onClick={handleLeftClick}>
        {"<"}
      </span>
      <img src={data[currentImage]} className="img" />
      <span className="btn right" onClick={handleRightClick}>
        {">"}
      </span>
    </div>
  );
};

export default Carousel;
