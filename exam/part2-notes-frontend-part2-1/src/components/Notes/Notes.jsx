import Note from "./Note"

const Notes = ({ notes, showAll }) => {
    const notesToShow = showAll === true ? notes.filter((n) => n.important === true) : notes
    return (<div>
        {notesToShow.map((note) =>
            <Note key={note.id} note={note} />
        )}
    </div>)
}

export default Notes