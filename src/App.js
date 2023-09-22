import React, { useState } from 'react';
import "./App.css"
import InputSearch from './component/inputSearch/InputSearch';
import ButtonSelect from './component/buttonSelect/ButtonSelect';
import ToDoList from './component/toDo/ToDoList';
import CreateForm from './component/CreateForm/CreateForm';
import ToDoItem from 'component/toDo/ToDoItem';
const App = () => {
  return(
    <div className='todo'>
      <h1 className='todo-title'>TODO APP</h1>
      <div className='todo-content'>
      <InputSearch/>
      <ButtonSelect/>
      <ToDoList/>
      </div>
    <CreateForm/>
      </div>
  )
   
};

export default App;