<!-- filepath: c:\personal_proj\ecom\nuxt_ecom\components\Header.vue -->
<template>
  <header class="bg-background text-primary shadow-md">
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <h1 class="text-2xl font-serif font-bold">Outdoor Luxe</h1>

      <!-- Navigation -->
      <div class="flex items-center space-x-4">
        <nav class="hidden md:flex space-x-6">
          <NuxtLink to="/" class="hover:text-accent">Home</NuxtLink>

          <!-- Products Dropdown -->
          <div class="relative group">
            <NuxtLink to="/products" class="hover:text-accent"
              >Products</NuxtLink
            >
            <div
              class="absolute left-0 mt-2 hidden w-48 bg-white shadow-md group-hover:flex flex-col"
            >
              <NuxtLink
                to="/products/categories"
                class="block px-4 py-2 text-primary hover:bg-gray-100"
              >
                Categories
              </NuxtLink>
              <NuxtLink
                to="/products/categories/outdoor-seating"
                class="block px-4 py-2 text-primary hover:bg-gray-100"
              >
                Outdoor Seating
              </NuxtLink>
              <NuxtLink
                to="/products/categories/dining-sets"
                class="block px-4 py-2 text-primary hover:bg-gray-100"
              >
                Dining Sets
              </NuxtLink>
              <NuxtLink
                to="/products/categories/lounge-chairs"
                class="block px-4 py-2 text-primary hover:bg-gray-100"
              >
                Lounge Chairs
              </NuxtLink>
              <NuxtLink
                to="/products/categories/fire-pits"
                class="block px-4 py-2 text-primary hover:bg-gray-100"
              >
                Fire Pits
              </NuxtLink>
            </div>
          </div>

          <NuxtLink to="/about" class="hover:text-accent">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-accent">Contact</NuxtLink>
        </nav>

        <!-- Cart Icon -->
        <NuxtLink to="/cart" class="hover:text-accent">
          <i class="fas fa-shopping-cart"></i>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
