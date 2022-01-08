<template>
  <div class="cf-layout-header">
    <slot name="header"></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
@import '../styles/variable.less';
  .cf-layout-header {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    z-index: 99;
    height: @header-height;
    padding: 0 20px;
    box-shadow: 0 0 4px 0 #2b303b;
    background-color: #2b303b;
  }
</style>

