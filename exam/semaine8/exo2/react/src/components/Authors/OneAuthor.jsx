import { useState } from "react";

const OneAuthor = ({ author, handleSubmit }) => {
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