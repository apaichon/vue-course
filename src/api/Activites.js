import axios from 'axios'
import config from '../../config'
const url = `${config.apiHost}/${config.apiRoot}/activities`

export default {
  add: (data) => {
    return axios.post(url, data)
  },
  get: (condition = '') => {
    // window.console.log('condition', url + condition)
    // window.console.log(encodeURI(url + condition))
    return axios.get(encodeURI(url + condition))
  },
  update: (condition) => {
    return axios.put(url, condition)
  },
  remove: (condition) => {
    return axios.post(url, {'data': condition})
  }
}
