import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Array<{ id: string; name: string; price: number; quantity: number }>,
  }),
  actions: {
    addItem(item: { id: string; name: string; price: number; quantity: number }) {
      this.items.push(item);
    },
    removeItem(id: string) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
});