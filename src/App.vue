<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>
