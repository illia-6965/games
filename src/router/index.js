import { createRouter, createWebHashHistory } from 'vue-router'
import Registration from '@/components/Registration'
import HomePage from '@/components/HomePage'
const routes = [

  {
    path: '/',
    name: 'about',
    redirect: {path: '/login'},
  },
  {
    path: '/login',
    name: 'login',
    component: Registration
  },
  {
    path: '/home/:email',
    name: 'home',
    component: HomePage
  },

  
  // {
  //   path: '/user/:id',
  //   name: 'user',
  //   component: () => import('../components/User')
  // },
  
 

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
