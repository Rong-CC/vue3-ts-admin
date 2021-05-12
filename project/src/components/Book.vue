<!--
 * @Author: your name
 * @Date: 2021-03-15 16:59:22
 * @LastEditTime: 2021-04-12 16:15:54
 * @LastEditors: rongcheng
 * @Description: In User Settings Edit
 * @FilePath: /project/src/components/book.vue
-->

<template>
  <div
    class="book"
    :style="{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      position: 'relative'
    }"
  >
    <a
      :style="{
        flexGrow: 2,
        display: 'grid',
        gridTemplateColumns: '140px 1fr',
        gridGap: 20,
        border: `1px solid red`,
        color: '#000',
        padding: '1.25em',
        borderRadius: '3px'
      }"
    >
      <div
        :style="{
          width: 140
        }"
      >
        <img
          :src="harryCover"
          :alt="`${book.title} book cover`"
          :style="{ maxHeight: '100%', maxWidth: '100%' }"
        />
      </div>
      <div :style="{ flex: 1 }">
        <div :style="{ display: 'flex', justifyContent: 'space-between' }">
          <div :style="{ flex: 1 }">
            <h2
              :style="{
                fontSize: '1.25em',
                margin: '0',
                color: '#000'
              }"
            >
              {{ book.title }}
            </h2>
          </div>
          <div :style="{ marginLeft: 10 }">
            <div
              :style="{
                marginTop: '0.4em',
                fontStyle: 'italic',
                fontSize: '0.85em'
              }"
            >
              {{ book.author }}
            </div>
            <small>{{ book.publisher }}</small>
          </div>
        </div>
        <small>{{ book.synopsis.substring(0, 500) }}...</small>
      </div>
    </a>
    <!-- <StatusButtons :book="book" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
// @ts-ignore
// import harryCover from "@/assets/harry.png"
// import StatusButtons from "./StatusButtons.vue"
export default defineComponent ({
   name: "book",
  setup() {
    watchEffect(()=>{
        // console.log(props,'prop');
    })
    // const books  = toRefs(props.book)
    // console.log(books,'Book1');
    // return {
    //   books,
    //   // harryCover
    // }
  },
  props: {
    book: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    // StatusButtons
  }
})
</script>