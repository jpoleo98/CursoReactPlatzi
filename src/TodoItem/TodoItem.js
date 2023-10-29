import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

function TodoItem({text,completed,setTodos,handleCompleted,handleDelete}){

  const completedCheck = completed?'check-completed':'';
  const completedBc = completed?'completed-bc':'';
    return(
      <li className={completedBc}>
        <FontAwesomeIcon icon={faCheck} className={`${completedCheck} icon icon-check`} 
          onClick={handleCompleted}
        />
        <p>{text}</p>
        <FontAwesomeIcon icon={faX} className='icon icon-cancelled'
          onClick={handleDelete}
        />
      </li>
    );
  }

export {TodoItem}