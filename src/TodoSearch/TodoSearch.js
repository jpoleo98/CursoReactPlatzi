import {React} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function TodoSearch({searchValue,setSearchValue,handleSearch}) {

  return (
    <>
      <div className='flex-search'>
        <input type='text' placeholder='Intoduce la tarea a buscar' className='search'
        value={searchValue}
        onChange={handleSearch}
        >
        </input>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon-search'/>
      </div>
    </>
  )
}

export {TodoSearch}