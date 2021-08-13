import ActivitesApi from '../../../api/Activites'

const getActivities = async(condition = '') => {
  const result = await ActivitesApi.get(condition)
  return result
}

export default {
  getActivities
}
