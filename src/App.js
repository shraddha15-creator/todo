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

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => {
      if(todo.id === id) {
        return false
      }
      return true
    })

    setTodos(newTodos)
  }


  return (
    <div className="App">
      <header>
        <h1>Shraddha's TODO List</h1>
      </header>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
