<template>
    <div class="login-container">
      <form @submit.prevent="login">
        <h2 class="login-title">Login</h2>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="login-btn">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const username = ref('');
  const password = ref('');
  
  const login = () => {
    
    console.log('Username:', username.value);
    console.log('Password:', password.value);
    
    if (username.value === 'admin' && password.value === 'password') {
      alert('Login successful!');
     
    } else {
      alert('Invalid username or password');
    }
  };
  </script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5; 
}

form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;

}

</style>