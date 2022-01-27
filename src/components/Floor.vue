<!--
 * @Description: 
 * @Author: zhengqi
 * @Date: 2022-01-27 15:49:00
 * @LastEditTime: 2022-01-27 16:16:19
-->
<template>
  <div class="floor">
    <div class="button-group">
      <el-button type="primary">生成随机形状房间</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Floor',
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">

</style>
