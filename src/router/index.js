import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Main" */ '@page/Main.vue')
  },
  {
    path: '*',
    redirect: '/error'
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import(/* webpackChunkName: "Error" */ '@page/Error.vue')
  },
  {
    path: '/detail/:name?',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "Error" */ '@page/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
