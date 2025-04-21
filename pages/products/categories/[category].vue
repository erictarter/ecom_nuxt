<template>
  <div class="container mx-auto py-8 px-4">
    <div class="mb-6">
      <NuxtLink to="/products/categories" class="text-accent hover:underline">
        <i class="fas fa-arrow-left mr-2"></i> Back to Categories
      </NuxtLink>
    </div>

    <h1 class="text-3xl font-serif font-bold mb-6 capitalize">
      {{ formattedCategoryName }}
    </h1>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <!-- Products in this category -->
      <ProductCard
        v-for="product in categoryProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const category = route.params.category;

// Format category name for display
const formattedCategoryName = computed(() => {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
});

// Fetch products for this category
// This would come from your Firebase data
</script>
