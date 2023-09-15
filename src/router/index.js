// Composables
import { createRouter, createWebHistory } from 'vue-router'

import { useAppStore } from '@/store/app.js'

import Layout from '@/layouts/default/Default.vue'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import Lab from '@/views/Lab.vue'
import Terms from '@/views/Terms.vue'
import Conduct from '@/views/Conduct.vue'
import Harassment from '@/views/Harassment.vue'

const routes = [
  {
    path: '/', component: Layout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: '/register', name: 'Register', component: Register, beforeEnter(to, from) {
        if (useAppStore().applied) return { path: from.path }
      } },
      { path: '/lab', name: 'Lab', component: Lab },
      { path: '/terms', name: 'Terms', component: Terms },
      { path: '/conduct', name: 'Conduct', component: Conduct },
      { path: '/harassment', name: 'Harassment', component: Harassment },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
