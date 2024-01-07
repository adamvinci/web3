import { useState } from 'react';



const fetchValue = () => {
    const value = JSON.parse(localStorage.getItem("counter"));
    return value ?? 0
}

const setValue = (counter) => {
    localStorage.setItem("counter", JSON.stringify(counter))
}

const useLocalStorage = () => {
    const currentValue = fetchValue();
    const [stateValue, stateSetter] = useState(currentValue);

    const persistentSetter = (newvalue) => {
        setValue(newvalue)
        stateSetter(newvalue);
    }

    return [stateValue, persistentSetter]
}

export default useLocalStorage;
