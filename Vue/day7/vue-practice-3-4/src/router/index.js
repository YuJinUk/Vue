import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPrac from '../views/FirstPrac.vue'
import SecondPrac from '../views/SecondPrac.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'First',
    component: FirstPrac
  },
  {
    path: '/Second',
    name: 'Second',
    component: SecondPrac
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
