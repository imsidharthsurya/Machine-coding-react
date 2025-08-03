import { useState } from "react";

const FileManager = ({ data, addNode, removeNode }) => {
  const [showFolder, setShowFolder] = useState({});
  // storing for which id input should be visible
  const [showInput, setShowInput] = useState(null);
  const [nodeName, setNodeName] = useState("");
  // storing whether we're creating file or folder
  const [isFolder, setIsFolder] = useState(null);
  return (
    <div className="file-container">
      {data.map((node) => {
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
                  onClick={() => {
                    setShowInput((prev) => {
                      if (prev === node.id) {
                        return null;
                      }
                      return node.id;
                    });
                    setNodeName("");
                    setIsFolder(false);
                  }}
                >
                  📄
                </span>
                <span
                  className="content-name"
                  onClick={() => {
                    setShowInput((prev) => {
                      if (prev === node.id) {
                        return null;
                      }
                      return node.id;
                    });
                    setNodeName("");
                    setIsFolder(true);
                  }}
                >
                  📁
                </span>
              </>
            )}

            <span className="content-name" onClick={() => removeNode(node.id)}>
              🗑️
            </span>
            {showInput === node.id && (
              <div>
                <input
                  type="text"
                  value={nodeName}
                  onChange={(e) => setNodeName(e.target.value)}
                />
                <span
                  className="content-name"
                  onClick={() => {
                    addNode(node.id, nodeName, isFolder);
                    setShowInput(null);
                    setNodeName("");
                  }}
                >
                  ✅
                </span>
                <span
                  className="content-name"
                  onClick={() => {
                    setShowInput(null);
                    setNodeName("");
                  }}
                >
                  ❌
                </span>
              </div>
            )}
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
