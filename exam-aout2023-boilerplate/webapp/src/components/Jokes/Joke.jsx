import AddScore from "components/Scores/AddScore"
import ListeScore from "components/Scores/ListScores"

const Joke = ({ joke }) => {
    console.log(joke)
    return (
        <div>
            <div>
                <h1>Joke</h1>
                <p> {joke.question}</p>
                <p> {joke.answer}</p>
                <p> {joke.category}</p>
                <p> Nombre de score donné : {joke.scoreCount} {joke.averageScore ? `pour une moyenne de ${joke.averageScore}` : ''}</p>
            </div>

            <div>
                <h1>Scores</h1>
                {joke.scores.length !== 0 ? <ListeScore scores={joke.scores} /> : "Pas de scores"}
            </div>

            <div>
                <h1>Ajouter un score</h1>
                <AddScore jokeId={joke.id} />
            </div>
        </div>
    )
}

export default Joke