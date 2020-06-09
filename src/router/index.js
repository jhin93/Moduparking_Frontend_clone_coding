import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// todo: About.vue -> terms.vue 로 교체
// 6 import->require로 수정하면 에러 해결
const Terms = () => require(/* webpackChunkName: "terms" */ '../views/About.vue')

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
