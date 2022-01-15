a<template>
  <header class="cf-page-header">
    <h1 class="cf-site-title"><a href="/">Cfweb</a></h1>
    <div class="cf-site-menu"></div>
    <div class="cf-site-info">
      <h3><a href="/portal/about">关于</a></h3>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
@import '../styles/variable.less';
  .cf-page-header {
    display: flex;
    width: 100%;
    a {
        color: #fff;
        text-decoration: none;
      }
    .cf-site-title {
      display: flex;
    }
    .cf-site-menu {
      flex: 7;
    }
    .cf-site-info {
      justify-content: right;
      align-items: center;
      h3 {
        height: @header-height;
        line-height: @header-height;
      }
    }
  }
</style>

