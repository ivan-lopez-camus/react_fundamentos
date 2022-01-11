import React from 'react';
import './Search.css';

function Search({searchValue, setSearchValue}){

    const onSearchValue = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    
    return(
        <input className="Search" 
        placeholder="Escriba la tarea a agregar"
        value={searchValue}
        onChange={onSearchValue}
        />
    );
}

export {Search};





