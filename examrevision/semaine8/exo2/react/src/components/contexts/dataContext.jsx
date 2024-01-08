import React, { useEffect, useState, } from 'react';
import { useQuery, useMutation } from '@apollo/client'
import { ALL_AUTHOR, ALL_BOOK, ADD_BOOK, ADD_AUTHOR } from '../../querie.js'

const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
    const authors = useQuery(ALL_AUTHOR)
    const books = useQuery(ALL_BOOK)
    const [error, setError] = useState('')

    const [updateBirthYear] = useMutation(ADD_AUTHOR, {
        onError: (error) => {
            const messages = error.graphQLErrors.map(e => e.message).join('\n')
            setError(messages)
        }
    })
    const [addBook] = useMutation(ADD_BOOK, {
        refetchQueries: [{ query: ALL_BOOK }, { query: ALL_AUTHOR }], onError: (error) => {
            console.log(error)
            const messages = error.graphQLErrors.map(e => e.message).join('\n')
            setError(messages)
        }
    })
    const changeError = () => { setTimeout(() => setError(''), 5000) }
    useEffect(changeError, [error])
    const exposedValue = {
        authors,
        updateBirthYear,
        addBook,
        books,
        error
    };

    return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };
