import { createStore } from 'vuex'

export default createStore({
  state: {
    mockUsers: [],
    currentUser: null
  },
  getters: {
  },
  mutations: {
    addUser(state, user){
      state.mockUsers.push(user)
    },
    setCurrentUser(state, user){
      state.currentUser = user
    }
  },
  actions: {
  },
  modules: {
  }
})
