import { useState } from 'react'
const CreatePerson = ({ personnes, setPersonne }) => {
    console.log(setPersonne)

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const handleraddName = (event) => {
        setNewName(event.target.value)
    }
    const handleraddNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const addPersonne = (event) => {
        event.preventDefault()
        const noteObject = {
            id: personnes.length + 1,
            content: newName,
            number: newNumber
        }
        setPersonne(personnes.concat(noteObject))
        setNewName('')
        setNewNumber('')
    }

    return (
        <div>
            <form onSubmit={addPersonne}>
                Name<input value={newName} onChange={handleraddName} />
                number<input value={newNumber} onChange={handleraddNumber} />
                <button type="submit">add</button>

            </form>
        </div>
    )
}

export default CreatePerson