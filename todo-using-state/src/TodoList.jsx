import Todo from "./Todo";

const TodoList = ({ todos, toggleCompleteTodo, deleteTodo, updateTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo?.id}
            toggleCompleteTodo={toggleCompleteTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
