<template>
  <div class="container mx-auto py-8 px-4">
    <h1 class="text-3xl font-serif font-bold mb-6">Product Categories</h1>

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
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dining Sets",
    slug: "dining-sets",
    image:
      "https://images.unsplash.com/photo-1597737422579-b683a2e571ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lounge Chairs",
    slug: "lounge-chairs",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Fire Pits",
    slug: "fire-pits",
    image:
      "https://images.unsplash.com/photo-1527766931348-c71a88e3a54a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];
</script>
