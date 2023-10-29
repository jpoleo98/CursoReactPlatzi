import React from 'react';
import {TodoCounter} from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoCreateButton } from '../CreateTodoButtom/TodoCreateButton';
import { TodoItem } from '../TodoItem/TodoItem';

function AppUI({totalTodos,completedTodos,searchValue,setSearchValue,handleSearch,searchedTodos,handleCompleted,handleDelete,todos}){

    return (
    
        <>
          <div className='container'>
            <TodoCounter
              total={totalTodos}
              completed={completedTodos}
            />
            <TodoSearch 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              handleSearch={handleSearch}
            />
    
            <TodoList>
    
              {
                todos.length === 0?
                <p className='text-center'>No existen tareas</p>
                :
                  searchedTodos.length > 0 ?
                  searchedTodos.map(todo => (
                    <TodoItem
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      handleCompleted={()=> handleCompleted(todo.text)}
                      handleDelete={()=> handleDelete(todo.text)}
                    />
                  )):
                    <p className='text-center'>No hay Tareas que coincidan</p>
              }
    
            </TodoList>
    
            <TodoCreateButton/>
          </div>
        </>
      );
}

export {AppUI}