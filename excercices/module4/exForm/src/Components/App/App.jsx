import DisplayPersonne from "../DisplayPerson/DisplayPerson"
import CreatePerson from "../CreatePerson/CreatePerson"
import { useState, useEffect } from 'react'
import nameService from '../../services/person.js'

const App = () => {
  const [personnes, setPersonne] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () => {
 nameService.getAll()
      .then(response => {
        setPersonne(response.data)
      })
  }

  useEffect(hook, [])

  const removePerson =({id,content})=>{
    alert(`Delete ${content}`)
    nameService.deletePerson(id).then(response=>{
      setPersonne(personnes.filter((p)=>p.id!==id))
    })
} 
  const filterHandler = (event) => {
    setFilter(event.target.value)
  }

  const filteredPerson = personnes.filter((p) => p.content.toLowerCase().includes(filter.toLowerCase()))

  
  return (
    <div>
      <h1>Filter</h1>
      <input type="text" value={filter} onChange={filterHandler} />
      <h1>add new</h1>
      <ul>
        {filteredPerson.map(personne =>
          <DisplayPersonne removePerson={removePerson }personne={personne} />
        )}
      </ul>

      <CreatePerson personnes={personnes} setPersonne={setPersonne} />
    </div>
  )
}

export default App