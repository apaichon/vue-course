import activitiesService from '../services/activitiesService'
const SET_ACTIVITY = 'setActivities'
const SET_PAGINATION = 'setPagination'

// actions
const actions = {
  getActivities ({commit}, {textSearch}) {
    activitiesService.getActivities(textSearch).then(response => {
      const {data, limit, skip, total} = response.data
      commit(SET_ACTIVITY, data)
      commit(SET_PAGINATION, {limit, skip, total})
    })
  }
}

export {
  actions
}
