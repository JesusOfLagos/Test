


import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/home.vue'
import Contact from './components/contact.vue'
import About from './components/about.vue'
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');

