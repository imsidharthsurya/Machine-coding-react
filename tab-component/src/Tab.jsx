import { useState } from "react";

const Tab = ({ tabData }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const ActiveTab = tabData[activeTabIndex].component;
  return (
    <>
      <div>
        {tabData.map((tab, index) => {
          return (
            <span
              className={`tab-heading ${
                index === activeTabIndex ? "active" : ""
              }`}
              key={index}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.name}
            </span>
          );
        })}
      </div>
      <div>
        <ActiveTab />
      </div>
    </>
  );
};

export default Tab;
