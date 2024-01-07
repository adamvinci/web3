import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
const Context = React.createContext(null)


const ProviderWrapper = (props) => {

    const [opinions, setOpinions] = useState([
        {
            id: 1,
            name: "opinion A",
            votes: 1
        },
        {
            id: 2,
            name: "opinion B",
            votes: 1
        },
        {
            id: 3,
            name: "opinion C",
            votes: 1
        },
    ]);
    const addOpinion = (name) => {
        setOpinions([...opinions, { id: uuidv4(), name: name, votes: 1 }])
    }
    const vote = (id) => {
        const copie = [...opinions];
        copie.find((c) => c.id === id).votes += 1;
        copie.sort((a, b) => b.votes - a.votes);
        setOpinions(copie);
    }
    const exposedValue = {
        opinions,
        addOpinion,
        vote
    }

    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}    
