import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/licitacoes',
    name: 'bids',
    component: () => import('../pages/bids/Bids.vue')  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
