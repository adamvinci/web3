import axios from "axios"
const baseUrl = "//localhost:3333/api/events"

const retrieveAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const create = (newVolume) => {
    return axios.post(baseUrl, newVolume).then(response => response.data)
}

const remove = (resourceId) => {
    return axios.delete(`${baseUrl}/${resourceId}`)
}


export {
    retrieveAll,
    create,
    remove
}