import ActivitesApi from '../../../api/Activites'

const getActivities = async(condition = '') => {
  // window.console.log('Service Condition', condition)
  const result = await ActivitesApi.get(condition)
  return result
}

export default {
  getActivities
}
