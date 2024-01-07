import { Context as DataContext } from 'contexts/dataContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ListGames = () => {
    const { games } = useContext(DataContext);
    return (
        <div>
            {games.map((game) => <div key={game.id}> <Link to={`/games/${game.id}`}> <p>{game.name}</p> </Link> </div>)}
        </div>
    )
}

export default ListGames;