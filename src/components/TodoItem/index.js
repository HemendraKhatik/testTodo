import React from "react";

export default function TodoItem({ task, id, deleteTodo } ) {
  return (
    <div>
      <h1>{task}</h1>
      <button onClick={() => deleteTodo(id)}>delete</button>
      <button>Edit</button>
    </div>
  );
}
