// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import Terms from '@/views/Terms.vue'

const routes = [
  {
    path: '/', component: () => import('@/layouts/default/Default.vue'),
    children: [
      { path: '', name: 'Home', component: Home },
      { path: '/register', name: 'Register', component: Register },
      { path: '/terms', name: 'Terms', component: Terms },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
