import { useState } from "react";

const FileManager = ({ data }) => {
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
              {node.name}
            </span>
            <span>{node.isFolder && "📄"} </span>
            <span>{node.isFolder && "📁"} </span>

            {showFolder[node.name] && node.children && (
              <FileManager data={node.children} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FileManager;
