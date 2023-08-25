<template>
    <div class="product-details">
      <img :src="product.image" :alt="product.title" class="product-image">
      <h2 class="text-black">{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <p>Price: {{ product.price }} USD</p>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      product() {
        // You would get the product data from the Vuex store using a getter
        return this.$store.getters.getProductById(this.$route.params.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .product-details {
    text-align: center;
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
  }
  </style>
  