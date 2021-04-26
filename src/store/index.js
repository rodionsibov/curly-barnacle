import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false,
    authUser: {},
    isLoginOpen: false,
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload
    },
    setAuthUser(state, payload) {
      state.authUser = payload
    },
    setLoginModal(state, payload) {
      state.isLoginOpen = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
