/*
 * @Description:
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-04-12 15:47:30
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-06-04 17:41:52
 */
import { RouteRecordRaw } from "vue-router";
import Main from "@/view/main.vue";

const rootName = "menu";

const leftMenu: Array<RouteRecordRaw> = [
  {
    path: "/menu",
    name: "menu",
    component: Main,
    meta: {
      title: "左边菜单",
      keepAlive: true
    },
    children: [
      {
        path: "menu1",
        name: "Menu1",
        meta: {
          title: "菜单1",
          keepAlive: false,
          name: rootName
        },
        component: () => import("@/view/view1.vue")
      },
      {
        path: "menu2",
        name: "Menu2",
        meta: {
          title: "菜单1",
          keepAlive: false
        },
        component: () => import("@/view/view2.vue")
      }
    ]
  }
];

export default leftMenu;
