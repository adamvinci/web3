import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import AnecdoteList from './components/Anectodes/Anectodes'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import CreateNew from './components/AddAnectode/AddAnectode'
import Anectode from './components/Anectodes/Anectode'
import {
  Routes, Route, useMatch
} from 'react-router-dom'
const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }
  const [notification, setNotification] = useState(false)


  const match = useMatch("/anectodes/:id");
  const anectode = match ? anecdotes.find((anectode) => anectode.id === Number(match.params.id)) : null
  const clearNotificationWithDelay = (_) => {
    setTimeout(() => setNotification(''), 5000);
  };

  useEffect(clearNotificationWithDelay, [notification]);


  return (
    <div>
      <h1>Software anecdotes</h1>
      <Navbar />
      {notification === true ? "anectode added" : ""}
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/anectodes/:id" element={<Anectode anecdote={anectode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateNew addNew={addNew} setNotification={setNotification} />} />
      </Routes>



      <Footer />
    </div>
  )
}



export default App
