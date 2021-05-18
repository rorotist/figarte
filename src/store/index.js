import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    device: null
  },
  mutations: {},
  actions: {
    checkDevice ({ state }, device) {
      state.device = device
    }
  },
  getters: {
    isMobile: state => state.device === 'mobile',
    isTablet: state => state.device === 'tablet',
    isDesktop: state => state.device === 'desktop'
  }
})
