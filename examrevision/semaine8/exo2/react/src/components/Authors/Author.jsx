import { Context as DataContext } from '../contexts/dataContext.jsx';
import { useContext } from 'react'
import { Link } from 'react-router-dom';

const Author = () => {
    const { authors } = useContext(DataContext)

    if (authors.loading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            {authors.data.allAuthors.map((author) => <Link key={author.id} to={`/author/${author.id}`}><p>{author.name} </p></Link>)}
            <p > <strong>There is {authors.data.authorCount} authors </strong></p>
        </div>
    )
}

export default Author