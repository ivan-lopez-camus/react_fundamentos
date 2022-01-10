import React from 'react';
import './Counter.css';

const estilos={
    color: 'red',
    fontSize:'2.5rem',
    backgroundColor:'yellow'
};

function Counter(){
    return(
        <div>
            <h2 className="Counter">Hola este archivo esta hecho con React</h2>
            <p>Esto es react basico</p>
        </div>
        

    );
}

export {Counter};