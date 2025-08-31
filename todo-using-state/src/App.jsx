import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, task: "this is 1st todo", isComplete: false },
    { id: 1, task: "this is 2nd todo", isComplete: false },
  ]);

  const handleAddTodo = (taskName) => {
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        task: taskName,
        isComplete: false,
      },
    ]);
  };

  const toggleCompleteTodo = (id) => {
    const todoCopy = [...todos];
    setTodos(
      todoCopy.map((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    const todoCopy = [...todos];
    setTodos(
      todoCopy.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const updateTodo = (id, taskName) => {
    const todoCopy = [...todos];
    setTodos(
      todoCopy.map((todo) => {
        if (todo.id === id) {
          todo.task = taskName;
        }
        return todo;
      })
    );
  };
  return (
    <>
      <AddTodo handleTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        toggleCompleteTodo={toggleCompleteTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default App;
