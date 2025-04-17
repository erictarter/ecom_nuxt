<!-- filepath: c:\personal_proj\ecom\nuxt_ecom\components\Header.vue -->
<template>
  <header class="bg-background text-primary shadow-md">
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <h1 class="text-2xl font-serif font-bold">Outdoor Luxe</h1>

      <!-- Navigation -->
      <nav class="hidden md:flex space-x-6">
        <NuxtLink to="/" class="hover:text-accent">Home</NuxtLink>
        <NuxtLink to="/products" class="hover:text-accent">Products</NuxtLink>
        <NuxtLink to="/about" class="hover:text-accent">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-accent">Contact</NuxtLink>
      </nav>

      <!-- Cart Icon -->
      <div class="flex items-center space-x-4">
        <NuxtLink to="/cart" class="hover:text-accent">
          <i class="fas fa-shopping-cart"></i>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup></script>
