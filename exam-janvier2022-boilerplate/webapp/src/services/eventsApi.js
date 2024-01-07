import axios from "axios"
const baseUrl = "http://localhost:3333/api/events"
const retrieveAll = () => axios.get(baseUrl).then(response => response.data)
const create = (newVolume) => axios.post(baseUrl, newVolume).then(response => response.data)

const remove = (resourceId) => axios.delete(`${baseUrl}/${resourceId}`)


export default {
    retrieveAll,
    create,
    remove
}