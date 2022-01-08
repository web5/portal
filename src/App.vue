<template>
  <LayoutHeader>
    <template v-slot:header>
      <h1 class="cf-site-title">大橙子的网站</h1>
    </template>
  </LayoutHeader>
  <LayoutBody>
    <template v-slot:content>
      <HelloWorld msg="Hello World!" ></HelloWorld>
    </template>
  </LayoutBody>
  <LayoutFooter></LayoutFooter>
</template>

<script setup lang="ts">
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutBody from './components/LayoutBody.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import HelloWorld from './components/HelloWorld.vue';
</script>

<style>
.cf-site-title {
  display: flex;
  align-items: center;
  color: #fff;
}
</style>
