import { useState } from 'react'
import nameService from '../../services/person.js'
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
        const personne = personnes.find(n => n.content === newName)
        if(personne){
            alert(`User ${newName} already exist remplace the number ?`)    
            const changedPersonne = { ...personne, number: newNumber }
        
            nameService
              .update(personne.id, changedPersonne)
              .then(response => {
                console.log(response)
                setPersonne(personnes.map((p) => p.id !== personne.id ? p : response.data))
              })
          }else{
            const noteObject = {
                id: personnes.length + 1,
                content: newName,
                number: newNumber
            }
            nameService.create(noteObject).then(response =>{
                console.log(response)
                setPersonne(personnes.concat(response.data))
            })
    
            setNewName('')
            setNewNumber('')         
          }
        
   
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