const TodoReducer = (state, action) => {
  if (action.type === "add_todo") {
    return [
      ...state,
      {
        id: state.length + 1,
        task: action.payload.taskName,
        isComplete: false,
      },
    ];
  } else if (action.type === "edit_todo") {
    const newState = state.map((todoCurr) => {
      if (todoCurr.id === action.payload.id) {
        todoCurr.task = action.payload.taskName;
      }
      return todoCurr;
    });
    return newState;
  } else if (action.type === "delete_todo") {
    const newState = state.filter((todoCurr) => {
      return todoCurr.id !== action.payload.id;
    });
    return newState;
  } else if (action.type === "complete_todo") {
    const newState = state.map((todoCurr) => {
      if (todoCurr.id === action.payload.id) {
        todoCurr.isComplete = !todoCurr.isComplete;
      }
      return todoCurr;
    });
    return newState;
  }
  // return old value for undefined state
  return state;
};

export default TodoReducer;
