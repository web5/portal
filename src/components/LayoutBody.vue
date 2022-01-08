<template>
  <div class="cf-layout-body">
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
@import '../styles/variable.less';
  .cf-layout-body {
    display: flex;
    width: 100%;
    min-height: 760px;
    margin-top: @header-height;
  }
</style>

