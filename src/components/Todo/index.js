import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../redux/actions/todoActions";
import { generateId } from "../../utils/helper";
import TodoItem from "../TodoItem";

export default function Todo() {
  // const test = useSelector((state) => {
  //   return state;
  // });

  // TO access the state from store
  const _todos = useSelector((state) => state.todoReducer);
  // console.log("redux is working", _todos);

  // To dispatch (call actions) the actions
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([]); // array of objects

  const taskHandler = (event) => {
    setTodo(event.target.value);
  };

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

  const updateTodo = (id, value) => {
    const update = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          task: value,
        };
      }

      return todo;
    });
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
      <button onClick={_addTodo}>Add todo</button>

      <hr />

      {_todos.map((todo) => {
        return (
          <React.Fragment key={generateId()}>
            <TodoItem
              {...todo}
              deleteTodo={_deleteTodo}
              updateTodo={updateTodo}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}

// `
// C1 -- store
// - c2 -- store
//   - c3 -- store
//    ---...c100 -- store

//   FLUX arch.

//   actions

//   reducers state

//   store - combine all the state
// `
