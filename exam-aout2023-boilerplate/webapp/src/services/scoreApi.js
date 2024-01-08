import axios from "axios"



const baseUrl = "//localhost:3001/api/scores"

const getAll = () => axios.get(baseUrl).then(response => response.data)

const create = (newScore) => axios.post(baseUrl, newScore).then(response => response.data)

const remove = (scoreId) => axios.delete(`${baseUrl}/${scoreId}`)


const ScoreAPI = {
    getAll,
    create,
    remove
}

export default ScoreAPI