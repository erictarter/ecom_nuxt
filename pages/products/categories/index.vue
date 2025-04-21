<template>
  <div class="container mx-auto py-8 px-4">
    <h1 class="text-3xl font-serif font-bold mb-6">Categories</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Category cards -->
      <NuxtLink
        v-for="category in categories"
        :key="category.slug"
        :to="`/products/categories/${category.slug}`"
        class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition duration-300"
      >
        <div class="h-48 bg-gray-100 relative">
          <img
            :src="category.image"
            :alt="category.name"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
          >
            <h3 class="text-white text-2xl font-bold">{{ category.name }}</h3>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define a type for the category
interface Category {
  name: string;
  slug: string;
  image: string;
}

// Define the categories data
const categories: Category[] = [
  {
    name: "Outdoor Seating",
    slug: "outdoor-seating",
    image:
      "https://images.unsplash.com/photo-1624409992408-fb54c97ce55e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3V0ZG9vciUyMGhvbWUlMjBzZWF0aW5nfGVufDB8fDB8fHwy",
  },
  {
    name: "Dining Sets",
    slug: "dining-sets",
    image:
      "https://images.unsplash.com/photo-1742546726346-4493c7b8e8c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWUlMjBkaW5pbmd8ZW58MHx8MHx8fDI%3D",
  },
  {
    name: "Lounge Chairs",
    slug: "lounge-chairs",
    image:
      "https://images.unsplash.com/photo-1654229472764-2c447b245e76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3V0ZG9vciUyMCUyMGhvbWUlMjBsb3VuZ2UlMjBjaGFpcnN8ZW58MHx8MHx8fDI%3D",
  },
  {
    name: "Fire Pits",
    slug: "fire-pits",
    image:
      "https://images.unsplash.com/photo-1598833775803-99eea89ad6a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZSUyMHBpdHMlMjBob21lfGVufDB8fDB8fHwy",
  },
];
</script>
