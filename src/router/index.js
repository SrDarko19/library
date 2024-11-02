import { createRouter, createWebHistory } from 'vue-router'
import student from '../views/backend/student.vue'
import admin from '../views/backend/admin.vue'
import management from '../views/backend/management.vue'

import dashboard from '../views/backend/dashboard.vue'
import login from '../views/frontend/login.vue'
import signup from '../views/frontend/signup.vue'
import portfolio from '../views/frontend/portfolio.vue'



const routes = [
  {
    path: '/',
    name: 'dasboard',
    component: dashboard,
  },
  {
    path: '/student',
    name: 'student',
    component: student,
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
  },
  {
    path: '/management',
    name: 'management',
    component: management,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: portfolio,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
