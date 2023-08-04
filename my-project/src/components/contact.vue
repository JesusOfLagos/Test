<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Form -->
        <div class="bg-white shadow-md p-6 rounded-md">
          <h2 class="text-xl font-semibold mb-4">Get in Touch</h2>
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="email" class="block text-gray-700">Email</label>
              <input type="email" id="email" v-model="email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-700">Message</label>
              <textarea id="message" v-model="message" rows="4" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></textarea>
            </div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
          </form>
        </div>
  
        <!-- Contact Info -->
        <div class="bg-white shadow-md p-6 rounded-md">
          <h2 class="text-xl font-semibold mb-4">Contact Information</h2>
          <p class="text-gray-700">Email: contact@example.com</p>
          <p class="text-gray-700">Phone: +234 123-456-7890</p>
          <p class="text-gray-700">Address: 123 Abuja Street, Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        console.log('Email:', this.email);
        console.log('Message:', this.message);
      },
    },
  };
  </script>
  
