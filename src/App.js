import React from 'react';
import {Counter} from './Counter';
import {Search} from './Search';
import {List} from './List';
import {Item} from './Item';
import {CreateButton} from './CreateButton';
//import './App.css';

const tareas = [
  {text: 'Cocinar', completed: false},
  {text: 'Leer', completed: false},
  {text: 'Jugar', completed: false}
];

function App(props) {
  return (
    <React.Fragment>
      <Counter/>
     
       <Search/>
      
       <List>
        {tareas.map(item =>(
           <Item key={item.text} text={item.text}/> 
        ))}  
      </List>

       <CreateButton/>
  
    </React.Fragment>
  );
}

export default App;
