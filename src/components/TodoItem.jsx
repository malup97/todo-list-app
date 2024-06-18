import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        style={{ marginRight: "10px" }}
      />
      <span style={{ marginRight: "10px" }}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
