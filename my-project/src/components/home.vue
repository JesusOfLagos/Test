<template>
  <div class="bg-gray-100">
    <!-- Header Section -->
    <header class="bg-indigo-500 py-6">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-white">The Company</h1>
        <p class="text-lg text-white mt-2">
          Creating an avenue for entrepreneurs and market gurus to thrive.
        </p>
      </div>
    </header>

    <!-- Main Content Section -->
    <div class="container mx-auto px-4 py-8">
      <!-- Vision Section -->
      <section class="my-8">
        <div class="flex flex-wrap items-center">
          <div class="w-full pl-5 lg:w-1/2">
            <h2 class="text-2xl font-bold">The Patron</h2>
            <p class="text-lg mt-4">
              We envision a dynamic platform that empowers entrepreneurs and market gurus to
              make data-driven decisions and achieve their goals in a competitive market.
            </p>
          </div>
          <div class="w-full lg:w-1/2 mt-6 lg:mt-0">
            <img
              :src="imageUrl"  
              alt="Vision Illustration"
              class="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="my-8">
        <div class="flex flex-wrap items-center gap-3">
          <div class="w-full lg:w-1/2 lg:order-2">
            <h2 class="text-2xl font-bold">The Users</h2>
            <p class="text-lg mt-4">
              Our mission is to provide entrepreneurs and market experts with an advanced platform
              equipped with real-time data and intelligent insights for making informed decisions.
            </p>
          </div>
          <div class="w-full lg:w-1/2 mt-6 lg:mt-0 lg:order-1">
            <img
              :src="imageUrl2" 
              alt="Mission Illustration"
              class="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>

    <!-- Footer Section -->
    <footer class="bg-gray-900 py-6">
      <div class="container mx-auto px-4 text-white text-center">
        &copy; 2023 Jesus. All rights reserved.
      </div>
    </footer>
  </div>
</template>



<script>
export default {
  data() {
    return {
      imageUrl: 'images/vision.jpg', 
      imageUrl2: 'images/people.jpg'
    };
  },
};
</script>
