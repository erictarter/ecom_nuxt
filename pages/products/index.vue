<template>
  <div class="container mx-auto py-8 px-4">
    <h1 class="text-3xl font-serif font-bold mb-6">All Products</h1>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Deluxe Outdoor Sofa",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "outdoor-seating",
    description:
      "A comfortable and stylish outdoor sofa perfect for your patio or garden.",
  },
  {
    id: "2",
    name: "Teak Dining Set",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1595562084043-2db937290acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "dining-sets",
    description:
      "A beautiful teak dining set that can seat up to 6 people comfortably.",
  },
  {
    id: "3",
    name: "Modern Lounger",
    price: 499.99,
    image:
      "https://images.unsplash.com/photo-1543248939-ff40856f65d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "lounge-chairs",
    description:
      "A sleek and modern lounger for relaxing in your garden or by the pool.",
  },
  {
    id: "4",
    name: "Outdoor Coffee Table",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "outdoor-seating",
    description:
      "A sturdy and weather-resistant coffee table for your outdoor space.",
  },
  {
    id: "5",
    name: "Cast Iron Fire Pit",
    price: 329.99,
    image:
      "https://images.unsplash.com/photo-1527766931348-c71a88e3a54a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "fire-pits",
    description:
      "A beautiful cast iron fire pit to keep you warm on cool evenings.",
  },
  {
    id: "6",
    name: "Wicker Chair Set",
    price: 599.99,
    image:
      "https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "outdoor-seating",
    description:
      "A set of two comfortable wicker chairs for your patio or garden.",
  },
];
</script>
