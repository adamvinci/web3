import { useQuery, useMutation } from '@apollo/client'
import { ALL_AUTHOR, ADD_AUTHOR } from '../../querie.js'
import OneAuthor from './OneAuthor.jsx'
const Author = ({ setError }) => {
    const result = useQuery(ALL_AUTHOR)
    const [updateBirthYear] = useMutation(ADD_AUTHOR, {
        onError: (error) => {
            const messages = error.graphQLErrors.map(e => e.message).join('\n')
            setError(messages)
        }
    })
    const handleSubmit = (name, yearString) => {
        const year = parseInt(yearString, 10);
        updateBirthYear({ variables: { name, year } })
    }
    if (result.loading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            {result.data.allAuthors.map((author) => <OneAuthor key={author.id} handleSubmit={handleSubmit} author={author} />)}
            <p > <strong>There is {result.data.authorCount} authors </strong></p>
        </div>
    )
}

export default Author