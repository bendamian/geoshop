import { createStore } from 'vuex'

const store = createStore({
  state: {
    isLoading: false,
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value
    },
  },
})

export default store
