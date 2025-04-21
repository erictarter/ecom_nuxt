export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt", // Add Pinia module
  ],
  plugins: ["@/plugins/firebase", "@/plugins/cart"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },
  css: [
    "@/assets/styles/tailwind.css",
    "@fortawesome/fontawesome-free/css/all.css",
  ],
  postcss: {
    plugins: {
      "@tailwindcss/postcss7-compat": {}, // Use the correct Tailwind PostCSS plugin
      autoprefixer: {},
    },
  },
});
