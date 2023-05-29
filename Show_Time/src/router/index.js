import { createRouter, createWebHistory } from 'vue-router'
import ShowTimeView from '../views/ShowTimeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AddNewView from '../views/AddNewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShowTimeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/add',
      name: 'add',
      component: AddNewView
    }
  ]
})

export default router
