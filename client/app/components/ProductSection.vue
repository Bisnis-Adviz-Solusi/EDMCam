<script setup lang="ts">
import { onMounted, ref } from "vue";

interface ProductPreviewItem {
  title: string;
  description: string;
  badgeText: string;
}

const productLink = "https://www.serbamulti.com/blackmagic-design";

const productPreviewList = ref<ProductPreviewItem[]>([
  {
    title: "Kamera",
    description: "Preview lini kamera Blackmagic Design untuk produksi studio maupun lapangan.",
    badgeText: "Populer",
  },
  {
    title: "Control Panel / Studio",
    description: "Panel kontrol dan perangkat studio untuk workflow siaran dan live production.",
    badgeText: "Studio Ready",
  },
]);

onMounted(() => {
  console.log("THIS IS DEBUG>>>", { productLink, previewCount: productPreviewList.value.length });
});
</script>

<template>
  <section id="produk" class="relative px-6 py-16 md:py-20 lg:py-24">
    <div class="mb-6 flex items-center justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-widest text-[var(--warmHighlight)]">Layanan</p>
        <h2 class="accentUnderline text-3xl font-semibold text-[var(--softLight)] md:text-4xl">
          Produk
        </h2>
        <p class="mt-2 text-sm text-[var(--softLight)]/75">
          Jelajahi katalog Blackmagic Design melalui mitra resmi Serbamulti. Dua kategori populer kami tampilkan sebagai
          preview singkat.
        </p>
      </div>
      <a
        :href="productLink"
        target="_blank"
        rel="noopener noreferrer"
        class="btn rounded-full border-none px-5 text-base font-semibold shadow-lg"
        :style="{ background: 'var(--warmHighlight)', color: '#1d1a39' }"
      >
        Lihat Produk Selengkapnya
      </a>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <article
        v-for="preview in productPreviewList"
        :key="preview.title"
        class="card sectionSurface rounded-2xl shadow-xl ring-1 ring-[var(--darkAccent)]/60"
      >
        <div class="card-body space-y-3 text-[var(--softLight)]">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-[var(--softLight)]">
              {{ preview.title }}
            </h3>
            <span class="badge border-none bg-[var(--darkAccent)] text-[var(--softLight)]">
              {{ preview.badgeText }}
            </span>
          </div>
          <p class="text-sm text-[var(--softLight)]/80">
            {{ preview.description }}
          </p>
          <a
            :href="productLink"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover text-[var(--warmHighlight)]"
          >
            Buka katalog Blackmagic Design
          </a>
        </div>
      </article>
    </div>

    <div class="mt-8">
      <a
        :href="productLink"
        target="_blank"
        rel="noopener noreferrer"
        class="link link-hover text-sm font-semibold text-[var(--warmHighlight)]"
      >
        Buka katalog Blackmagic Design
      </a>
    </div>
  </section>
</template>
