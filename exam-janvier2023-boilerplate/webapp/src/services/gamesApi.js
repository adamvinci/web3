import axios from "axios"



const baseUrl = "//localhost:3001/api/games"

const getAll = () => axios.get(baseUrl).then(response => response.data)


const GAMEAPI = {
    getAll,

}

export default GAMEAPI