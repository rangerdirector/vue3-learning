import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/layout/Index.vue'

const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:'/',
      component: Layout,
      redirect: '/dashboard',
      children:[
        {
          path:'dashboard',
          component: ()=>import('@/views/dashboard/Index.vue')
        }
      ]
    }
  ]
})

export default router;
