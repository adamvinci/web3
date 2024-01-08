import AddBook from './AddBook.jsx'
import { Context as DataContext } from '../contexts/dataContext.jsx';
import { useContext } from 'react'
import { Link } from 'react-router-dom';

const Book = () => {


    const { books } = useContext(DataContext)
    if (books.loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div>
            {books.data.allBooks.map((book) => <Link key={book.id} to={`/book/${book.id}`}><p>{book.title}</p></Link>)}
            <p > <strong>There is {books.data.bookCount} book </strong></p>
            <div>
                <AddBook />
            </div>
        </div>
    )
}
export default Book