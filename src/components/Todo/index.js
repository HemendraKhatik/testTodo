import React, { useState } from "react";
import { generateId } from "../../utils/helper";
import TodoItem from "../TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([]); // array of objects

  const taskHandler = (event) => setTodo(event.target.value);

  const addTodo = () => {
    const update = todos;

    const obj = {
      id: generateId(),
      task: todo,
    };
    update.push(obj);
    setTodos(update);
    setTodo("");
  };

  const deleteTodo = (id) => {
    const update = todos.filter((todo) => todo.id !== id);
    setTodos(update);
  };

  return (
    <div>
      <h1>My todo App</h1>

      <input
        value={todo}
        onChange={taskHandler}
        type="text"
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add todo</button>

      <hr />

      {todos.map((todo) => {
        return (
          <React.Fragment key={generateId()}>
            <TodoItem {...todo} deleteTodo={deleteTodo} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
