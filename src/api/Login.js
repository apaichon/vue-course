import axios from 'axios'

export default {
  login: (user) => {
    let url = 'http://localhost:3000/login'
    return axios.post(url, user)
  }
}
