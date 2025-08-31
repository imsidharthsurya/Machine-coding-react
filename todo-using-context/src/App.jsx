import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import TodoContext from "./context/TodoContext";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, task: "this is 1st todo", isComplete: false },
    { id: 1, task: "this is 2nd todo", isComplete: false },
  ]);

  return (
    <>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
