import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  updateTodo,
} from "../../redux/actions/todoActions";
import { generateId } from "../../utils/helper";
import TodoItem from "../TodoItem";

export default function Todo() {

  const [todo, setTodo] = useState("");

  const taskHandler = (event) => {
    setTodo(event.target.value);
  };

  // TO access the state from store
  const _todos = useSelector((state) => state.todoReducer);
  // console.log("redux is working", _todos);

  // To dispatch (call actions) the actions
  const dispatch = useDispatch();

  const _addTodo = () => {
    const obj = {
      id: generateId(),
      task: todo,
    };

    dispatch(addTodo(obj));

    setTodo("");
  };

  const _deleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const _updateTodo = (id, value) => {
    const data = {
      id,
      task: value,
    };
    dispatch(updateTodo(data));
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
      <button onClick={_addTodo}>Add todo</button>

      <hr />

      {_todos.map((todo) => {
        return (
          <React.Fragment key={generateId()}>
            <TodoItem
              {...todo}
              deleteTodo={_deleteTodo}
              updateTodo={_updateTodo}
            />
          </React.Fragment>
        );
      })}

    </div>
  );
}
