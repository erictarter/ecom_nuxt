<!-- filepath: c:\personal_proj\ecom\nuxt_ecom\components\ProductCard.vue -->
<template>
  <div
    class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition duration-300"
  >
    <NuxtLink :to="`/products/${product.id}`">
      <div class="h-48 bg-gray-100">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="p-4">
        <h3 class="font-bold text-lg mb-1">{{ product.name }}</h3>
        <p class="text-accent font-medium mb-3">
          ${{ product.price.toFixed(2) }}
        </p>
        <p class="text-sm text-gray-600 mb-3 line-clamp-2">
          {{ product.description }}
        </p>
      </div>
    </NuxtLink>
    <div class="px-4 pb-4">
      <button
        @click="addToCart"
        class="w-full bg-accent hover:bg-opacity-90 text-white py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/store/cart";

const cartStore = useCartStore();

// Define product prop with TypeScript interface
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

const props = defineProps<{
  product: Product;
}>();

// Function to add item to cart
const addToCart = () => {
  cartStore.addItem({
    id: props.product.id,
    name: props.product.name,
    price: props.product.price,
    quantity: 1,
    image: props.product.image,
  });
};
</script>
