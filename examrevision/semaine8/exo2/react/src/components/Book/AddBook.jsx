import { useState } from "react"

import { Context as DataContext } from '../contexts/dataContext.jsx';
import { useContext } from 'react'
const AddBook = () => {
    const { addBook } = useContext(DataContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [published, setPublished] = useState('')
    const [genres, setGenres] = useState([])
    const [genre, setGenre] = useState('')
    const addGenre = () => {
        setGenres([...genres, genre])
        setGenre('')
    }



    const handlerSubmit = (e) => {
        e.preventDefault()
        addBook({ variables: { title, author, published, genres } })
        setTitle('');
        setAuthor('');
        setGenre('')
        setPublished('');
        setGenres([])
    }
    return (
        <form onSubmit={handlerSubmit}>
            <div>
                <label >title</label>
                <input required type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <label>author</label><input required type="text" value={author} onChange={e => setAuthor(e.target.value)} /> </div>
            <div> <input required type="number" value={published} onChange={e => setPublished(parseInt(e.target.value))} /> </div>
            <input type="text" value={genre} onChange={e => setGenre(e.target.value)} />
            <div>  <button type="button" onClick={addGenre}>Add genre</button></div>
            <div>genres: {genres.join(' ')}</div>
            <div> <button style={{ marginTop: '20px', width: '300px', height: '50px' }} type="submit">submit</button></div>
        </form>
    )
}

export default AddBook