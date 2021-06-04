/*
 * @Author: your name
 * @Date: 2021-03-12 16:26:17
 * @LastEditTime: 2021-06-04 16:55:09
 * @LastEditors: rongcheng
 * @Description: In User Settings Edit
 * @FilePath: /project/src/main.ts
 */
import { createApp } from "vue";
import ElementPlus from "element-plus";
import router from "./router";
import store from "./store";
import "@/style/index.css";

import "element-plus/lib/theme-chalk/index.css";

import App from "./App.vue";

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount("#app");
