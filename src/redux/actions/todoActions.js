const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: data,
  };
};

const deleteTodo = (data) => {
  return {
    type: "DELETE_TODO",
    payload: data,
  };
};

export { addTodo, deleteTodo };
