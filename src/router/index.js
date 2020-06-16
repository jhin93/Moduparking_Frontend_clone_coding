import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HowToUse from '../views/howToUse.vue'
import news from '../views/news.vue'
import article20200113 from '../views/20200113-article'
import article20200604 from '../views/20200604-article'
import QnA from '../views/QnA'
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
  },
  {
    path: '/elementor-345',
    name: 'howToUse',
    component: HowToUse
  },
  {
    path: '/elementor-624',
    name: 'news',
    component: news
  },
  {
    path: '/2020/06/04/elementor-645',
    name: 'news',
    component: article20200604
  },
  {
    path: '/2020/01/13/a-simple-guide-to-design-thinking/',
    name: 'news',
    component: article20200113
  },
  {
    path: '/300f0-portfolio',
    name: 'QnA',
    component: QnA
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
