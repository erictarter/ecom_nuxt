<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-800">Register</h1>
    <form class="mt-4">
      <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input type="email" class="w-full p-2 border rounded" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Password</label>
        <input type="password" class="w-full p-2 border rounded" />
      </div>
      <button
        type="submit"
        class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
</script>
