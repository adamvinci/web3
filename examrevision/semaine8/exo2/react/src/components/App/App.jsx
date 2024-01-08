import Author from '../Authors/Author'
import Book from '../Book/Book'
import OneBook from '../Book/OneBook.jsx';
import OneAuthor from '../Authors/OneAuthor.jsx'
import { Context as DataContext } from '../contexts/dataContext.jsx';
import { useContext } from 'react'
import { Routes, Route, useMatch } from 'react-router-dom';
import Menu from '../Menu/Menu.jsx';


const App = () => {
  const { error, authors, books } = useContext(DataContext)
  console.log()

  const matchBook = useMatch('/book/:id')
  const book = matchBook ? books.data.allBooks.find((book) => book.id === matchBook.params.id) : undefined;

  const matchAuthor = useMatch('/author/:id')
  const author = matchAuthor ? authors.data.allAuthors.find((author) => author.id === matchAuthor.params.id) : undefined;
  return (
    <div>
      <p style={{ color: 'red' }}> {error} </p>
      <Menu />
      <Routes>
        <Route path="/book" element={<Book />} />
        <Route path="/" element={<Author />} />
        <Route path="/author/:id" element={<OneAuthor {...{ author }} />} />
        <Route path="/book/:id" element={<OneBook {...{ book }} />}
        />
      </Routes>

    </div>

  )
}

export default App;