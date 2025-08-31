import { useContext } from "react";
import Todo from "./Todo";
import TodoContext from "./context/TodoContext";

const TodoList = () => {
  const { todos, _ } = useContext(TodoContext);
  return (
    <div>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo?.id} />;
      })}
    </div>
  );
};

export default TodoList;
