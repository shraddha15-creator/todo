import React, { useState } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (inputText) => {
    setTodos([
      ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
    ])
  };
  // ***********************complete todo**************************
  const completeTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed }
      }
      return todo
    })

    setTodos(newTodos)
  }


  // *******************delete todo***************************
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => {
      if (todo.id === id) {
        return false
      }
      return true
    })

    setTodos(newTodos)
  }


  return (
    <div className="App">
      <header>
        <h1>TODO List</h1>
      </header>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
      {/* <TodoList todos={todos} completeTodo={completeTodo} /> */}
    </div>
  );
}

export default App;
