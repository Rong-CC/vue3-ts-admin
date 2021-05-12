<!--
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-04-01 10:09:13
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-04-12 15:31:58
-->

<template>
  <div class="mian">
    <AllBook></AllBook>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProvider } from '@/context'
// import HelloWorld from './components/HelloWorld.vue';
import AllBook from '@/view/AllBook.vue'
export default defineComponent({
   setup() {
    useProvider()
    return {
    }
  },
  components: {
    AllBook
  }
})

</script>
<style scoped>
/* .mian{
  width: 100vw;
  height: 100vh;
  background: rebeccapurple;
} */
</style>