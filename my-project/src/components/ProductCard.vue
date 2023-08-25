<template>
    <div class="product-card">
      <img :src="product.image" :alt="product.title" class="product-image w-48 h-48">
      <h3>{{ product.title }}</h3>
      <p>{{ product.price }} USD</p>
      <router-link :to="'/product/' + product.id">View Details</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: ['product'],
  };
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    text-align: center;
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
  }
  </style>
  