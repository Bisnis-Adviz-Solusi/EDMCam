<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ProductSection from "@/components/ProductSection.vue";
import PolicySection from "@/components/PolicySection.vue";
import SiteFooter from "@/components/SiteFooter.vue";

interface NavLink {
  label: string;
  href: string;
}

definePageMeta({
  layout: false,
});

useHead({
  title: "Era Digital Meluas · Landing",
  meta: [{ name: "description", content: "Landing page sementara berisi hero, layanan, kebijakan, dan kontak." }],
});

const navLinks: NavLink[] = [
  { label: "Hero", href: "#hero" },
  { label: "Tentang", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Kebijakan", href: "#kebijakan" },
];
</script>

<template>
  <div id="top" class="landingPageShell">
    <header class="sticky top-0 z-50 border-b border-[var(--darkAccent)]/60 bg-[var(--darkPrimary)]/85 backdrop-blur-md">
      <nav class="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-xl bg-[var(--darkAccent)]/70"></div>
          <div>
            <p class="text-xs uppercase tracking-[0.25em] text-[var(--warmHighlight)]">EDM</p>
            <p class="text-lg font-semibold text-[var(--softLight)]">Era Digital Meluas</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="btn btn-ghost btn-sm rounded-full text-[var(--softLight)] hover:bg-[var(--darkAccent)]/60"
          >
            {{ link.label }}
          </a>
        </div>
      </nav>
    </header>

    <main class="mx-auto flex max-w-screen-xl flex-col gap-10 pb-16">
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <PolicySection />
    </main>

    <SiteFooter />
  </div>
</template>
