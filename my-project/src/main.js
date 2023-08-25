


import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/home.vue'
import Contact from './components/contact.vue'
import ProductDetails from './components/ProductDetails.vue';
import HomeProducts from './components/HomeProducts.vue';
import About from './components/about.vue'
import store from './store'
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  {
    path: '/products',
    name: 'Products',
    component: HomeProducts,
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(store)
app.mount('#app');

