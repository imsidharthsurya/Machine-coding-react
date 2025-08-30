import React, { useState } from "react";

const VirtualizedList = ({ data, itemHeight, totalHeight }) => {
  const [indices, setIndices] = useState([
    0,
    Math.floor(totalHeight / itemHeight),
  ]);
  const visibleList = data.slice(indices[0], indices[1] + 1); // +1 since last index not included in slice
  const handleScroll = (e) => {
    console.log(e.target.scrollTop);
    // with how much pixel we scrolled a/c to that find new indices
    let newStartIndex = Math.floor(e.target.scrollTop / itemHeight);
    let newEndIndex = newStartIndex + Math.floor(totalHeight / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };
  return (
    <div
      className="container"
      style={{ height: totalHeight }}
      onScroll={handleScroll}
    >
      <div
        style={{
          height: itemHeight * data.length,
          transform: `translateY(${indices[0] * itemHeight}px)`,
        }}
      >
        {visibleList.map((val, index) => {
          return (
            <div className="li" style={{ height: itemHeight }}>
              <p>{val}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualizedList;
