import { v4 as uuidv4 } from 'uuid'
import { Context as voteContext } from "../../contexts/countersContext.jsx";
import { useContext } from "react";
import { useState } from 'react'

const AddOpinion = () => {
    const { AddOpinion } = useContext(voteContext)
    const [newOpinion, setNewOpinion] = useState('');

    const handlerAddOpinion = (event) => {
        setNewOpinion(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const opinion = {
            id: uuidv4(),
            content: newOpinion,
            nbVotes: 0
        }
        AddOpinion(opinion)
        setNewOpinion('')
    }
    return <form onSubmit={submitHandler}>
        <input value={newOpinion} onChange={handlerAddOpinion} type="text"></input>
        <button type="submit">Add Opinion</button>
    </form>
}

export default AddOpinion