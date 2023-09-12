import { createStore } from 'vuex'

export default createStore({
  state: {
    currentUser: null
  },
  getters: {
  },
  mutations: {
    
    setCurrentUser(state, user){
      state.currentUser = user
    }
  },
  actions: {
  },
  modules: {
  }
})
