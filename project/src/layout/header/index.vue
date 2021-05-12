<!--
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-04-09 14:20:58
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-04-13 11:07:08
-->
<template>
  <div class="hearder-box">
    <div class="logo-image"></div>
    <div class="hearder-content">
        <template v-for="(menu,i) in $store.state.common.totalMenuList" :key="i">
          <div class="menu-item-btn" :class="{'menu-item-btn-active': menu.name===active}" @click="handleMenuClick(menu.name)">
            {{menu.name}}
          </div>
        </template>
    </div>
     <div class="right-btn">
      <el-dropdown>
        <span class="el-dropdown-link">
          <span>{{ nickname }}，欢迎你</span
          ><i class="el-icon-switch-button"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item divided @click="logoutHandle"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
  setup(){
    const active = ref('main')
    const nickname = ref('admin')
    const handleMenuClick = (name)=>{
      active.value = name
    }
    return {
      active,
      nickname,
      handleMenuClick
    }
  }
})
</script>

<style scoped>
.hearder-box{
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  height: 64px;
  border-bottom: 1px solid #efefef;

}
.logo-image{
  width: 275px;
}
.right-btn{
  width: 200px;
}
.hearder-content{
  flex: 1;
  font-size: 14px;
  display: flex;
}
.menu-item-btn{
  width: 100px;
  height: 100%;
  font-weight: bold;
  line-height: 64px;
  cursor: pointer;
}
.menu-item-btn-active{
  color: #1887E8;
  border-bottom: 2px solid #1887E8;
}
</style>