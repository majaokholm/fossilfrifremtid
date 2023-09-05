import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutEllyLukeDetailed from '../views/detailed/AboutEllyLukeDetailed.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/om-elly-luke',
      name: 'om-elly-luke',
      component: AboutEllyLukeDetailed
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
        el: to.hash,
        behavior: 'smooth',
    };
  },
})

export default router
