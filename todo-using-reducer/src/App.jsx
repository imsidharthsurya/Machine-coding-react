import { useReducer } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import TodoContext from "./context/TodoContext";
import TodoReducer from "./reducers/TodoReducer";

function App() {
  // const [todos, setTodos] = useState([
  //   { id: 0, task: "this is 1st todo", isComplete: false },
  //   { id: 1, task: "this is 2nd todo", isComplete: false },
  // ]);

  const [todos, dispatch] = useReducer(TodoReducer, [
    { id: 0, task: "this is 1st todo", isComplete: false },
    { id: 1, task: "this is 2nd todo", isComplete: false },
  ]);
  return (
    <>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
