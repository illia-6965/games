import { createRouter, createWebHashHistory } from 'vue-router'
import Registration from '@/components/Registration'
import HomePage from '@/components/HomePage'
const routes = [

  {
    path: '/',
    redirect: {path: '/login'},
    
  },
 
  {
    path: '/login',
    name: 'login',
    component: Registration
  },
  {
    path: '/:email',
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
