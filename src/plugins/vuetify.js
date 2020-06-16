import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify)
export default new Vuetify({
  icons: {
    iconfont: 'mdi' | 'mdiSvg' | 'md' | 'fa' | 'fa4' | 'faSvg'
  },
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 768,
      md: 1024,
      lg: 1904
    },
    scrollBarWidth: 24
  }
})
