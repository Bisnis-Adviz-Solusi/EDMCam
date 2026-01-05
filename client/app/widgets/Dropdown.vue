<script setup>
import { ref, onMounted, defineEmits } from "vue";

const emit = defineEmits(["updateCategory"]);

const isActive = ref(false);
const showModal = ref(false);
const selected = ref("All");
const items = ref([]);

const toggleDD = () => {
  if (window.innerWidth < 992) {
    showModal.value = true;
  } else {
    isActive.value = !isActive.value;
  }
};

const selectItem = (item) => {
  selected.value = item.name;
  isActive.value = false;
  showModal.value = false;
  emit("updateCategory", selected.value); 
};

onMounted(async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  const data = await res.json();
  items.value = [{ name: "All" }, ...data.map((result) => ({ name: result.name }))];
});
</script>

<template>
  <div class="dropdown">
    <button class="ddButton" :class="{ active: isActive }" @click="toggleDD">
      <span class="ddArrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 6 6" fill="none">
          <path d="M5.25 2.59814L0 6.86646e-05V5.19622L5.25 2.59814Z" fill="#44174E" />
        </svg>
      </span>
      <p>{{ selected }}</p>
    </button>

    <ul class="ddContent" v-if="isActive">
      <li v-for="(item, i) in items" :key="i" @click="selectItem(item)">
        {{ item.name }}
      </li>
    </ul>

    <!-- RESPONSICE -->
    <div v-if="showModal" class="ddModal">
      <div class="ddModal__backdrop" @click="showModal = false"></div>
      <div class="ddModal__content">
        <h3>Select Category</h3>
        <ul>
          <li v-for="(item, i) in items" :key="i" @click="selectItem(item)">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
