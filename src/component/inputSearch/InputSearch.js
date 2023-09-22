import React,{useState} from 'react';
import "./style.css"
import CreateForm from 'component/CreateForm/CreateForm';

const InputSearch = () => {
    const [visibleForm, setVisibleForm] = useState(false);

    function handleCreateForm() {
        setVisibleForm(true);
    }
    return (
        <div className='inputSearch
        '>
            <input placeholder='Search' type='text' name="search" className="search"/>
            <button className= {`btn-create `} onClick={handleCreateForm}>Create</button>
           
            <CreateForm visibleForm={visibleForm} setVisibleForm={setVisibleForm} /> {/* Truyền cả hàm setVisibleForm */}

        </div>
    );
};

export default InputSearch;