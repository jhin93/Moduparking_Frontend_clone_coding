import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HowToUse from '../views/HowToUse.vue'
import news from '../views/News.vue'
import article20200113 from '../views/20200113Article'
import article20200604 from '../views/20200604Article'
import QnA from '../views/QnA'
import serviceInfo from '../views/ServiceInfo'
import checkAndTrance from '../views/ShareCheck'
import manageShare from '../views/ShareManage'
import sharePrivate from '../views/SharePrivate'
import shareResidential from '../views/ShareResidential'
import ServiceIntro from '../views/Home'
import CorpIntro from '../views/CorpIntro'
import AffiliateCooperation from '../views/AffiliateCooperation'
// 아랫줄 import->require로 수정해서 에러 해결
const Terms = () => require(/* webpackChunkName: "terms" */ '../views/Terms.vue')

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
    name: 'service-info',
    component: serviceInfo
  },
  {
    path: '/elementor-330',
    name: 'howToUse',
    component: HowToUse
  },
  {
    path: '/elementor-400',
    name: 'share-private',
    component: sharePrivate
  },
  {
    path: '/elementor-276',
    name: 'share-residential',
    component: shareResidential
  },
  {
    path: '/elementor-437',
    name: 'share-manage',
    component: manageShare
  },
  {
    path: '/elementor-567',
    name: 'share-credit',
    component: checkAndTrance
  },
  {
    path: '/elementor-624',
    name: 'news',
    component: news
  },
  {
    path: '/2020/06/04/elementor-645',
    name: 'article-20200604',
    component: article20200604
  },
  {
    path: '/2020/01/13/a-simple-guide-to-design-thinking/',
    name: 'article-20200113',
    component: article20200113
  },
  {
    path: '/300f0-portfolio',
    name: 'QnA',
    component: QnA
  },
  {
    path: '/service-intro',
    name: 'ServiceIntro',
    component: ServiceIntro
  },
  {
    path: '/corp-intro',
    name: 'CorpIntro',
    component: CorpIntro
  },
  {
    path: '/affiliate-cooperation',
    name: 'AffiliateCooperation',
    component: AffiliateCooperation
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
