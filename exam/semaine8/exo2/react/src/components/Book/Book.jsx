import { useQuery, } from '@apollo/client'
import OneBook from './OneBook'
import { ALL_BOOK, } from '../../querie.js'
import AddBook from './AddBook.jsx'
const Book = ({ setError }) => {
    const result = useQuery(ALL_BOOK)


    if (result.loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div>
            {result.data.allBooks.map((book) => <OneBook key={book.id}{...{ book, setError }} />)}
            <p > <strong>There is {result.data.bookCount} book </strong></p>
            <div>
                <AddBook />
            </div>
        </div>
    )
}
export default Book