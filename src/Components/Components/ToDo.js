import React, {useState} from 'react'
import ToDoForm from './ToDoForm'

function ToDo({ToDos, completeToDo, removeToDo, updateToDo, DoneToDo}) {

    // input
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
      updateToDo(edit.id, value)
      setEdit({
        id:null,
        value: ''
      })
    }
    // input

    if (edit.id){
      return <ToDoForm edit={edit} onSubmit={submitUpdate} />
    }

    return ToDos.map((ToDo, index) => (

      <div className={ToDo.isComplete ? 'todo-row complete' : 'todo-row'} key={index} >

        <div key={ToDo.id} onClick={() => completeToDo[ToDo.id]}>
            {ToDo.text}
        </div>

        <div className='icons'>
            <div 
              onClick={() => setEdit({id: ToDo.id, value: ToDo.text})} 
              className='edit-icon tooltip'>
              <img alt="edit-icon" src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png"/>
              <span class="tooltiptext">Editar</span>
            </div>

            <div 
              onClick={() => DoneToDo(ToDo.id)} 
              className='done-icon tooltip'>
              <img alt="done-icon" src="https://img.icons8.com/material-rounded/24/000000/task-completed.png"/>
              <span class="tooltiptext">Completar</span>
            </div>

            <div 
              onClick={() => removeToDo(ToDo.id)} 
              className='delete-icon tooltip'>
              <img alt="delete-icon" src="https://img.icons8.com/material-rounded/24/000000/delete-sign.png"/>
              <span class="tooltiptext">Remover</span>
            </div>
        </div>

      </div>  
      
    ));
}

export default ToDo
