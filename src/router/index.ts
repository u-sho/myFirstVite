import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '@/pages/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
    alias   : '/home',
    path    : '/',
    redirect: '/hello-world'
  },
  {
    component: HelloWorld,
    name     : 'welcome',
    path     : '/hello-world',
    props    : { msg: 'Hello Vue 3 + Vite' }
  }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})