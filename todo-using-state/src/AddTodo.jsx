import { useState } from "react";

const AddTodo = ({ handleTodo }) => {
  const [currentTodo, setCurrentTodo] = useState("");

  const addTodo = () => {
    if (currentTodo.trim() === "") return;
    handleTodo(currentTodo);
    setCurrentTodo("");
  };
  return (
    <div className="add-todo">
      <input
        type="text"
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
