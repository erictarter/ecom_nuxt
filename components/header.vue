<template>
  <header class="text-primary shadow-md">
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold">Outdoor Luxe</NuxtLink>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden text-primary focus:outline-none"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <i
          :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"
          class="text-xl"
        ></i>
      </button>

      <!-- Navigation -->
      <div class="hidden md:flex items-center space-x-4">
        <nav class="flex space-x-6">
          <NuxtLink to="/" class="hover:text-accent transition duration-200"
            >Home</NuxtLink
          >

          <!-- Products Dropdown -->
          <div class="relative">
            <div
              class="flex items-center cursor-pointer hover:text-accent transition duration-200"
              @mouseenter="productsDropdownOpen = true"
              @mouseleave="closeDropdownWithDelay"
            >
              <NuxtLink to="/products" class="hover:text-accent"
                >Products</NuxtLink
              >
              <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </div>
            <div
              v-if="productsDropdownOpen"
              class="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md overflow-hidden z-50"
              @mouseenter="clearDropdownTimeout"
              @mouseleave="closeDropdownWithDelay"
            >
              <NuxtLink
                to="/products/categories"
                class="block px-4 py-2 text-primary hover:bg-gray-100 transition duration-200"
              >
                Browse Categories
              </NuxtLink>
              <NuxtLink
                to="/products/categories/outdoor-seating"
                class="block px-4 py-2 text-primary hover:bg-gray-100 transition duration-200"
              >
                Outdoor Seating
              </NuxtLink>
              <NuxtLink
                to="/products/categories/dining-sets"
                class="block px-4 py-2 text-primary hover:bg-gray-100 transition duration-200"
              >
                Dining Sets
              </NuxtLink>
              <NuxtLink
                to="/products/categories/lounge-chairs"
                class="block px-4 py-2 text-primary hover:bg-gray-100 transition duration-200"
              >
                Lounge Chairs
              </NuxtLink>
              <NuxtLink
                to="/products/categories/fire-pits"
                class="block px-4 py-2 text-primary hover:bg-gray-100 transition duration-200"
              >
                Fire Pits
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
            to="/about"
            class="hover:text-accent transition duration-200"
            >About</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="hover:text-accent transition duration-200"
            >Contact</NuxtLink
          >
        </nav>

        <!-- Cart Icon & Auth -->
        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/cart"
            class="hover:text-accent transition duration-200 relative"
          >
            <i class="fas fa-shopping-cart"></i>
            <span
              v-if="cartItemCount > 0"
              class="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
            >
              {{ cartItemCount }}
            </span>
          </NuxtLink>
          <NuxtLink
            to="/account"
            class="hover:text-accent transition duration-200"
          >
            <i class="fas fa-user"></i>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-50"
    >
      <nav class="container mx-auto p-4 flex flex-col space-y-4">
        <NuxtLink
          to="/"
          class="hover:text-accent"
          @click="mobileMenuOpen = false"
          >Home</NuxtLink
        >
        <div>
          <div
            class="flex items-center justify-between"
            @click="productMenuOpen = !productMenuOpen"
          >
            <NuxtLink to="/products" class="hover:text-accent" @click.stop
              >Products</NuxtLink
            >
            <i
              :class="
                productMenuOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
              "
              class="text-xs"
            ></i>
          </div>
          <div v-if="productMenuOpen" class="pl-4 mt-2 flex flex-col space-y-2">
            <NuxtLink
              to="/products/categories"
              class="hover:text-accent"
              @click="mobileMenuOpen = false"
            >
              Browse Categories
            </NuxtLink>
            <NuxtLink
              to="/products/categories/outdoor-seating"
              class="hover:text-accent"
              @click="mobileMenuOpen = false"
            >
              Outdoor Seating
            </NuxtLink>
            <NuxtLink
              to="/products/categories/dining-sets"
              class="hover:text-accent"
              @click="mobileMenuOpen = false"
            >
              Dining Sets
            </NuxtLink>
            <NuxtLink
              to="/products/categories/lounge-chairs"
              class="hover:text-accent"
              @click="mobileMenuOpen = false"
            >
              Lounge Chairs
            </NuxtLink>
            <NuxtLink
              to="/products/categories/fire-pits"
              class="hover:text-accent"
              @click="mobileMenuOpen = false"
            >
              Fire Pits
            </NuxtLink>
          </div>
        </div>
        <NuxtLink
          to="/about"
          class="hover:text-accent"
          @click="mobileMenuOpen = false"
          >About</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="hover:text-accent"
          @click="mobileMenuOpen = false"
          >Contact</NuxtLink
        >
        <div class="flex space-x-4 pt-2 border-t border-gray-200">
          <NuxtLink
            to="/cart"
            class="hover:text-accent"
            @click="mobileMenuOpen = false"
          >
            <i class="fas fa-shopping-cart mr-2"></i> Cart
          </NuxtLink>
          <NuxtLink
            to="/account"
            class="hover:text-accent"
            @click="mobileMenuOpen = false"
          >
            <i class="fas fa-user mr-2"></i> Account
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useCartStore } from "~/store/cart";

// Mobile menu state
const mobileMenuOpen = ref(false);
const productMenuOpen = ref(false);
const productsDropdownOpen = ref(false);
let dropdownTimeout: NodeJS.Timeout | null = null;

// Get cart store to display item count
const cartStore = useCartStore();
const cartItemCount = computed(() => cartStore.totalItems);

// Function to close dropdown with a slight delay
// This prevents the dropdown from closing immediately when moving from trigger to menu
const closeDropdownWithDelay = () => {
  dropdownTimeout = setTimeout(() => {
    productsDropdownOpen.value = false;
  }, 100);
};

// Clear the timeout when mouse enters the dropdown
const clearDropdownTimeout = () => {
  if (dropdownTimeout) {
    clearTimeout(dropdownTimeout);
    dropdownTimeout = null;
  }
};

// Close menus when route changes
watch(
  () => useRoute().path,
  () => {
    mobileMenuOpen.value = false;
    productMenuOpen.value = false;
    productsDropdownOpen.value = false;
  }
);
</script>
