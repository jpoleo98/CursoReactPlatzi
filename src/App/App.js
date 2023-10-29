import {React,useState} from 'react'
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';


function App() {

  const [searchValue,setSearchValue] = useState('');
  const [todos,saveTodos] = useLocalStorage('TODOS_V1',[]);

  const completedTodos = todos.filter((todo)=>!!todo.completed).length;
  const totalTodos = todos.length;
  
  const searchedTodos = todos.filter((todo)=>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  )

  const handleSearch = ((e) =>{
    e.preventDefault();
    setSearchValue(e.target.value);
  })

  const handleCompleted =((text)=>{

    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo=>todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  })

  const handleDelete = ((text)=>{
    const newTodos = [...todos];
    const todoDelete = newTodos.filter(todo=>todo.text!==text);
    saveTodos(todoDelete);
  })

  return(
    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    handleSearch={handleSearch}
    searchedTodos={searchedTodos}
    handleCompleted={handleCompleted}
    handleDelete={handleDelete}
    todos={todos}
    />
  );

}

export default App;
