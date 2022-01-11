import React from 'react';
import {AppUI} from './AppUI';

const defaulTareas = [
  {text: 'Cocinar', completed: false},
  {text: 'Leer', completed: false},
  {text: 'Jugar', completed: true}
];

function App(props) {
  
  const [tareas, setTareas] = React.useState(defaulTareas);
  const [searchValue, setSearchValue] = React.useState("");
  
  const tareasCompletadas = tareas.filter(tarea => !!tarea.completed).length;
  const totalTareas = tareas.length;

  let searchTareas = [];

  if(!searchValue.length >= 1 ){
    searchTareas= tareas;
  }else{
    searchTareas= tareas.filter(tar => {
      const tareaText = tar.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return tareaText.includes(searchText);
    })
   
  }

  const completarTarea = (text) => {
      const tareaIndex = tareas.findIndex(tarea => tarea.text === text);
      
      const newTareas = [...tareas];
      newTareas[tareaIndex].completed = true;
      setTareas(newTareas);
  }

  const borrarTarea = (text) => {
    const tareaIndex = tareas.findIndex(tarea => tarea.text === text);
    
    const newTareas = [...tareas];
    newTareas.splice(tareaIndex,1);
    setTareas(newTareas);
}

  return (
    <AppUI
    totalTareas={totalTareas}
    tareasCompletadas={tareasCompletadas}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchTareas={searchTareas}
    completarTarea={completarTarea}
    borrarTarea={borrarTarea}
    />
  );
}

export default App;
