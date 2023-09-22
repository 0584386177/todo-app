import React from 'react';
import   "./style.css"
const ButtonSelectItem = (prop) => {
    return (
        <div className='btn-select_item'>
            <button className='btn'>{prop.nameButton}</button>
        </div>
    );
};

export default ButtonSelectItem;