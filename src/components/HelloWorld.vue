<template>
  <div class="cf-content">
    <Particles id="tsparticles" class="login__particles" :options="particles" />
    <div class="cf-content-main"><h1>{{msg}}</h1></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { particles } from '../config/articles-config'

defineProps<{ msg: string }>()

onMounted(() => {
});
</script>

<style lang="less" scoped>
  .cf-content {
    width: 100%;
    .cf-content-main {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }

</style>
