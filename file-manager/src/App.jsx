import { useState } from "react";
import data from "./data.json";
import FileManager from "./FileManager";
function App() {
  const [allData, setAllData] = useState(data);
  const addNode = (parentId, nodeName, isFolder) => {
    const addChild = (data) => {
      return data.map((node, index) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: new Date().getTime(),
                name: nodeName,
                isFolder: isFolder,
                children: isFolder ? [] : undefined,
              },
            ],
          };
        }
        if (node.children) {
          return {
            ...node,
            children: addChild(node.children),
          };
        }
        return node;
      });
    };
    setAllData((prev) => addChild(prev));
  };

  const removeNode = (nodeId) => {
    const deleteNode = (list) => {
      return list
        .filter((node) => {
          return node.id !== nodeId;
        })
        .map((node) => {
          if (node.children) {
            return {
              ...node,
              children: deleteNode(node.children),
            };
          }
          return node;
        });
    };
    setAllData((prev) => deleteNode(prev));
  };
  return (
    <>
      <FileManager data={allData} addNode={addNode} removeNode={removeNode} />
    </>
  );
}

export default App;
