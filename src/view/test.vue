<!--
 * @Description:
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-06-04 17:13:05
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-06-04 17:41:02
-->
<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Vuex",
  setup() {
    const count = ref<number>(0);
    const increment = () => {
      count.value += 1;
    };
    return { count, increment };
  }
});
</script>
