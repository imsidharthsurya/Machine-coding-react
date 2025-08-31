import { useState } from "react";
import { useContext } from "react";
import TodoContext from "./context/TodoContext";

const Todo = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todoTask, setTodoTask] = useState(todo.task);
  const { todos, dispatch } = useContext(TodoContext);

  const toggleCompleteTodo = () => {
    dispatch({
      type: "complete_todo",
      payload: {
        id: todo.id,
      },
    });
  };

  const deleteTodo = () => {
    dispatch({
      type: "delete_todo",
      payload: {
        id: todo.id,
      },
    });
  };

  const handleEdit = () => {
    if (todoTask === "") return;
    setIsEdit(!isEdit);
    if (isEdit) {
      dispatch({
        type: "edit_todo",
        payload: {
          id: todo.id,
          taskName: todoTask,
        },
      });
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
