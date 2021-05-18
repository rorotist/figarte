import '@babel/polyfill'
import 'es6-promise'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueYouTubeEmbed from 'vue-youtube-embed'
import resize from './utils/resize'
import './assets/scss/main.scss'

resize()
Vue.config.productionTip = false

Vue.use(VueYouTubeEmbed, { global: true, componentId: 'youtube-media' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
