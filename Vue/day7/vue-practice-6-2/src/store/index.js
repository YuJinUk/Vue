import Vue from 'vue'
import Vuex from 'vuex'
import todos from '../store/module/hooni.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todos : todos,
  }
})
