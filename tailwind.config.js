export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#2A2A2A", // Dark gray for text
        accent: "#6B705C", // Earthy green for accents
        background: "#FAF9F6", // Light beige for background
        highlight: "#DDBEA9", // Soft tan for highlights
      },
    },
  },
  plugins: [],
};
