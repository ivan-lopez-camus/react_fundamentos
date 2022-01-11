import React from 'react';
import './CreateButton.css';

function CreateButton(props){

    const onClickButton = (mens) =>{
        alert(mens)
    }
    return(
        <button 
            className="CreateButton"
            onClick={()=>onClickButton("Hola a todos")}   
        >
            +
        </button>
    );
}

export {CreateButton};