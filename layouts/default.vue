<!-- filepath: c:\personal_proj\ecom\nuxt_ecom\layouts\default.vue -->
<template>
  <div class="font-serif">
    <Header />
    <main class="container mx-auto p-4 min-h-screen">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
</script>
