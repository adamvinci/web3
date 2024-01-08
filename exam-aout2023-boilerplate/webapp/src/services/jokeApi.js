import axios from "axios"



const baseUrl = "//localhost:3001/api/jokes"

const getAll = () => axios.get(baseUrl).then(response => response.data)

const create = (newJoke) => axios.post(baseUrl, newJoke).then(response => response.data)

const remove = (jokeId) => axios.delete(`${baseUrl}/${jokeId}`)


const JokeAPI = {
    getAll,
    create,
    remove,
}

export default JokeAPI