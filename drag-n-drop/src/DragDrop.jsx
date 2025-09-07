import { useRef, useState } from "react";

const DragDrop = ({ listData }) => {
  const [data, setData] = useState(listData);
  const dragItem = useRef(null);
  const dragContainer = useRef(null);
  const handleDragStart = (e, item, container) => {
    // once start dragging need to reduce the opacity of original item
    e.target.style.opacity = 0.5;
    dragItem.current = item;
    dragContainer.current = container;
  };
  const handleDragEnd = (e) => {
    // once stopped draggin need to restore opacity to 1
    e.target.style.opacity = 1;
  };

  const handleDrop = (e, container) => {
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
    const targetContainer = container;
    // incase we're dropping in same container then no need to change the order of data
    // by doing deletion & then insertion
    if (sourceContainer === targetContainer) return;
    // now in whatever container we're dropping so add item in that container list
    // and remove from previous list ie. source container
    setData((prev) => {
      const newData = { ...prev };
      // removing from source
      newData[sourceContainer] = newData[sourceContainer].filter(
        (text) => text !== item
      );
      //adding into target
      newData[targetContainer] = [...newData[targetContainer], item];
      return newData;
    });
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div className="main-cont">
      {Object.keys(data).map((container) => {
        return (
          <div
            key={container}
            className="tile"
            onDrop={(e) => handleDrop(e, container)}
            onDragOver={handleDragOver}
          >
            <h3>{container}</h3>
            {data[container].map((item, index) => {
              return (
                <div
                  key={index}
                  className="task-cont"
                  draggable
                  onDragStart={(e) => handleDragStart(e, item, container)}
                  onDragEnd={handleDragEnd}
                >
                  {item}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DragDrop;
