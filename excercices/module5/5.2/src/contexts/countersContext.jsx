import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
const Context = React.createContext(null)


// eslint-disable-next-line react/prop-types
const ProviderWrapper = ({ children }) => {

    const data = [
        {
            id: uuidv4(),
            content: 'A',
            nbVotes: 0,
        },
        {
            id: uuidv4(),
            content: 'B',
            nbVotes: 0,
        },
        {
            id: uuidv4(),
            content: 'C',
            nbVotes: 0,
        },
        // Add more objects as needed
    ];

    const [opinions, setOpinion] = useState(data);

    const AddOpinion = (opinion) => {
        setOpinion(opinions.concat(opinion));
    }

    const AddVote = (opinion) => {
        setOpinion(opinion)
    }


    const exposedValue = {
        AddOpinion,
        opinions,
        AddVote

    };

    return <Context.Provider value={exposedValue}>{children}</Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}    
