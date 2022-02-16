<!--
 * @Description: 
 * @Author: zhengqi
 * @Date: 2022-01-27 15:49:00
 * @LastEditTime: 2022-02-08 14:31:15
-->
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Floor />
    <Next msg="Next vue message vue3~~~~"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Floor from '@/components/Floor.vue'; // @ is an alias to /src
import Next from '@/components/Next.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Floor,
    Next,
  },
});
</script>
