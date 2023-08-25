<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <router-link to="/" class="text-white text-xl font-bold">Test</router-link>
  
        <!-- Nav Links -->
        <ul class="flex space-x-4">
          <li>
            <router-link to="/products" class="text-white hover:text-gray-300">Products</router-link>
          </li>
          <li>
            <router-link to="/about" class="text-white hover:text-gray-300">About</router-link>
          </li>
          <li>
            <router-link to="/contact" class="text-white hover:text-gray-300">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    // Add any logic or data properties if needed
  };
  </script>
  
 