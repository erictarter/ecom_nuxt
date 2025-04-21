<template>
  <div class="container mx-auto py-8 px-4">
    <h1 class="text-3xl font-serif font-bold mb-6">Contact Us</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p class="mb-6">
          Have a question about our products or need assistance? Fill out the
          form and we'll get back to you as soon as possible.
        </p>

        <form class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium mb-1"
              >Name</label
            >
            <input
              type="text"
              id="name"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium mb-1"
              >Email</label
            >
            <input
              type="email"
              id="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium mb-1"
              >Message</label
            >
            <textarea
              id="message"
              rows="5"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-accent hover:bg-opacity-90 text-white py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
        <div class="space-y-4">
          <div class="flex items-start">
            <i class="fas fa-map-marker-alt mt-1 mr-3 text-accent"></i>
            <p>
              123 Furniture Lane<br />Design District<br />San Francisco, CA
              94103
            </p>
          </div>
          <div class="flex items-center">
            <i class="fas fa-phone mr-3 text-accent"></i>
            <p>(555) 123-4567</p>
          </div>
          <div class="flex items-center">
            <i class="fas fa-envelope mr-3 text-accent"></i>
            <p>info@outdoorluxe.com</p>
          </div>
          <div class="flex items-center">
            <i class="fas fa-clock mr-3 text-accent"></i>
            <p>
              Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday:
              Closed
            </p>
          </div>
        </div>

        <div class="mt-8 h-64 bg-gray-200">
          <!-- Placeholder for a map -->
          <div class="w-full h-full flex items-center justify-center">
            <p>Map would go here</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
