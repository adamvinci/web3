const OneBook = ({ book }) => <p>{book.title} {book.genres.join('')} {book.published}</p>

export default OneBook