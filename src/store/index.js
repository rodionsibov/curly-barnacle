import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false,
    authUser: {},
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload
    },
    setAuthUser(state, payload) {
      state.authUser = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
