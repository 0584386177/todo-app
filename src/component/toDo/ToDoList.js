import React from 'react';
import "./style.css";
import ToDoItem from './ToDoItem';

const ToDoList = (props) => {
    let {todos} =props;
    console.log(todos)
    return (
        <div className='todo-list'>
            <ul>
                { todos ? todos.map((item,index)=>{
                    return <li key={index}>
                    <ToDoItem value={item}></ToDoItem>
                </li>
                }) : ""}
             </ul>
        </div>
    );
};

export default ToDoList;