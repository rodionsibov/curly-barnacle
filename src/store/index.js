import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    setIsLoggedIn(state) {
      state.isLoggedIn = true
    }
  },
  actions: {
  },
  modules: {
  }
})
