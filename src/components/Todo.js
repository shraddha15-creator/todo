import React from "react";

const Todo = (props) => {
    return (
        <div className="todo">
            <li className="todo-item">
            {props.completed ?  <s>{props.text}</s> : props.text}
             </li>
            <button className="complete-btn"  onClick={() => props.completeIt(props.id)}>
                {props.completed ?<i className="fas fa-check-double">
                </i>:<i className="fas fa-check">
                </i>}
                
            </button>
            <button className="trash-btn" onClick={() => props.deleteIt(props.id)} >
                <i className="fas fa-trash">
                </i>
            </button>
        </div>
    );
};

export default Todo;