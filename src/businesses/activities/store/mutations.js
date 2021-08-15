const mutations = {
  setActivities (state, payload) {
    state.activities = payload
  },
  setPagination (state, payload) {
    state.pagination = payload
  }
}

export {
  mutations
}
