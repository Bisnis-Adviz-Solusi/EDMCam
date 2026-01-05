import { ref, watch } from "vue";

const cart = ref([]);

if (process.client) {
  const saved = localStorage.getItem("cart");
  if (saved) cart.value = JSON.parse(saved);
}

watch(
  cart,
  (newCart) => {
    if (process.client) {
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  },
  { deep: true }
);

const addToCart = (product) => {
  const existing = cart.value.find((p) => p.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.value.push({ ...product, qty: 1 });
  }
};

const removeFromCart = (id) => {
  cart.value = cart.value.filter((p) => p.id !== id);
};

const clearCart = () => {
  cart.value = [];
};

export const useCart = () => ({
  cart,
  addToCart,
  removeFromCart,
  clearCart,
});
