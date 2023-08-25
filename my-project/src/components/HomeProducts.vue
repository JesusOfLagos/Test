<template>
    <div class="home-products">
      <input v-model="search" placeholder="Search by name..." class="rounded-full border-blue-900 w-[500px] p-2 mt-5 mb-8">
      <div class="product-list bg-black">
      <!-- Check if there are products to display -->
      <div v-if="filteredProducts.length > 0">
        <product-card v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>
      <!-- Display a message when no products are available -->
      <div class="text-white text-4xl w-[400px] h-48 rounded-3xl" v-else>
        No products to show at the moment.
      </div>
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from './ProductCard.vue';
  
  export default {
    components: {
      ProductCard,
    },
    data() {
      return {
        search: '',
      };
    },
    computed: {
      products() {
        // You would get the product data from the Vuex store using a getter
        return this.$store.getters.getProducts;
      },
      filteredProducts() {
        return this.products.filter(product => product.title.toLowerCase().includes(this.search.toLowerCase()));
      },
    },
    created() {
      this.$store.dispatch('fetchProducts');
    },
  };
  </script>
  
  <style scoped>
  .home-products {
    text-align: center;
  }
  
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  </style>
  