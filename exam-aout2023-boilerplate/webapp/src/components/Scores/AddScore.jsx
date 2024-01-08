import { Context as DataContext } from 'contexts/dataContext';
import { useContext, useState } from 'react';
const AddScore = ({ jokeId }) => {
    const { addScore } = useContext(DataContext);
    const [username, setUsername] = useState('')
    const [score, setScore] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()

        addScore({ username, date: new Date().toISOString(), score, joke: jokeId })
        setUsername('')
        setScore(0)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    Score:
                    <input max="10" min="0" type="number" value={score} onChange={e => setScore(Number(e.target.value))} />
                </div>
                <button type="submit"> Ajouter</button>
            </form>
        </div>
    )
}

export default AddScore;