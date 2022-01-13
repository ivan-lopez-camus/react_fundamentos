import React from 'react';
import './Form.css'

function Form({
    addTarea,
    setOpenModal
}) {

    const [nuevaTareaValue, setNuevaTareaValue] = React.useState('');
    
    const onChange = (event) => {
       setNuevaTareaValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTarea(nuevaTareaValue);
        setOpenModal(false);
    }
    return (
        <form onSubmit={onSubmit} >
            <label>Escribe tu nueva tarea</label>
            <textarea
                value = {nuevaTareaValue}
                onChange = {onChange}
                placeholder = "Escribe una nueva tarea"
            />
            <div className="Form-buttonContainer">
                <button
                type="button"
                className="Form-button TodoForm-button-cancel"
                onClick = {onCancel}
                >
                Cancelar
                </button>

                <button
                className="Form-button TodoForm-button-add"
                type= "submit"
                >
                Añadir
                </button>
            </div>
    </form>
    )
};

export {Form}