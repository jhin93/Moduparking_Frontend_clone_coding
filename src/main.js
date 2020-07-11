import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'

import router from './router'

import './style/typhography.css'
import vuetify from './plugins/vuetify.js'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import 'intersection-observer'
import ScrollAnimationPics from './directives/ScrollAnimationPics'
import ScrollAnimationText1 from './directives/ScrollAnimationText1'
import ScrollAnimationText2 from './directives/ScrollAnimationText2'
import ScrollAnimationButton from './directives/ScrollAnimationButton'
import naver from 'vue-naver-maps'
Vue.use(naver, {
  clientID: 'qoh5iamr81',
  useGovAPI: false,
  subModules: ''
})

Vue.directive('ScrollAnimationPics', ScrollAnimationPics)
Vue.directive('ScrollAnimationText1', ScrollAnimationText1)
Vue.directive('ScrollAnimationText2', ScrollAnimationText2)
Vue.directive('ScrollAnimationButton', ScrollAnimationButton)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
