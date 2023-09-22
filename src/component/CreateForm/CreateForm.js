import React, { useState } from 'react';
import "./style.css"
import ToDoList from 'component/toDo/ToDoList';
const CreateForm = ({ visibleForm,setVisibleForm }) => { 
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState([]);

    const handleSubmitTodo = () => {
        setJobs([...jobs, job]);
    }

    const handleValueInput = (e) => {
        setJob(e.target.value);
    }

    const handleCloseTodo = () => {
        setVisibleForm(false); 
    }
    return (
        <div className={`form-create ${visibleForm ? 'active' : 'hidden'}`}>
        <div className='form-create-content'>
        <h3 className='form-create_title'>Create new todo</h3>
        <input type='text' name='create' className={`form_create_input`} placeholder='Enter....' onChange={handleValueInput}/>
        <div className='create-features'>
            <button className='btn-createForm' onClick={handleSubmitTodo}>Create</button>         
            <button className='btn-closeForm'  onClick={handleCloseTodo} >Close</button>
        </div>
        </div>
            {/* {hiddenForm ? <CreateForm show=""/> :  <CreateForm show="active"/> } */}
        <ToDoList todos={jobs}></ToDoList>


        </div>
       
        
    );
};

export default CreateForm;
