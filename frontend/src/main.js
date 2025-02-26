import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Wardrobe from './components/wardrobe.vue';
import Logout from './components/logout.vue';
import Dashboard from './components/dashboard.vue';

import './assets/main.css';
import 'font-awesome/css/font-awesome.min.css';

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: Dashboard },
  { path: '/wardrobe', component: Wardrobe },  
  { path: '/logout', component: Logout }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


createApp(App).use(router).mount('#app');
