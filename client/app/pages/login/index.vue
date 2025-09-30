<script setup>
import SearchBar from "@/components/SearchBar.vue";
</script>

<template>
  <div>
    <div>
      <button class="button btn-primary">Tombol Primary</button>
      <button class="button btn-outline-p">Tombol Outline</button>
      <button class="button btn-white">Tombol putih</button>
      <button class="button btn-outline-w">Tombol Outline</button>
      <button class="button btn-class">Tombol Class</button>
    </div>
    <div class="catCard bg-purple">
      <p class="catCardText title2">Live Production Switcher</p>
      <img src="/switcher.png" alt="Switcher" class="catCardImage" />
    </div>
    <div class="productCard">
      <div class="productImageBG">
        <img src="/switcher.png" alt="Product" class="product-img" />
      </div>
      <div class="productInfo">
        <p class="subtitle3 productName">Product Name</p>
        <p class="content3 productPrice">RpXXX.XXX</p>
      </div>
      <button class="button btn-addtocart">+ Keranjang</button>
    </div>
    <div class="backCard">heh</div>

    <SearchBar />
  </div>
</template>
