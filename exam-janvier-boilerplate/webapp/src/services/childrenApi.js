
import axios from "axios"
const baseUrl = "http://localhost:3333/api/children"
const retrieveAll = () => axios.get(baseUrl).then(response => response.data)


export default {
    retrieveAll
}