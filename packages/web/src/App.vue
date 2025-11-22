<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppBar from './components/app-bar.vue';
</script>

<template>
  <AppBar class="z-100 sticky top-0 backdrop-blur-lg" />
  <main>
    <RouterView id="main" class="z-0" />
  </main>
</template>

<style scoped></style>
