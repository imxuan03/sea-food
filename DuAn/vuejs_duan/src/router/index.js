import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/admin/Layout.vue'
import Dashboard from '@/views/admin/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'login',
      component: () => import('@/views/admin/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

export default router
