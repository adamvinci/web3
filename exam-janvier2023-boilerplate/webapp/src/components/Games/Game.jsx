
import Sale from 'components/Sales/Sale';
import AddSale from 'components/Sales/AddSale';
const Game = ({ game }) => {


    return (
        <div>
            <div>
                <h1>Game</h1>
                <p>{game.name}</p>
                <p>{game.price}</p>
                <p>{game.stock ?? "pas de stock"}</p>
            </div>

            <div>
                <h1> Sales </h1>
                {game.sales.length === 0 && <p>Pas de ventes</p>}
                {game.sales.map((sale) => <Sale key={sale.id} {...{ sale }} />)}
            </div>

            <div>
                <h1>Add Sale</h1>
                <AddSale game={game.id} />
            </div>
        </div>
    )
}
export default Game