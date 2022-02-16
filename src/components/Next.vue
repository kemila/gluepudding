<!--
 * @Description: 
 * @Author: zhengqi
 * @Date: 2022-01-27 15:49:00
 * @LastEditTime: 2022-02-08 14:30:30
-->
<template>
  <div class="vue-next">
    <div>{{ readersNumber }} {{ book.title }}</div>
    <div>{{ msg }} </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'

export default { 
  props: {
    msg: String,
  },
  setup() {
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })

    // 暴露给模板
    return {
      readersNumber,
      book
    }
  }
}
</script>

<style scoped lang="scss">

</style>
