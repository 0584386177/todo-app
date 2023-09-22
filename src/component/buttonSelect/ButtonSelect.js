import React from 'react';
import ButtonSelectItem from './ButtonSelectItem';
import  "./style.css"
const ButtonSelect = (prop) => {
    
    return (
        <div className='btn-select_list'>
            <ButtonSelectItem
                nameButton = "ALL"
            />
            <ButtonSelectItem
                nameButton = "DONE"
            />
            <ButtonSelectItem
                nameButton = "IN-PROGRESS"
            />
        </div>
    );
};

export default ButtonSelect;