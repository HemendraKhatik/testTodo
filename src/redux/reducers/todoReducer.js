const initialState = []; // can be object or an array accoringly

const todoReducer = (state = initialState, action) => {
  // Deep copy
  const newState = JSON.parse(JSON.stringify(state)); // array of todos

  switch (action.type) {
    case "ADD_TODO":
      newState.push(action.payload);
      return newState;

    case "DELETE_TODO":
      const updateState = newState.filter((todo) => todo.id !== action.payload);
      return updateState;

    case "UPDATE_TODO":
      const updateTodo = newState.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            task: action.payload.task,
          };
        }

        return todo;
      });
      return updateTodo;
    default:
      // Unclear
      // But to understand -> do not use deepcopy for default state
      return state;
  }
};

export { todoReducer };
