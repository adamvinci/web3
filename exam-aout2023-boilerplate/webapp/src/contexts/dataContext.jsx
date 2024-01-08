import React, { useEffect, useState } from 'react';
import JokeAPI from 'services/jokeApi';
import ScoreAPI from 'services/scoreApi';
const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
    const [jokes, setJokes] = useState([])
    const [scores, setScores] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        JokeAPI.getAll().then((response) => setJokes(response)).catch(error => console.warn(error));
        ScoreAPI.getAll().then((response) => setScores(response)).catch(error => console.warn(error));

    }, [])

    useEffect(() => {
        const copyJoke = [...jokes]
        copyJoke.forEach((joke) => {
            const scoresJoke = scores.filter((score) => score.joke === joke.id)
            joke.scoreCount = scoresJoke.length
            joke.averageScore = Math.round((scoresJoke.reduce((acc, score) => acc + score.score, 0) / scoresJoke.length))
        })
        setJokes(copyJoke)
    }, [scores])

    const getJokeWithScores = (id) => {
        const joke = jokes.find((joke) => joke.id === id);
        console.log(joke)
        const scoresJoke = scores.filter((score) => score.joke === joke.id).sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            } else {
                // If scores are equal, sort by more recent dates
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
        });

        const data = {
            ...joke,
            scores: scoresJoke,
        }
        return data;
    }
    const addScore = (score) => ScoreAPI.create(score).then((response) => setScores([...scores, response])).catch((error) => {
        console.log(error)
        const errorMessage = error.response ? error.response.data.errorMessages.join(', ') : 'An error occurred';
        setError(errorMessage);
    })
    const deleteScore = (scoreId) => ScoreAPI.remove(scoreId).then(() => setScores(scores.filter((score) => score.id !== scoreId)))
    const resetError = () => { setTimeout(() => setError(''), 5000) };
    useEffect(resetError, [error])
    const exposedValue = {
        jokes,
        scores,
        getJokeWithScores,
        error,
        addScore,
        deleteScore
    };

    return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };
