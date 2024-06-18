import "./App.css";
import React, { useState, useEffect } from "react";
import { AppBarItem } from "./components/appbar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const initialData = [];
    setTodos(initialData);
  }, []);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <AppBarItem />
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </header>
    </div>
  );
};

export default App;
