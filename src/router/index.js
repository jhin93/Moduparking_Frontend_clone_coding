import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import serviceinfo from '../views/serviceinfo.vue'

// todo: About.vue -> terms.vue 로 교체
const Terms = About

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/terms',
    name: 'terms',
    component: Terms
  },
  {
    path: '/elementor-345',
    name: 'serviceinfo',
    component: serviceinfo
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
