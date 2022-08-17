const initialState = []; // can be object or an array accoringly 

const todoReducer = (state = initialState, action) => {
  // Deep copy
  const newState = JSON.parse(JSON.stringify(state)); // array of todos

  switch (action.type) {
    case "ADD_TODO":
      //  action.payload;

      newState.push(action.payload);
      
      console.log("reducer ---->", newState);
      return newState;

    case "DELETE_TODO":
      const updateState = newState.filter((todo) => todo.id !== action.payload);
      return updateState;

    case "UPDATE_TODO":
      //
      return newState;
    default:
      return newState;
  }
};

export { todoReducer };
