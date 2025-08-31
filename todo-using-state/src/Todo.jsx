import { useState } from "react";

const Todo = ({ todo, toggleCompleteTodo, deleteTodo, updateTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todoTask, setTodoTask] = useState(todo.task);

  const handleEdit = () => {
    if (todoTask === "") return;
    setIsEdit(!isEdit);
    if (isEdit) {
      updateTodo(todo.id, todoTask);
    }
  };
  return (
    <div className="todo-div">
      <input
        type="checkbox"
        checked={todo?.isComplete}
        onChange={() => toggleCompleteTodo(todo.id)}
      />
      {isEdit ? (
        <input
          type="text"
          value={todoTask}
          onChange={(e) => setTodoTask(e.target.value)}
        />
      ) : (
        <span>{todo?.task}</span>
      )}
      <button onClick={handleEdit}>{isEdit ? "Save" : "Edit"}</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
