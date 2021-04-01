import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/dc-heroes',
    component: () => import('../views/DcHeroes.vue')
  },
  {
    path: '/calendar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Calendar.vue')
  },
  {
    path: '/markdown',
    component: () => import('../views/Markdown.vue')
  },
  {
    path: '/slider',
    component: () => import('../views/Slider.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
