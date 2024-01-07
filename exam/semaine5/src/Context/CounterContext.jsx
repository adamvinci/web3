import React, { useState } from "react";

const Context = React.createContext(null)


const ProviderWrapper = (props) => {

    const [counter, setCounter] = useState({ good: 0, bad: 0, ok: 0 })


    const exposedValue = {
        counter,
        setCounter,
    }

    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}    
