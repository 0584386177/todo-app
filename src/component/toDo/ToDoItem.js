import React from 'react';
import {Style} from "./style.css";

const ToDoItem = (props) => {
    const {value} = props;
    return (
        <div className='todo-item'>
            <div className='todo-item_input'>{props.value}</div> 
            
            <div  className='features'>
            <i className="fa-solid fa-trash"></i>
            <i className="fa-solid fa-check"></i>
            </div>
        </div>
    );
};

export default ToDoItem;