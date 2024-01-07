const Anectode = ({ anecdote }) => (
    <div>
        <h1>{anecdote.content} by {anecdote.author}</h1>
        <p>has {anecdote.votes} votes</p>
        <p>for more info see {anecdote.info}</p>
    </div>
)

export default Anectode