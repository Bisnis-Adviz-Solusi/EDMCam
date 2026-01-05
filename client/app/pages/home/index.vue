<script setup>
import { ref, onMounted } from "vue";
import { useCart } from "@/helper/useCart";

const products = ref([]);
const isLoading = ref(true);

const { addToCart } = useCart();
const showModal = ref(false);
const addedItem = ref(null);

const handleAdd = (item) => {
  addToCart(item);
  addedItem.value = item;
  showModal.value = true;
  console.log("THIS IS ADD TO CART>>>", item);
};
onMounted(async () => {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=6");
    const data = await res.json();
    products.value = data.products;
  } catch (error) {
    console.log("THIS IS ERROR>>>", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <!-- Hero Section -->
  <div class="home">
    <!-- Banner Section -->
    <section class="relative">
      <img src="/BannerPromo.png" alt="Promo Banner" class="w-full h-[500px] object-cover" />
    </section>

    <!-- About Us -->
    <section class="about p-12 bg-gray-100 text-center">
      <h2 class="text-2xl font-semibold mb-4">Tentang Kami</h2>
      <div class="max-w-3xl mx-auto text-gray-700 leading-relaxed">
        <p class="mb-4">Kami fokus menyediakan satu produk unggulan yang dirancang untuk mendukung kebutuhan produksi digital masa kini — mulai dari tampilan, warna, sampai performa yang stabil.</p>
        <p>
          Dengan sistem pembelian online dari kami, semua proses mulai dari pemesanan, pembayaran, sampai pengiriman dirancang dengan efisien agar pengguna dapat dengan mudah mendapatkan produk dan fokus untuk
          berkarya.
        </p>
      </div>
    </section>

    <!-- Product Section -->
    <section class="products py-16">
      <h2 class="text-center text-3xl font-bold mb-8">Produk Kami</h2>

      <div v-if="isLoading" class="text-center text-gray-500">Loading product data...</div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16">
        <div v-for="product in products" :key="product.id" class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
          <img :src="product.thumbnail" alt="product image" class="w-full h-48 object-cover rounded-md mb-4" />
          <h3 class="font-semibold text-lg mb-2">{{ product.title }}</h3>
          <p class="text-gray-500 text-sm mb-4">{{ product.description }}</p>
          <p class="font-bold text-purple-700 mb-3">Rp {{ product.price * 1000 }}</p>
          <button class="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition" @click="handleAdd(product)">Add to Cart</button>

          <!-- MODAL SUCCESS -->
          <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50">
            <div class="bg-white p-6 rounded-lg text-center shadow-lg max-w-sm">
              <h3 class="text-lg font-semibold text-purple-700 mb-2">Produk ditambahkan!</h3>
              <p class="text-gray-600 mb-4">{{ addedItem.title }}</p>
              <button class="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 mr-2" @click="showModal = false">Lanjut Belanja</button>
              <NuxtLink to="/cart" class="bg-gray-200 text-purple-700 px-4 py-2 rounded-md hover:bg-gray-300"> Lihat Keranjang </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guide Section -->
    <section class="guide bg-gradient-to-r from-orange-600 to-red-500 text-white py-12 text-center">
      <h3 class="text-2xl font-semibold mb-3">DaVinci Resolve Guide</h3>
      <p class="max-w-xl mx-auto mb-4">Majulah mengikuti industri masa kini! Kami bantu kamu memahami perangkat dan fitur produksi terbaru.</p>
      <a
        href="https://www.blackmagicdesign.com/products/davinciresolve/training"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-white text-orange-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
        Lihat Tutorial Resmi
      </a>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #4b0082, #7b2cbf);
}
</style>
