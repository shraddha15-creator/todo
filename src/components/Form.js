import React, { useState } from "react";

const Form = ({ addTodo }) => {

  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    addTodo(inputText)
    setInputText("")
  }

  

  return (
    <form>
      <input
        value={inputText}
        onChange={(e) => {setInputText(e.target.value)}}
        type="text"
        className="todo-input" />
      <button onClick={handleAdd} className="todo-button" type="button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;