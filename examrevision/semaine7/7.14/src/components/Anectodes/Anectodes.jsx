import { Link } from "react-router-dom";

const AnecdoteList = ({ anecdotes }) => (
    <div>
        <h2>Anecdotes</h2>
        <ul>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <Link to={`/anectodes/${anecdote.id}`}>
                        <li  >{anecdote.content}
                        </li>
                    </Link>
                </div>
            )}
        </ul>
    </div>
)

export default AnecdoteList;