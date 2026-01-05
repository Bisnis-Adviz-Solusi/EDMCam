<script setup lang="ts">
const aboutTitle = "Tentang Perusahaan";
const aboutHighlights = [
  {
    title: "Digitalisasi Bisnis",
    description:
      "Kami membantu brand beradaptasi dengan perluasan era digital melalui strategi konten yang konsisten, terukur, dan relevan untuk audiens.",
  },
  {
    title: "Layanan End-to-End",
    description:
      "Mulai dari riset, pra-produksi, produksi, hingga distribusi omnichannel, tim kami berpengalaman sejak 2020 menangani berbagai skala proyek.",
  },
];
</script>

<template>
  <section id="tentang" class="relative px-6 py-16 md:py-20 lg:py-24">
    <div class="mb-10 flex items-center justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-widest text-[var(--warmHighlight)]">Profil</p>
        <h2 class="accentUnderline text-3xl font-semibold text-[var(--softLight)] md:text-4xl">
          {{ aboutTitle }}
        </h2>
      </div>
      <div class="hidden h-px flex-1 bg-gradient-to-r from-[var(--darkAccent)]/60 to-transparent lg:block"></div>
    </div>
    <div class="grid gap-6 md:grid-cols-2">
      <article
        v-for="highlight in aboutHighlights"
        :key="highlight.title"
        class="card sectionSurface rounded-2xl shadow-xl"
      >
        <div class="card-body space-y-3 text-[var(--softLight)]">
          <h3 class="text-xl font-semibold text-[var(--warmHighlight)]">
            {{ highlight.title }}
          </h3>
          <p class="text-base text-[var(--softLight)]/85">
            {{ highlight.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
