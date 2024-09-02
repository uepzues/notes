import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
  return axios
    .get(baseUrl)
    .then((response) => response)
    .catch((e) => console.log(e));
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data).catch((e) => console.log(e));
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data).catch((e) => console.log(e));
};

const delNote = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then((response) => {console.log(response.data)
        console.log(`Deleted note with id ${id}`);}).catch((e) => console.log(e))
}

export default {
  getAll,
  create,
  update,
  delNote,
};
