import axios from 'axios'
import config from '../../config'
const url = `${config.apiHost}/${config.apiRoot}/activities`

export default {
  add: (data) => {
    return axios.post(url, data)
  },
  get: (condition = '') => {
    return axios.get(url + condition)
  },
  update: (condition) => {
    return axios.put(url, condition)
  },
  remove: (condition) => {
    return axios.post(url, {'data': condition})
  }
}
