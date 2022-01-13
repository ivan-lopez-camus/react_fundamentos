import React from 'react';
import {AppUI} from './AppUI';

const defaulTareas = [
  {text: 'Cocinar', completed: false},
  {text: 'Leer', completed: false},
  {text: 'Jugar', completed: true}
];

function useLocalStorage (itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);
  let parseItem;

  if(!localStorageItem){ //localSrotage vacio sin tareas
    
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parseItem = initialValue;

  }else{
    parseItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parseItem);

  const guardarItem = (nuevoItem) => {
    const stringItem = JSON.stringify(nuevoItem);
    localStorage.setItem(itemName, stringItem);
    setItem(nuevoItem)
  };

  return [
    item,
    guardarItem,
  ];
}

function App() {
  
  const [tareas, guardarTareas] = useLocalStorage('Tareas', []);
  const [searchValue, setSearchValue] = React.useState("");
  
  const [openModal, setOpenModal] = React.useState(false);
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
    });
   
  }


  const completarTarea = (text) => {
      const tareaIndex = tareas.findIndex(tarea => tarea.text === text);
      
      const newTareas = [...tareas];
      newTareas[tareaIndex].completed = true;
      guardarTareas(newTareas);
  }

  const borrarTarea = (text) => {
    const tareaIndex = tareas.findIndex(tarea => tarea.text === text);
    
    const newTareas = [...tareas];
    newTareas.splice(tareaIndex,1);
    guardarTareas(newTareas);
}

const addTarea = (text) => {
  const newTareas = [...tareas];
  newTareas.push({
    completed: false,
    text,
  });
  guardarTareas(newTareas);
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
    openModal = {openModal}
    setOpenModal = {setOpenModal}
    addTarea = {addTarea}
    />
  );
}

export default App;
