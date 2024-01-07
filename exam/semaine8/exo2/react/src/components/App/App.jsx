import { useEffect, useState } from 'react';
import Author from '../Authors/Author'
import Book from '../Book/Book'
const App = () => {
  const [error, setError] = useState('')
  const changeError = () => setTimeout(() => setError(''), 5000)
  useEffect(() => changeError, [error])
  return (
    <div>
      {error !== '' ? <p style={{ color: 'red' }}> {error} </p> : ''}
      <Author {...{ setError }} />
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <Book {...{ setError }} />
      </div>

    </div>)
}

export default App;