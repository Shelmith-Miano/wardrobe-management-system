<script setup>
import Sidebar from './components/sidebar.vue';
</script>

<template>
  <div class="app-container">
    <Sidebar /> 
    <div class="main-content">
      <router-view /> 
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  height: 100vh; 
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  margin-left: 250px; 
}
</style>
