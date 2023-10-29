import React from 'react'

function TodoCreateButton() {

  const handleCreateTodo = ((e)=>{
    console.log('Create');
  })

  return (
    <button className='button-create' onClick={handleCreateTodo}>+</button>
  )
}

export {TodoCreateButton}