import axios from "axios"



const baseUrl = "//localhost:3001/api/sales"

const getAll = () => axios.get(baseUrl).then(response => response.data)
const create = (salePayload) => axios.post(baseUrl, salePayload).then(response => response.data)



const remove = (id) => axios.delete(`${baseUrl}/${id}`)

const SalesAPI = {
    getAll,
    remove,
    create
}

export default SalesAPI