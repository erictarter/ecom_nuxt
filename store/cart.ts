import { defineStore } from "pinia";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    totalItems: (state) =>
      state.items.reduce((total, item) => total + item.quantity, 0),
    subtotal: (state) =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
  },
  actions: {
    addItem(item: CartItem) {
      const existingItem = this.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.items.push(item);
      }

      // Store in localStorage for persistence
      this.saveCart();
    },
    removeItem(id: string) {
      this.items = this.items.filter((item) => item.id !== id);
      this.saveCart();
    },
    updateItemQuantity(id: string, quantity: number) {
      const item = this.items.find((item) => item.id === id);
      if (item) {
        item.quantity = Math.max(1, quantity);
        this.saveCart();
      }
    },
    clearCart() {
      this.items = [];
      this.saveCart();
    },
    saveCart() {
      if (process.client) {
        localStorage.setItem("cart", JSON.stringify(this.items));
      }
    },
    loadCart() {
      if (process.client) {
        const saved = localStorage.getItem("cart");
        if (saved) {
          this.items = JSON.parse(saved);
        }
      }
    },
  },
});
