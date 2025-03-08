<template>
  <div class="login-container">
    <form @submit.prevent="login" class="login-form">
      <h2 class="login-title">Welcome Back</h2>
      <p class="login-subtitle">Please enter your credentials to continue</p>
      
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model="username"
          :class="{ 'error-input': usernameError }"
          placeholder="Enter your username"
        />
        <p v-if="usernameError" class="error-message">{{ usernameError }}</p>
      </div>
      
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          :class="{ 'error-input': passwordError }"
          placeholder="Enter your password"
        />
        <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
      </div>
      
      <button type="submit" class="login-btn" :disabled="isLoading">
        <span v-if="isLoading">Logging in...</span>
        <span v-else>Login</span>
      </button>
      <p>Register Here</p>

      <p v-if="loginError" class="error-message">{{ loginError }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const usernameError = ref('');
const passwordError = ref('');
const loginError = ref('');
const isLoading = ref(false);

const login = async () => {
  usernameError.value = '';
  passwordError.value = '';
  loginError.value = '';

  if (!username.value) usernameError.value = 'Username is required';
  if (!password.value) passwordError.value = 'Password is required';

  if (username.value && password.value) {
    isLoading.value = true;
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (username.value === 'admin' && password.value === 'password') {
        alert('Login successful!');
      } else {
        loginError.value = 'Invalid username or password';
      }
    } catch (error) {
      loginError.value = 'An error occurred during login.';
    } finally {
      isLoading.value = false;
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

}

.login-form {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.login-subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #444;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border 0.3s ease-in-out;
}

input:focus {
  border-color: #667eea;
  outline: none;
}

.error-message {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
}

.error-input {
  border: 1px solid red;
}

.login-btn {
  background: rgb(46, 202, 202);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  transition: background 0.3s ease-in-out;
}

.login-btn:hover {
  background: teal;
}

.login-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
