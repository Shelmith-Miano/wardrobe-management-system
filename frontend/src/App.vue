<script setup>
import Sidebar from './components/sidebar.vue';
</script>

<template>
  <div class="app-container">
    <Sidebar /> <!-- Sidebar stays fixed on all pages -->
    <div class="main-content">
      <router-view /> <!-- Only this part updates when switching pages -->
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  height: 100vh; /* Full height of viewport */
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  margin-left: 250px; /* Makes space for sidebar */
}
</style>
