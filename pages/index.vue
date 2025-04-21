<template>
  <div>
    <!-- Hero Section with Background Image -->
    <div class="h-[600px] relative overflow-hidden">
      <!-- Background Image Only -->
      <img
        src="https://images.unsplash.com/photo-1596480823522-b9827f1fe2d2?w=1500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
        alt="Outdoor Furniture"
        class="w-full h-full object-cover"
      />

      <!-- Hero Content -->
      <div class="absolute inset-0 flex items-center">
        <div class="container mx-auto px-4">
          <div
            class="max-w-lg bg-background bg-opacity-90 p-8 rounded-lg shadow-lg"
          >
            <h1 class="text-4xl font-serif font-bold text-primary mb-4">
              Elevate Your Outdoor Space
            </h1>
            <p class="text-lg text-gray-700 mb-6">
              Discover luxury outdoor furniture crafted for comfort, durability,
              and style.
            </p>
            <NuxtLink
              to="/products"
              class="inline-block bg-accent hover:bg-opacity-90 text-white px-6 py-3 rounded-md transition duration-200 font-medium"
            >
              Shop Now
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- About Our Brand Section -->
    <div class="bg-background py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-serif font-bold text-primary mb-6">
            Our Commitment to Quality
          </h2>
          <p class="text-lg text-gray-700 mb-8">
            At Outdoor Luxe, we believe that your outdoor living spaces deserve
            the same attention to quality and design as your indoor ones. Each
            piece in our collection is thoughtfully crafted using premium
            materials that withstand the elements while maintaining their
            elegance for years to come. From sustainably sourced teak to
            weather-resistant fabrics, we select only the finest materials to
            ensure durability, comfort, and timeless style.
          </p>
          <p class="text-lg text-gray-700 mb-8">
            Our designs blend form and function to create outdoor furniture that
            not only looks beautiful but enhances your lifestyle. Whether you're
            hosting gatherings on your patio or enjoying quiet moments in your
            garden, our pieces provide the perfect setting for making memories
            in your outdoor sanctuary.
          </p>
        </div>
      </div>
    </div>

    <!-- Featured Categories Section -->
    <div class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-serif font-bold text-primary mb-10 text-center"
        >
          Browse Our Collections
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Category Card 1 -->
          <NuxtLink
            to="/products/categories/outdoor-seating"
            class="category-card group"
          >
            <div class="relative h-80 rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1624409992408-fb54c97ce55e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3V0ZG9vciUyMGhvbWUlMjBzZWF0aW5nfGVufDB8fDB8fHwy"
                alt="Outdoor Seating"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
              >
                <div class="bg-background p-2 bg-opacity-80">
                  <h3 class="text-xl font-bold mb-2">Outdoor Seating</h3>
                  <p class="text-sm">
                    Comfort meets elegance with our premium seating options
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Category Card 2 -->
          <NuxtLink
            to="/products/categories/dining-sets"
            class="category-card group"
          >
            <div class="relative h-80 rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1742546726346-4493c7b8e8c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWUlMjBkaW5pbmd8ZW58MHx8MHx8fDI%3D"
                alt="Dining Sets"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
              >
                <div class="bg-background p-2 bg-opacity-80">
                  <h3 class="text-xl font-bold mb-2">Dining Sets</h3>
                  <p class="text-sm">
                    Create memorable gatherings with our stylish dining
                    collections
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Category Card 3 -->
          <NuxtLink
            to="/products/categories/lounge-chairs"
            class="category-card group"
          >
            <div class="relative h-80 rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1654229472764-2c447b245e76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3V0ZG9vciUyMCUyMGhvbWUlMjBsb3VuZ2UlMjBjaGFpcnN8ZW58MHx8MHx8fDI%3D"
                alt="Lounge Chairs"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
              >
                <div class="bg-background p-2 bg-opacity-80">
                  <h3 class="text-xl font-bold mb-2">Lounge Chairs</h3>
                  <p class="text-sm">
                    Relax in style with our ergonomic and beautiful loungers
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Category Card 4 -->
          <NuxtLink
            to="/products/categories/fire-pits"
            class="category-card group"
          >
            <div class="relative h-80 rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1598833775803-99eea89ad6a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZSUyMHBpdHMlMjBob21lfGVufDB8fDB8fHwy"
                alt="Fire Pits"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
              >
                <div class="bg-background p-2 bg-opacity-80">
                  <h3 class="text-xl font-bold mb-2">Fire Pits</h3>
                  <p class="text-sm">
                    Extend your outdoor season with our elegant fire features
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="text-center mt-10">
          <NuxtLink
            to="/products"
            class="inline-flex items-center text-accent hover:underline font-medium"
          >
            View All Collections
            <i class="fas fa-arrow-right ml-2"></i>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-serif font-bold text-primary mb-10 text-center"
        >
          What Our Customers Say
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-background p-6 rounded-lg shadow-md">
            <div class="flex text-accent mb-4">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="text-gray-700 mb-6">
              "The quality of my new outdoor sofa is exceptional. It's not only
              beautiful but has withstood rain, sun, and my children's
              enthusiastic use without showing any wear."
            </p>
            <p class="font-medium">- Sarah T., San Francisco</p>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-background p-6 rounded-lg shadow-md">
            <div class="flex text-accent mb-4">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="text-gray-700 mb-6">
              "We've completely transformed our patio with Outdoor Luxe
              furniture. The dining set is both elegant and durable - perfect
              for our frequent outdoor entertaining."
            </p>
            <p class="font-medium">- Michael R., Chicago</p>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-background p-6 rounded-lg shadow-md">
            <div class="flex text-accent mb-4">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="text-gray-700 mb-6">
              "The fire pit we purchased has extended our outdoor season well
              into fall. The craftsmanship is outstanding and it's become the
              centerpiece of our backyard."
            </p>
            <p class="font-medium">- Jennifer L., Austin</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>
