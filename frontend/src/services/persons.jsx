import axios from 'axios'
const baseUrl = '/api/contacts'

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(response => response.data)
}

const create = (newObject) => {
  return axios
    .post(baseUrl, newObject)
    .then(response => response.data)
}

const remove = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then(response => response.data)
}

const update = (id, changedObject) => {
  console.log(hello;
  
  return axios
    .put(`${baseUrl}/${id}`, changedObject)
    .then(response => response.data)
}

export default { getAll, create, remove, update }