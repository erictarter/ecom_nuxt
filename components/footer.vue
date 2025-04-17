<!-- filepath: c:\personal_proj\ecom\nuxt_ecom\components\Footer.vue -->
<template>
  <footer class="bg-primary text-dark">
    <div class="container mx-auto p-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Links -->
        <nav class="flex space-x-6 mb-4 md:mb-0">
          <NuxtLink to="/" class="hover:text-highlight">Home</NuxtLink>
          <NuxtLink to="/products" class="hover:text-highlight"
            >Products</NuxtLink
          >
          <NuxtLink to="/about" class="hover:text-highlight">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-highlight"
            >Contact</NuxtLink
          >
        </nav>

        <!-- Social Media -->
        <div class="flex space-x-4">
          <a href="#" class="hover:text-highlight"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="#" class="hover:text-highlight"
            ><i class="fab fa-instagram"></i
          ></a>
          <a href="#" class="hover:text-highlight"
            ><i class="fab fa-twitter"></i
          ></a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center mt-4 text-sm">
        &copy; 2025 Outdoor Luxe. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup></script>
