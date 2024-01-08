import Score from 'components/Scores/Score';


const ListeScore = ({ scores }) => (
    <div>
        {scores.map((score) => <Score key={score.id} {...{ score }} />)}
    </div>
)

export default ListeScore