import React, { useEffect, useState } from 'react';
import GamesAPI from '../services/gamesApi'
import SalesAPI from '../services/salesApi'
const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
    const [games, setGames] = useState([]);
    const [sales, setSales] = useState([]);
    const [error, setError] = useState('')
    const getGameWithSales = (id) => {
        const game = games.find((game) => game.id === id)
        const sale = sales.filter((sale) => sale.game === id).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        const data = {
            ...game,
            sales: sale
        }
        return data;
    }
    const deleteOneSale = (id) => {
        SalesAPI.remove(id).then(() => setSales(sales.filter((sale) => sale.id !== id))).catch((error) => setError(error))
    }
    const addSale = (sale) => {
        SalesAPI.create(sale).then((response) => {
            const game = games.find((game) => game.id === sale.game);
            game.stock -= sale.quantity
            setSales([...sales, response])
        }).catch((error) => {
            console.log(error)
            const errorMessage = error.response ? error.response.data.errorMessages.join(', ') : 'An error occurred';
            setError(errorMessage);
        })
    }
    useEffect(() => {
        GamesAPI.getAll().then((response) => setGames(response)).catch((error) => console.warn(error))
        SalesAPI.getAll().then((response) => setSales(response)).catch((error) => console.warn(error))
    }, [])
    const resetError = () => { setTimeout(() => setError(''), 5000) }
    useEffect(resetError, [error])
    const exposedValue = {
        games,
        sales,
        getGameWithSales,
        deleteOneSale,
        addSale,
        error
    };

    return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };
