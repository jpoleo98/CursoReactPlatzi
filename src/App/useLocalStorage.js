import React from "react";

function useLocalStorage(itemName, initialValue){

    const localStorageItem = localStorage.getItem(itemName)
    let parseItem;
  
    if(!localStorageItem){
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parseItem = initialValue;
    }else{
      parseItem = JSON.parse(localStorageItem);
    }
  
    const [items,setItems] = React.useState(parseItem);
  
    const saveItem = ((newItem)=>{
      
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItems(newItem);
    })
  
    return [items, saveItem];
  
  }

export {useLocalStorage}