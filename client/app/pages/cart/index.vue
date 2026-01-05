<script setup>
import { useCart } from "@/helper/useCart";
const { cart, removeFromCart, clearCart } = useCart();
</script>

<template>
  <div class="cart-container h-[100vw] px-[108px] pt-8">
    <h1 class="text-3xl font-bold mb-6">Keranjang Belanja</h1>

    <div v-if="!cart.length" class="text-gray-500 text-center mt-12">
      Belum ada produk di keranjangmu 🛒
    </div>

    <div v-else class="grid gap-6">
      <div
        v-for="(item, i) in cart"
        :key="i"
        class="flex items-center justify-between bg-white shadow p-4 rounded-lg"
      >
        <div class="flex items-center gap-4">
          <img
            :src="item.thumbnail"
            alt="gambar produk"
            class="w-20 h-20 object-cover rounded-md"
          />
          <div>
            <h3 class="font-semibold">{{ item.title }}</h3>
            <p class="text-sm text-gray-500">Qty: {{ item.qty }}</p>
            <p class="font-bold text-purple-700">
              Rp {{ item.price * 1000 }}
            </p>
          </div>
        </div>
        <button
          @click="removeFromCart(item.id)"
          class="text-red-600 hover:underline"
        >
          Hapus
        </button>
      </div>

      <div class="text-right mt-8">
        <p class="text-lg font-bold mb-2">
          Total:
          Rp
          {{
            cart.reduce((acc, p) => acc + p.price * 1000 * p.qty, 0)
          }}
        </p>
        <button
          @click="clearCart"
          class="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800"
        >
          Hapus Semua
        </button>
      </div>
    </div>
  </div>
</template>
