import { useState } from "react";

const Virtualization = ({ data, itemHeight, totalHeight }) => {
  const [indices, setIndices] = useState([
    0,
    Math.floor(totalHeight / itemHeight),
  ]);
  const visualData = data.slice(indices[0], indices[1] + 1);
  const handleScroll = (e) => {
    console.log("sid: ", e.target.scrollTop);
    const newStartIndex = Math.floor(e.target.scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(totalHeight / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };
  return (
    <>
      <div
        style={{
          height: totalHeight,
          width: 300,
          border: "1px solid black",
          overflow: "auto",
        }}
        onScroll={handleScroll}
      >
        <div style={{ height: itemHeight * data.length }}>
          <div
            style={{ transform: `translateY(${indices[0] * itemHeight}px)` }}
          >
            {visualData.map((dt) => {
              return (
                <div
                  key={dt}
                  style={{ border: "1px solid red", height: itemHeight }}
                >
                  {dt}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Virtualization;
