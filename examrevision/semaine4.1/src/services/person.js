import axios from "axios"



const baseUrl = "http://localhost:3001/api/phone"

const getAll = () => {
    const response = axios.get(`${baseUrl}`).then(response => response.data)
    return response
}

const addOne = (newPersonne) => {
    const response = axios.post(`${baseUrl}`, newPersonne).then(response => response.data);
    return response
}
const deleteOne = (id) => axios.delete(`${baseUrl}/${id}`)
const updateOne = (id, updatedNumber) => axios.put(`${baseUrl}/${id}`, updatedNumber).then(response => response.data);
export default {
    getAll,
    addOne,
    deleteOne,
    updateOne
}
