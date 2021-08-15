import { actions } from './actions'
import { mutations } from './mutations'
import { getters, state } from './state'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
