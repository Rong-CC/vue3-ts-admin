<!--
 * @Author: your name
 * @Date: 2021-03-15 16:59:50
 * @LastEditTime: 2021-04-09 14:02:38
 * @LastEditors: rongcheng
 * @Description: In User Settings Edit
 * @FilePath: /project/src/components/books.vue
-->

<template>
  <section class="wrap">
    <span v-if="loading">正在加载中...</span>
    <section v-else class="content">
      <Book v-for="book in pagedBooks" :key="book.id" :book="book" />
      <el-pagination
        class="pagination"
        v-if="pagedBooks.length"
        :page-size="pageSize"
        :total="books.length"
        :current="bindings.current"
        @current-change="bindings.currentChange"
      />
    </section>
    <slot name="tips"></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import { usePages } from "@/hooks"
// eslint-disable-next-line no-unused-vars
import { Books } from "@/types"
import Book from "./Book.vue"

export default defineComponent({
  name: "books",
  setup(props,context) {
    console.log(context);
    const pageSize = 10
    const { bindings, data: pagedBooks } = usePages(
      () => props.books as Books,
      { pageSize }
    )
    return {
      bindings,
      pagedBooks,
      pageSize
    }
  },
  props: {
    books: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Book
  }
})
</script>

<style>
.content {
  max-width: 700px;
  margin: auto;
}
.pagination {
  margin-top: 12px;
}
</style>