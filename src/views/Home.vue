<!--
 * @Description: 
 * @Author: zhengqi
 * @Date: 2022-01-27 15:49:00
 * @LastEditTime: 2022-01-27 16:17:30
-->
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Floor />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Floor from '@/components/Floor.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Floor,
  },
});
</script>
