<template>
    <div class="sidebar">
      <h2 class="logo">Miano's Closet</h2>
      <ul class="nav-links">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Users</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh; /* Full height */
    width: 250px; /* Sidebar width */
    background: teal; /* Dark Blue */
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
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
    display: block;
    padding: 10px;
    border-radius: 5px;
    transition: background 0.3s;
  }
  
  .nav-links a:hover {
    background: rgb(59, 151, 151); /* Lighter Blue */
  }
  </style>
  