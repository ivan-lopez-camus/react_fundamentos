import React from 'react'
import {Counter} from '../Counter';
import {Search} from '../Search';
import {List} from '../List';
import {Form} from '../Form';
import {Item} from '../Item';
import {Modal} from '../Modal';
import {CreateButton} from '../CreateButton';
import './App.css';

function AppUI({
    totalTareas,
    tareasCompletadas,
    searchValue,
    setSearchValue,
    searchTareas,
    completarTarea,
    borrarTarea,
    openModal,
    setOpenModal,
    addTarea
}) {

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
            
       {openModal && ( 
            <Modal>
                <Form
                    addTarea={addTarea}
                    setOpenModal = {setOpenModal}
                    />
                    
            </Modal>
        )}

         <CreateButton
            setOpenModal = {setOpenModal}
         />
    
      </React.Fragment>
    )
}

export {AppUI}