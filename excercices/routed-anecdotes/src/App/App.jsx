import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
  useMatch
} from "react-router-dom"
import Footer from '../Footer/Footer'
import About from '../About/About'
import AnecdoteList from '../AnecdoteList/AnectodeList'
import CreateNew from '../CreateNew/CreateNew'
import Anectode from '../Anectode/Anectode'
import Notification from '../Notification/Notification'



const App = () => {
  const [notification, setNotification] = useState('');
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
  const navigate = useNavigate();
  const clearNotificationWithDelay = (_) => {
    setTimeout(() => setNotification(''), 5000);
  };

  useEffect(clearNotificationWithDelay, [notification]);


  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(` A new anectode ${anecdote.content} a ete cree`);
    navigate('/')
  }

  const padding = {
    paddingRight: 5
  }
  const match = useMatch('/anectodes/:id')
  const anectode = match
    ? anecdotes.find(note => note.id === Number(match.params.id))
    : null
  return (
    <div>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/create">create</Link>
        <Link style={padding} to="/About">about</Link>
      </div>
      <Notification notification={notification} />
      <div>
        <Routes>
          <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
          <Route path="/anectodes/:id" element={<Anectode anectode={anectode} />} />
          <Route path="/create" element={<CreateNew addNew={addNew} />} />
          <Route path="/About" element={<About />} />

        </Routes>
      </div>
      <Footer />

    </div>
  )
}

export default App
