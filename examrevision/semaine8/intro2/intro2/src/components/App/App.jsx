import { useQuery } from '@apollo/client'
import Persons from '../Person/Persons'
import PersonForm from '../Person/PersonForm'
import { ALL_PERSONS } from '../../querie.js'
import { useEffect, useState } from 'react'
import PhoneForm from '../Person/PhoneForm.jsx'


const App = () => {
  const result = useQuery(ALL_PERSONS)
  const [error, setError] = useState('');
  const changeerror = () => setTimeout(() => setError(''), 5000)
  useEffect(() => changeerror, [error])
  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      {error !== '' ? <p style={{ color: 'red' }}>{error}</p> : ''}
      <Persons persons={result.data.allPersons} />
      <PersonForm {...{ setError }} />
      <PhoneForm {...{ setError }} />
    </div>
  )
}

export default App