<template>
  <footer class="cf-layout-footer">
    <div class="cf-layout-footer-content">
      <div>Copyright © {{startYear}} - {{curYear}} cfweb. All Rights Reserved</div>
      <div>Cfweb 版权所有</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const startYear = '2022'

const curYear = computed(() => new Date().getFullYear());
</script>

<style lang="less" scoped>
@import '../styles/variable.less';

  .cf-layout-footer {
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: @footer-height;
    justify-content: center;
    align-items: center;
    .cf-layout-footer-content {
      // display: flex;
      text-align: center;
      font-size: 12px;
      color: #999;
    }
  }
</style>

