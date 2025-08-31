import { useState, useContext } from "react";
import TodoContext from "./context/TodoContext";

const AddTodo = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const { _, setTodos } = useContext(TodoContext);

  const addTodo = () => {
    if (currentTodo.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        task: currentTodo,
        isComplete: false,
      },
    ]);
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
