<script setup>
import HomePage from "~/pages/home/index.vue";
</script>

<template>
  <header>
    <nav>
      <ul>
        <NuxtLink> <HomePage /></NuxtLink>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
