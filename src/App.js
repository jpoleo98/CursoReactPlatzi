import {React,useState} from 'react'
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoCreateButton } from './TodoCreateButton';
import { TodoItem } from './TodoItem';

function useLocalStorage(itemName, initialValue){

  const localStorageItem = localStorage.getItem(itemName)
  let parseItem;

  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parseItem = initialValue;
  }else{
    parseItem = JSON.parse(localStorageItem);
  }

  const [items,setItems] = useState(parseItem);

  const saveItem = ((newItem)=>{
    
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItems(newItem);
  })

  return [items, saveItem];

}

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

export default App;
