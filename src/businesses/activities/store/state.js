const state = {
  activities: [],
  pagination: {
    limit: 8,
    skip: 0,
    total: 0
  }
}

const getters = {
  activitiesTuple: state => {
    return state.activities
  }
}

export {
  state,
  getters
}
