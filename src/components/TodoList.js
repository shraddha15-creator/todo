import React from "react";
import Todo from "./Todo";

const TodoList = ( { todos, deleteTodo, completeTodo } ) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
            {todos.map((todo) => (
                <Todo 
                    text={todo.text} 
                    key={todo.id} 
                    id={todo.id} 
                    deleteIt={deleteTodo} 
                    completeIt={completeTodo}
                    completed={todo.completed}     
                    />
            ))}
         </ul>
        </div>
    );
};

export default TodoList;