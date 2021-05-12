

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Main  from '@/view/main.vue'
import menuManagement from './menu/index'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    meta: {
      title: '首页',
      keepAlive: true,
    },
    component: () => import('@/view/main.vue'),
  },
  {
    path: '/book',
    name: 'book',
    meta: {
      title: '首页',
      keepAlive: true,
    },
    component: () => import('@/view/index.vue'),
  },
  ...menuManagement
]
console.log(routes);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
