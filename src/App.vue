<template>
  <Layout>
    <LayoutHeader>
      <PageHeader></PageHeader>
    </LayoutHeader>
    <LayoutBody>
      <HelloWorld msg="Hello Cfweb!" ></HelloWorld>
    </LayoutBody>
    <LayoutFooter></LayoutFooter>
  </Layout>
</template>

<script setup lang="ts">
import Layout from './components/Layout.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutBody from './components/LayoutBody.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import HelloWorld from './components/HelloWorld.vue';
import PageHeader from './components/PageHeader.vue';
</script>

<style>
.cf-site-title {
  display: flex;
  align-items: center;
  color: #fff;
}
</style>
