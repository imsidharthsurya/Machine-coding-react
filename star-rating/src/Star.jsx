import React, { useState } from "react";

const Star = ({ length }) => {
  const [ratedStar, setRatedStar] = useState(-1);
  const [hoverStar, setHoverStar] = useState(-1);
  return (
    <div>
      {new Array(length).fill("").map((val, index) => {
        return (
          <span
            key={index}
            className={`star ${
              (hoverStar === -1 && index <= ratedStar) || index <= hoverStar
                ? "rated-star"
                : ""
            }`}
            onClick={() => setRatedStar(index)}
            onMouseEnter={() => setHoverStar(index)}
            onMouseLeave={() => setHoverStar(-1)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Star;
