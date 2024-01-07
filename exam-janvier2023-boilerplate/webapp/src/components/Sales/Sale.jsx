import { Context as DataContext } from 'contexts/dataContext';
import { useContext } from 'react';
const Sale = ({ sale }) => {
    const { deleteOneSale } = useContext(DataContext);

    return (
        <div>
            <p>{sale.buyer}</p>
            <p>{sale.date}</p>
            <p>{sale.quantity}</p>
            <button onClick={() => deleteOneSale(sale.id)}>delete</button>
        </div>
    )
}

export default Sale