<!--
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-04-09 14:12:06
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-04-12 16:40:56
-->

<template>
  <el-submenu v-if="list.children && list.children.length > 0">
    <template #title>
      <i :class="list.icon"></i>
      <span>导航一</span>
    </template>
    <Siderbar
      v-for="(item, k) in list.children"
      :key="k"
      :list="item"
    ></Siderbar>
  </el-submenu>
  <el-menu-item v-else :index="list.name" @click="gotoRouterEvent(list.name)">
    <template #title>
      <i :class="list.icon"></i>
      {{ list.title }}
    </template>
  </el-menu-item>
</template>

<script lang="ts">
import { toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Siderbar",
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  setup(props: Object) {
    const { lists }: any = toRefs(props);
    const router = useRouter();
    const gotoRouterEvent = (name: any) => {
      router.push(name);
    };
    return {
      lists,
      gotoRouterEvent
    };
  }
};
</script>
<style></style>
