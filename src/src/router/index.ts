import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutEllyLukeDetailed from '../views/detailed/AboutEllyLukeDetailed.vue'
import BorgerDetailed from '../views/detailed/BorgerDetailed.vue'
import VirksomhedDetailed from '../views/detailed/VirksomhedDetailed.vue'
import OrganisationDetailed from '../views/detailed/OrganisationDetailed.vue'
import BackgroundDetailed from '../views/detailed/BackgroundDetailed.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/fossiler-i-nordsoeen',
      name: 'fossiler-i-nordsoeen',
      component: AboutEllyLukeDetailed
    },
    {
      path: '/aktiviteter-borger',
      name: 'aktiviteter-borger',
      component: BorgerDetailed
    },
    {
      path: '/aktiviteter-virksomhed',
      name: 'aktiviteter-virksomhed',
      component: VirksomhedDetailed
    },
    {
      path: '/aktiviteter-organisation',
      name: 'aktiviteter-organisation',
      component: OrganisationDetailed
    },
    {
      path: '/background',
      name: 'background',
      component: BackgroundDetailed
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
