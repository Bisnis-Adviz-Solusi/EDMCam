<script setup>
import { ref } from "vue";
import Dropdown from "./Dropdown.vue";

const selectedCategory = ref("All");
const searchKeyword = ref("");

const updateCategory = (cat) => {
  selectedCategory.value = cat;
  console.log("KATEGORI TERPILIH>>>", cat);
};

const searchAction = () => {
  console.log("Search aktif gannnnnnn");
  console.log("Kategori:", selectedCategory.value);
  console.log("Keyword:", searchKeyword.value);
};
</script>

<template>
  <div class="inputForm" tabindex="0">
    <Dropdown @updateCategory="updateCategory" />
    <input id="search" type="text" placeholder="Cari produk..." v-model="searchKeyword" />
    <button class="buttonSearch" @click="searchAction">
      <img class="logo" src="/icons/Search.svg" alt="search" />
    </button>
  </div>
</template>

<!-- STYLE DISININI -->
<style lang="scss" scoped>
@use "../assets/scss/form" as *;
@use "../assets/scss/breakpoints" as *;
@use "../assets/scss/mixins" as *;
@use "../assets/scss/variables" as *;

.inputForm {
  display: flex;
  width: fit-content;
  height: 32px;
  padding: 8px 3px;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border: 1px solid $primary;
  background: transparent;

  label {
    color: $primary;
    margin-bottom: 4px;
  }

  &:focus-within {
    border: 2px solid $primary;
  }

  input {
    @extend .content3;
    min-width: 120px;
    width: 112%;
    padding: 4px 4px;
    padding-left: 8px;
    background: transparent;
    color: $primary;
    outline: none;
    transition: all 0.3s ease;

    &::placeholder {
      @extend .info;
      color: rgba(30, 30, 45, 0.4);
      transition: opacity 0.2s ease;
    }

    // pas user ngetikkk
    &:focus::placeholder,
    &:not(:placeholder-shown)::placeholder {
      opacity: 0;
    }

    &.error {
      border-color: #c91818;
      color: #c91818;
      @include shake();
    }
  }
}

.logo {
  display: flex;
  width: 10px;
  height: 10px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  aspect-ratio: 1/1;
}

.buttonSearch {
  display: flex;
  height: 100%;
  padding: 13px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 3px;
  background: #44174e;
  aspect-ratio: 1/1;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px rgba(32, 29, 56, 0.3);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 8px 16px rgba(32, 29, 56, 0.3);
  }
}
</style>
