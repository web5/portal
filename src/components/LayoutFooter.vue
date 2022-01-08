<template>
  <div class="cf-layout-footer">
    <div class="cf-layout-footer-content">
      <div>Copyright © {{startYear}} - {{curYear}} cfweb. All Rights Reserved</div>
      <div>大橙子 版权所有</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const startYear = '2022'

const curYear = computed(() => new Date().getFullYear());
</script>

<style lang="less" scoped>
  .cf-layout-footer {
    display: flex;
    width: 100%;
    height: 90px;
    justify-content: center;
    align-items: center;
    .cf-layout-footer-content {
      // display: flex;
      text-align: center;
      font-size: 12px;
      color: #999;
      > div {
        // height: 20px;
        // list-style: 20px;
      }
    }
  }
</style>

