import React from 'react';
import {Counter} from './Counter';
import {Search} from './Search';
import {List} from './List';
import {Item} from './Item';
import {CreateButton} from './CreateButton';
import './App.css';

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
    <React.Fragment>
      <Counter
        total={totalTareas}
        completados={tareasCompletadas}
      />
     
       <Search
       searchValue={searchValue}
       setSearchValue={setSearchValue}
       />
      
       <List>
        {searchTareas.map(item =>(
           <Item 
            key={item.text} 
            text={item.text} 
            completed={item.completed}
            onComplete = {() => completarTarea(item.text)}
            onDelete = {() => borrarTarea(item.text)}
            /> 
        ))}  
      </List>

       <CreateButton/>
  
    </React.Fragment>
  );
}

export default App;
