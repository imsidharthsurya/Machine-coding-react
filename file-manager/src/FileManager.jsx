import { useState } from "react";

const FileManager = ({ data, addNode, removeNode }) => {
  const [showFolder, setShowFolder] = useState({});
  return (
    <div className="file-container">
      {data.map((node, index) => {
        return (
          <div key={node.id}>
            <span
              className="content-name"
              onClick={() =>
                setShowFolder((prev) => ({
                  ...prev,
                  [node.name]: !prev[node.name],
                }))
              }
            >
              {node.isFolder ? (showFolder[node.name] ? "📂" : "📁") : ""}
              {node.name}
            </span>
            {node.isFolder && (
              <>
                <span
                  className="content-name"
                  onClick={() => addNode(node.id, "my file.js", false)}
                >
                  📄
                </span>
                <span
                  className="content-name"
                  onClick={() => addNode(node.id, "my folder", true)}
                >
                  📁
                </span>
              </>
            )}

            <span className="content-name" onClick={() => removeNode(node.id)}>
              🗑️
            </span>
            {showFolder[node.name] && node.children && (
              <FileManager
                data={node.children}
                addNode={addNode}
                removeNode={removeNode}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FileManager;
