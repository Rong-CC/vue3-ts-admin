/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-04-12 15:47:30
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-04-12 16:24:37
 */
const rootName ='menu'
import Main  from '@/view/main.vue'
export default [{
  path: '/menu',
  name: 'menu',
  component:Main,
  meta: {
    title: '左边菜单',
    keepAlive: true,
  },
  children:[
    {
      path: 'menu1',
      name: 'Menu1',
      meta: {
        title: '菜单1',
        keepAlive: false,
      },
      component: () => import('@/view/view1.vue'),
    },
    {
      path: 'menu2',
      name: 'Menu2',
      meta: {
        title: '菜单1',
        keepAlive: false,
      },
      component: () => import('@/view/view2.vue'),
    }
  ]
}]
