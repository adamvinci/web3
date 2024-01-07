import axios from "axios"
const baseUrl = "//localhost:3333/api/children"

const retrieveAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

export {
    retrieveAll
}