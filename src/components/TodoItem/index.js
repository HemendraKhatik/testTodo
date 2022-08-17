import React, { useState } from "react";

export default function TodoItem({ task, id, deleteTodo, updateTodo }) {
  const [updateTask, setUpdateTask] = useState(task);
  const [readOnly, setReadOnly] = useState(true);

  const edit = () => setReadOnly(false);

  const update = (e) => setUpdateTask(e.target.value);

  const save = () => {
    setReadOnly(true);
    updateTodo(id, updateTask);
  };
  return (
    <div>
      <input
        onChange={update}
        style={styles.input}
        value={updateTask}
        readOnly={readOnly}
      />
      {readOnly ? (
        <>
          <button onClick={() => deleteTodo(id)}>delete</button>
          <button onClick={edit}>Edit</button>
        </>
      ) : (
        <button onClick={save}>Save</button>
      )}
    </div>
  );
}

const styles = {
  input: {
    outline: "none",
    border: "none",
    fontSize: 22,
    display: "block",
    textAlign: "center",
    width: "100%",
    fontWeight: "600",
  },
};
