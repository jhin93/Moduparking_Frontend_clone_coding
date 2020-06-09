import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 5번줄 import->require로 수정해서 에러 해결
const Terms = () => require(/* webpackChunkName: "terms" */ '../views/terms.vue')

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
  }
]

const router = new VueRouter({
  routes
})

export default router
