import { useState } from "react";
import { data } from "./data";
function App() {
  const [openItem, setOpenItem] = useState(null); // initially all collapsed
  const handleClick = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  return (
    <>
      {data.map((data, index) => {
        return (
          <div key={index} className="main">
            <div className="header" onClick={() => handleClick(index)}>
              <h3>{data.header}</h3>
              <span>{openItem === index ? "⬆️" : "⬇️"}</span>
            </div>
            {openItem === index && (
              <div className="footer">
                <p>{data.body}</p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default App;
