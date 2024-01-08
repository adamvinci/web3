import { Context as DataContext } from 'contexts/dataContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const JokesList = () => {
    const { jokes } = useContext(DataContext);

    return (
        <div>
            {jokes.map((joke) => <Link key={joke.id} to={`/jokes/${joke.id}`}><p>{joke.question} : {joke.answer} </p></Link>)}
        </div>
    )

}

export default JokesList