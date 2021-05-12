<!--
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-04-09 14:06:20
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-04-12 17:02:23
-->
<template>
  <div class="main">
    <top/>
    <div class="main-content">
      <siderbar></siderbar>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import siderbar from '@/layout/siderbar'
import top from '@/layout/header'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    siderbar,
    top
  }
})
</script>
<style scoped>
.main-content{
  display: flex;
  width: 100vw;
  height: calc(100vh - 64px);
  overflow: hidden;
}
</style>