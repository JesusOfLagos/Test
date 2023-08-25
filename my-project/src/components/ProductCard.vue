<template>
    <div class="product-card bg-white rounded-3xl">
        <div class="flex flex-row-reverse gap-[300px]">
            <router-link :to="'/product/' + product.id" class="bg-black rounded-2xl mt-8 p-3 right-1 text-white">View Details</router-link>
            <img :src="product.image" :alt="product.title" class="product-image center w-48 h-24 rounded-2xl">
        </div>

      <h3 class="mt-5">{{ product.title }}</h3>
      <p class="mt-5">{{ product.price }} USD</p>

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
  