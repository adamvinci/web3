import { useState } from "react";
import { Context as DataContext } from '../contexts/dataContext.jsx';
import { useContext } from 'react'
const OneAuthor = ({ author }) => {
    const { updateBirthYear } = useContext(DataContext)
    const handleSubmit = (name, yearString) => {
        const year = parseInt(yearString, 10);
        updateBirthYear({ variables: { name, year } })
    }
    const [born, setBorn] = useState('')
    return (
        <div>
            <p>{author.name} {author.born ?? "pas de date"} </p>
            <input type="text" value={born} onChange={e => setBorn(e.target.value)} id="" />
            <button onClick={() => handleSubmit(author.name, born)}>change date</button>
        </div>
    )


}

export default OneAuthor;