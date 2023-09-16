import { useState } from 'react'
const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNotes, setNewNotes] = useState('');
  const [showAll, setShowAll] = useState(true)


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: notes.length + 1,
      content: newNotes,
      important: false
    }
    setNotes(notes.concat(noteObject))
    setNewNotes('')
  }
  const handleradd = (event) => {
    setNewNotes(event.target.value)
  }
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note =>
          <li key={note.id}>{note.content}</li>
        )}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNotes} onChange={handleradd} />
        <button type="submit">save</button>

      </form>
      <button type="submit" onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
    </div>
  )
}

export default App