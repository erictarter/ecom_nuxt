<template>
  <div class="container mx-auto py-8 px-4">
    <div v-if="product">
      <div class="mb-4">
        <NuxtLink to="/products" class="text-accent hover:underline">
          <i class="fas fa-arrow-left mr-2"></i> Back to Products
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Product image -->
        <div>
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full rounded-lg"
          />
        </div>

        <!-- Product details -->
        <div>
          <h1 class="text-3xl font-serif font-bold mb-2">{{ product.name }}</h1>
          <p class="text-2xl text-accent mb-4">
            ${{ product.price.toFixed(2) }}
          </p>
          <div class="prose mb-6">
            <p>{{ product.description }}</p>
          </div>
          <div class="flex items-center space-x-4">
            <input
              type="number"
              min="1"
              v-model="quantity"
              class="w-16 p-2 border border-gray-300 rounded"
            />
            <button
              @click="addToCart"
              class="bg-accent hover:bg-opacity-90 text-white py-2 px-6 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-12">
      <p class="text-xl text-gray-500">Product not found</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useCartStore } from "~/store/cart";

const route = useRoute();
const productId = route.params.id as string;
const quantity = ref(1);
const cartStore = useCartStore();

// Define a type for the product
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

// Define mock product data
// In a real application, you would fetch this from Firebase based on the productId
const products: Product[] = [
  {
    id: "1",
    name: "Deluxe Outdoor Sofa",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "outdoor-seating",
    description:
      "A comfortable and stylish outdoor sofa perfect for your patio or garden. Made with weather-resistant materials and designed for comfort and durability. Features plush cushions and a sturdy frame that will last for years to come.",
  },
  {
    id: "2",
    name: "Teak Dining Set",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1595562084043-2db937290acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "dining-sets",
    description:
      "A beautiful teak dining set that can seat up to 6 people comfortably. This premium dining set is crafted from sustainable teak wood, known for its natural oils and water-resistant properties. Perfect for outdoor gatherings and family meals.",
  },
  {
    id: "3",
    name: "Modern Lounger",
    price: 499.99,
    image:
      "https://images.unsplash.com/photo-1543248939-ff40856f65d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "lounge-chairs",
    description:
      "A sleek and modern lounger for relaxing in your garden or by the pool. Featuring an adjustable backrest and weather-resistant fabric, this lounger combines style and functionality for the ultimate outdoor relaxation.",
  },
  {
    id: "4",
    name: "Outdoor Coffee Table",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "outdoor-seating",
    description:
      "A sturdy and weather-resistant coffee table for your outdoor space. Made with high-quality materials that can withstand the elements while maintaining its elegant look. The perfect complement to your outdoor seating arrangement.",
  },
  {
    id: "5",
    name: "Cast Iron Fire Pit",
    price: 329.99,
    image:
      "https://images.unsplash.com/photo-1527766931348-c71a88e3a54a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "fire-pits",
    description:
      "A beautiful cast iron fire pit to keep you warm on cool evenings. This durable fire pit features a deep bowl design for larger fires and includes a mesh spark screen for added safety. Gather around and enjoy outdoor evenings year-round.",
  },
];

// Find the product based on the ID from the URL
const product = computed(
  () => products.find((p) => p.id === productId) || null
);

// Function to add item to cart with the selected quantity
const addToCart = () => {
  if (product.value) {
    cartStore.addItem({
      id: product.value.id,
      name: product.value.name,
      price: product.value.price,
      quantity: quantity.value,
      image: product.value.image,
    });
  }
};
</script>
