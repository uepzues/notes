import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const getAll =()=>{
    return axios.get(baseUrl)
    .then(response => response)
}

const create = newObject =>{
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) =>{
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default{
    getAll,
    create,
    update
}