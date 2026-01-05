<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer id="footer" class="mt-16 border-t border-[var(--darkAccent)]/60 bg-[var(--darkSecondary)]/60">
    <div class="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 px-6 py-6 text-[var(--softLight)] md:flex-row">
      <span class="text-sm">&copy; {{ currentYear }} Era Digital Meluas</span>
      <a href="#top" class="btn btn-ghost btn-sm rounded-full text-[var(--softLight)]">Kembali ke atas</a>
    </div>
  </footer>
</template>
