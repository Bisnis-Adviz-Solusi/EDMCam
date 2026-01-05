<!-- eslint-disable vue/html-self-closing -->

<script setup>
import SearchBar from "@/widgets/SearchBar.vue";
</script>

<template>
  <nav class="container">
    <div class="topPartContainer">
      <div class="leftTopContainer">
        <a href="#">Hubungi Kami</a>
        <span>|</span>
        <a href="#">Bantuan</a>
        <span>|</span>
        <a href="#">Kebijakan Pelanggan</a>
      </div>
      <div class="rightTopContainer">
        <a href="/login">Masuk</a>
      </div>
    </div>
    <div class="bottomContainer">
      <!-- ini buat layar gede -->
      <div class="fullTitleContainer">
        <img src="/logo.png" alt="Logo" class="logo" />
        <a href="/">Era Digital Meluas</a>
      </div>

      <!-- ini layar SETENGAH  -->
      <div class="halfTitleContainer">
        <img src="/logo.png" alt="Logo" class="logo" />
        <a href="/">EDM</a>
      </div>

      <!-- ini full tapi yang bawah -->
      <div class="bottomRightFull">
        <SearchBar />
        <NuxtLink to="/cart" class="icon">
          <img src="@/icons/Cart.svg" alt="Cart" class="cart-icon" />
        </NuxtLink>
      </div>

      <!-- ini layar SETENGAH -->
      <div class="bottomRightHalf">
        <button class="icon">
          <img src="@/icons/SearchDark.svg" alt="Cart" class="cart-icon" />
        </button>

        <NuxtLink to="/cart" class="icon">
          <img src="@/icons/Cart.svg" alt="Cart" class="cart-icon" />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "../assets/scss/breakpoints" as *;
@use "../assets/scss/mixins" as *;
@use "../assets/scss/variables" as *;

.container {
  display: flex;
  flex-direction: row;
  width: 100vw;
  max-width: none;
  height: fit-content;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid $primary;
  justify-content: space-between;
}

.topPartContainer {
  display: flex;
  height: 4%;
  width: 100%;
  padding: 8px 8%;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid $primary;
  background: linear-gradient(90deg, $primary 0%, $secondary 100%);
  overflow: hidden;

  @include max(md) {
    justify-content: flex-end;
  }
}

.leftTopContainer {
  display: flex;
  align-items: center;
  gap: 14px;

  a {
    color: $lpurple;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.104px;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: color.adjust($lpurple, $lightness: 10%);
    }
  }

  span {
    color: #a78dad;
    opacity: 0.6;
  }

  @include max(md) {
    display: none;
  }
}

.rightTopContainer {
  a {
    color: $white;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    transition: 0.2s ease;

    &:hover {
      color: $lpurple;
    }
  }
}

// bottom part
// bottom part
// bottom part

.bottomContainer {
  display: flex;
  height: 72px;
  padding: 16px 8%;
  justify-content: space-between;
  align-self: stretch;
  align-items: center;
  color: $white;
}

// FULL
// FULL
// FULL

.fullTitleContainer {
  display: flex;
  align-items: center;
  gap: 14px;

  a {
    color: $primary;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.156px;
  }

  @include max(lg) {
    display: none;
  }
}

.bottomRightFull {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8%;

  @include max(md) {
    display: none;
  }
}

// HALF
// HALF
// HALF
// HALF

.bottomRightHalf {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;

  @include min(md) {
    display: none;
  }
}

.halfTitleContainer {
  display: flex;
  align-items: center;
  gap: 14px;

  a {
    color: $primary;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.156px;
  }

  @include min(lg) {
    display: none;
  }
}

.logo {
  width: 8%;
  min-width: 32px;
  height: 32px;
  aspect-ratio: 1/1;
}

.icon {
  display: flex;
  height: fit-content;
  max-height: 32px;
  padding: 6px;
  justify-content: center;
  align-items: center;

  aspect-ratio: 1/1;
  cursor: pointer;

  p {
    color: $primary;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

.cart-icon {
  min-width: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  aspect-ratio: 1/1;
}
</style>
