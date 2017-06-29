import axios from 'axios'

export default {
  add: (data) => {
    let url = 'http://localhost:3000/contacts/add'
    return axios.post(url, data)
  },
  get: (condition) => {
    let url = 'http://localhost:3000/contacts/getMany'
    return axios.post(url, condition)
  },
  update: (condition) => {
    let url = 'http://localhost:3000/contacts/update'
    return axios.put(url, condition)
  },
  remove: (condition) => {
    console.log('remove', condition)
    let url = 'http://localhost:3000/contacts/delete'
    return axios.delete(url, {'data': condition})
  }
}

