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

const updateTodo = (data) => {
  return {
    type: "UPDATE_TODO",
    payload: data, // {id:id,task:task}
  };
};

export { addTodo, deleteTodo, updateTodo };
