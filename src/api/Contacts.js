import axios from 'axios'

export default {
  add: (data) => {
    let url = 'http://localhost:3000/contacts/add'
    return axios.post(url, data)
  }
}
