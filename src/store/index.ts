import { createStore } from "vuex";
import common from "./modules/common";

const store = createStore({
  state: {
    list: [
      {
        title: "菜单一",
        name: "menu1",
        icon: "el-icon-location",
        children: [
          {
            title: "子菜单一",
            name: "/menu/menu1",
            icon: "el-icon-setting",
            children: null
          }
        ]
      },
      {
        title: "菜单二",
        name: "/menu/menu2",
        icon: "el-icon-goods"
      }
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    common
  }
});
export default store;
