import React from 'react'

function TodoCounter({total,completed}) {

  return (
    <h1 className='Tittle'>
        {total===completed?
        <span className='upercase'>Felicitaciones has completado todas las tareas</span>
        :
        <span>Has completado <span className='completed'>{completed}</span> de {total} Tareas</span>
      }
    </h1>
  )
}

export {TodoCounter}