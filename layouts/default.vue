<!-- filepath: c:\personal_proj\ecom\nuxt_ecom\layouts\default.vue -->
<template>
  <div>
    <Header />
    <main class="container mx-auto p-4 min-h-screen">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
