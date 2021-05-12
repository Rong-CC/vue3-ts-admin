<!--
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-04-09 14:11:49
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-04-12 17:41:06
-->
<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <div v-for="(item,i) in list" :key="i">
        <SiderbarItem :list="item"></SiderbarItem>
      </div>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
import SiderbarItem from './siderbar-item.vue'
export default {
  components: {
    SiderbarItem
  },
  setup() {
    const list = reactive([
      {
        title: '菜单一',
        name: 'menu1',
        icon: 'el-icon-location',
        children: [
          {
            title: '子菜单一',
            name: '/menu/menu1',
            icon: 'el-icon-setting',
						children:null
          }
        ]
      },
			{
        title: '菜单二',
        name: '/menu/menu2',
        icon: 'el-icon-goods'
      }
    ])

    const handleOpen = () => {}
    const handleClose = () => {}
    return {
      list,
      handleOpen,
      handleClose
    }
  }
}
</script>   

<style >
.el-menu-vertical-demo {
  width: 275px;
  height: 600px;
	text-align: left;
  border: 1px soild #efefef;
}
</style>