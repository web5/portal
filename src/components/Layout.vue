<template>
  <div class="cf-layout">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
@import '../styles/variable.less';
  .cf-layout {
    display: flex;
    flex: auto;
    flex-direction: column;
    min-height: 0;
    width: 100%;
  }
</style>

