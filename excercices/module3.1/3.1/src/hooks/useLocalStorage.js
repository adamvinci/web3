import { useState } from 'react';


function useLocalStorage(key, initialValue){
    let cmpt = JSON.parse(localStorage.getItem(key))
    if(!cmpt){
        cmpt =initialValue;
    }

    const [ stateValue, stateSetter ] = useState(cmpt);

  const persistentSetter = (newvalue) => {
    localStorage.setItem(key, JSON.stringify(newvalue))
    stateSetter(newvalue);
  } 
  
  return [ stateValue, persistentSetter]

    
}

export default useLocalStorage