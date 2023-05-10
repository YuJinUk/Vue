import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
        {
            title: '할일 1',
            isCompleted: false,
        },
        {
            title: '할일 2',
            isCompleted: false,
        }
    ]
  },
  getters: {
  },
  mutations: {
    CREATE_TODO(state, todoitem) {
        state.todos.push(todoitem)
    },
  },
  actions: {
    createTodo(context, todoTitle) {
        const todoitem = {
            title : todoTitle,
            isCompleted : false,
        }
        context.commit('CREATE_TODO', todoitem)
    },
  },
  modules: {
  }
})
