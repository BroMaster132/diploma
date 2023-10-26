import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import MineView from '../views/MineView.vue'
import ChannelsView from '@/views/ChannelsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/mine',
      name: 'mine',
      component: MineView
    },
    {
      path: '/',
      name: 'channels',
      component: ChannelsView
    },
  ]
})

export default router
