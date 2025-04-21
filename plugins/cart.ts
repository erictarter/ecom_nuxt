import { useCartStore } from "~/store/cart";

export default defineNuxtPlugin(({ app }) => {
  if (import.meta.client) {
    const cartStore = useCartStore();
    cartStore.loadCart();
  }
});
