import { Context as DataContext } from 'contexts/dataContext';
import { useContext, } from 'react';
const Score = ({ score }) => {
    const { deleteScore } = useContext(DataContext);
    return (
        <div>
            <p>{score.username} a attribué un score de {score.score} a cette blague </p>
            <button onClick={() => deleteScore(score.id)}>DeleteScore</button>
        </div>
    )
}

export default Score