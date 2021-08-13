const state = {
  activities: [] 
}

const getters = {
  activitiesTuple: state => {
    return state.activities;
  }
}

export {
  state,
  getters
}