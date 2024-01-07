import { useEffect, useState } from 'react'
import Personne from '../Personnes/Personne'
import AddPersonne from '../Personnes/AddPersonne'
import FilterPersons from '../Personnes/FilterPersons'
import service from '../../services/person'
const App = () => {
  const [persons, setPersons] = useState([
  ])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  useEffect(() => {
    service.getAll().then(liste => setPersons(liste)).catch(error => console.warn(error))
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    const personneExist = persons.find((p) => p.name === newName);
    if (personneExist) {
      const alertResponse = window.confirm(`Name ${newName} already added. Do you want to update the existing entry?`);
      if (alertResponse) {
        const newPayload = { ...personneExist, number: number }
        service.updateOne(personneExist.id, newPayload).then(response => {
          console.log(response)
          console.log(persons.map((p) => p.id !== personneExist.id ? p : response))
          setPersons(persons.map((p) => p.id !== personneExist.id ? p : response))
          setNewName('')
          setNumber('')
        }).catch(error => console.warn(error));
      }
    } else {
      const newObject = {
        id: persons.length + 1, name: newName, number: number
      }
      service.addOne(newObject).then(response => {
        setPersons([...persons, response]),
          setNewName('')
        setNumber('')
      }).catch(error => console.warn(error))

    }
  }
  const deleteHandler = (e) => {
    const id = parseInt(e.target.dataset.id, 10)
    service.deleteOne(id).catch(error => console.warn(error));
    setPersons(persons.filter(p => p.id !== id))
  }
  const filteredPersons = persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase()))
  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPersons {...{ filter, setFilter }} />
      <h2>add a new</h2>
      <AddPersonne {...{ newName, setNewName, handleSubmit, number, setNumber }} />
      <h2>Numbers</h2>
      <Personne deleteHandler={deleteHandler} persons={filteredPersons} />
    </div>
  )
}

export default App