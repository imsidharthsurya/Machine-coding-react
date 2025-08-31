import { useState } from "react";
import { useContext } from "react";
import TodoContext from "./context/TodoContext";

const Todo = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todoTask, setTodoTask] = useState(todo.task);
  const { todos, setTodos } = useContext(TodoContext);

  const toggleCompleteTodo = () => {
    const todoCopy = [...todos];
    setTodos(
      todoCopy.map((todoCurr) => {
        if (todoCurr.id === todo.id) {
          todoCurr.isComplete = !todoCurr.isComplete;
        }
        return todoCurr;
      })
    );
  };

  const deleteTodo = () => {
    const todoCopy = [...todos];
    setTodos(
      todoCopy.filter((todoCurr) => {
        return todoCurr.id !== todo.id;
      })
    );
  };

  const handleEdit = () => {
    if (todoTask === "") return;

    setIsEdit(!isEdit);
    if (isEdit) {
      const todoCopy = [...todos];
      setTodos(
        todoCopy.map((todoCurr) => {
          if (todoCurr.id === todo.id) {
            todoCurr.task = todoTask;
          }
          return todoCurr;
        })
      );
    }
  };
  return (
    <div className="todo-div">
      <input
        type="checkbox"
        checked={todo?.isComplete}
        onChange={toggleCompleteTodo}
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
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default Todo;
