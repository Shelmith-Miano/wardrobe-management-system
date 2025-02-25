<template>
  <div :class="['sidebar', { 'sidebar-closed': isClosed }]">
    <button class="toggle-btn" @click="toggleSidebar">☰</button>
    <h2 v-if="!isClosed" class="logo">Miano's Closet</h2>
    <ul class="nav-links">
      <li>
        <router-link to="/dashboard">
          <i class="fa fa-fw fa-dashboard"></i>
          <span class="nav-text" v-if="!isClosed">Dashboard</span>
          <span class="tooltip" v-if="isClosed">Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/wardrobe">
          <i class="fa fa-fw fa-cube"></i>
          <span class="nav-text" v-if="!isClosed">My Wardrobe</span>
          <span class="tooltip" v-if="isClosed">My Wardrobe</span>
        </router-link>
      </li>
      <li>
        <router-link to="/categories">
          <i class="fa fa-fw fa-folder"></i>
          <span class="nav-text" v-if="!isClosed">Categories</span>
          <span class="tooltip" v-if="isClosed">Categories</span>
        </router-link>
      </li>
      <li>
        <router-link to="/users">
          <i class="fa fa-fw fa-users"></i>
          <span class="nav-text" v-if="!isClosed">Users</span>
          <span class="tooltip" v-if="isClosed">Users</span>
        </router-link>
      </li>
      <li>
        <router-link to="/settings">
          <i class="fa fa-fw fa-cog"></i>
          <span class="nav-text" v-if="!isClosed">Settings</span>
          <span class="tooltip" v-if="isClosed">Settings</span>
        </router-link>
      </li>
      <li>
        <router-link to="/logout">
          <i class="fa fa-fw fa-user"></i>
          <span class="nav-text" v-if="!isClosed">Logout</span>
          <span class="tooltip" v-if="isClosed">Logout</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isClosed = ref(false);

const toggleSidebar = () => {
  isClosed.value = !isClosed.value;
};
</script>


  <style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh; 
  width: 250px; 
  background: teal; 
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: width 0.3s;
}

.sidebar-closed {
  width: 80px; 
}

.toggle-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}

.nav-links {
  list-style: none;
  padding: 0;
}

.nav-links li {
  margin: 15px 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s;
  position: relative;
}

.nav-links a:hover {
  background: rgb(59, 151, 151); 
}

.icon {
  font-size: 20px;
  margin-right: 10px;
}

.nav-text {
  white-space: nowrap;
}

.sidebar-closed .nav-text {
  display: none;
}

.sidebar-closed .nav-links a:hover .tooltip {
  display: block;
  position: absolute;
  left: 80px;
  background: rgb(59, 151, 151); 
  padding: 10px;
  border-radius: 5px;
  white-space: nowrap;
}

.tooltip {
  display: none;
  color: white;
  background-color: teal;
  padding: 10px;
  border-radius: 5px;
  white-space: nowrap;
}
</style>

  