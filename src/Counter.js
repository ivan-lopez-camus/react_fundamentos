import React from 'react';
import './Counter.css';

function Counter({total, completados}){
    return(
        <div>
            <h2 className="Counter">Has completado {completados} de {total} tareas </h2>
            <p>Esto es react basico</p>
        </div>
        

    );
}

export {Counter};