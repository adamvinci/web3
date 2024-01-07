import { useState } from 'react'
import Notes from '../Notes/Notes'
import AddNote from '../Notes/AddNote'

const listNotes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

const App = () => {
  const [notes, setNotes] = useState(listNotes)
  const [showAll, setShowAll] = useState(true)
  const handleSubmit = (e) => {
    setNotes([...notes, { id: notes.length + 1, content: e.target.dataset.title, important: false }])
  }
  return (
    <div>
      <h1>Notes</h1>
      <Notes {...{ notes, showAll }} />
      <AddNote {...{ handleSubmit }} />
      <input type="checkbox" checked={showAll} onChange={e => setShowAll(e.target.checked)} />
      <p>{showAll ? 'important' : 'all'}</p>
    </div>
  )
}

export default App