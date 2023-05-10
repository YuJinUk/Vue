import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    Default(state) {
        return state.counter
    },
    counterDouble(state, getters) {
        return getters.Default * 2
    },
  },
  mutations: {
    INCREASE(state, counter) {
        state.counter = counter
    },
    DECREASE(state, counter) {
        state.counter = counter
    },
  },
  actions: {
    increase(context, counter) {
        context.commit('INCREASE', counter)
    },
    decrease(context, counter) {
        context.commit('DECREASE', counter)
    }
  },
  modules: {
  }
})
