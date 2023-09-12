import { useState } from 'react';
const COUNTER_KEY = "counter"

function useLocalStorage(key, initialValue){
    let cmpt = JSON.parse(localStorage.getItem(COUNTER_KEY))
    if(!cmpt){
        cmpt =initialValue;
    }

    const [ stateValue, stateSetter ] = useState(cmpt);

  const persistentSetter = (newvalue) => {
    localStorage.setItem(COUNTER_KEY, JSON.stringify(newvalue))
    stateSetter(newvalue);
  } 
  
  return [ stateValue, persistentSetter]

    
}

export default useLocalStorage