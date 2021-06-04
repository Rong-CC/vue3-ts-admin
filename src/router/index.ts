/*
 * @Description:
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-06-04 16:27:08
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-06-04 17:47:06
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import Main  from '@/view/main.vue'
// import MenuManagement from "./menu/index";
import leftMenu from "./menu/index";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("@/view/main.vue")
  },
  {
    path: "/book",
    name: "book",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("@/view/index.vue")
  },
  ...leftMenu
];
// console.log(routes);

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
