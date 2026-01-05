<script setup lang="ts">
const heroTitle = "Era Digital Meluas";
const heroSubtitle = "Website sementara · Informasi & kebijakan utama";
</script>

<template>
  <section
    id="hero"
    class="relative flex flex-col gap-8 px-6 py-16 md:py-20 lg:py-24 lg:flex-row lg:items-center"
  >
    <div class="absolute inset-0 rounded-3xl sectionSurface opacity-80 blur-0"></div>
    <div class="relative z-10 flex-1 space-y-6">
      <p class="text-sm font-medium uppercase tracking-widest text-[var(--warmHighlight)]">
        E-Cam Digital
      </p>
      <h1 class="text-4xl font-semibold leading-tight md:text-5xl text-[var(--softLight)]">
        {{ heroTitle }}
      </h1>
      <p class="max-w-2xl text-base md:text-lg text-[var(--softLight)]/80">
        {{ heroSubtitle }}
      </p>
      <div class="flex flex-wrap gap-4">
        <a
          href="#produk"
          class="btn btn-primary rounded-full border-none px-6 text-base font-semibold shadow-lg"
          :style="{ background: 'var(--warmHighlight)', color: '#1d1a39' }"
        >
          Lihat Produk
        </a>
        <a
          href="#kebijakan"
          class="btn btn-outline rounded-full border border-[var(--softLight)] px-6 text-base font-semibold text-[var(--softLight)]"
        >
          Kebijakan
        </a>
      </div>
      <div class="flex flex-wrap gap-3">
        <div class="badge border-none bg-[var(--darkAccent)] text-[var(--softLight)]">Produksi konten</div>
        <div class="badge border-none bg-[var(--darkSecondary)] text-[var(--softLight)]">Strategi digital</div>
        <div class="badge border-none bg-[var(--dangerTone)] text-[var(--darkPrimary)]">Konsultasi end-to-end</div>
      </div>
    </div>
    <!-- <div class="relative z-10 mt-8 flex-1 lg:mt-0">
      <div class="sectionSurface rounded-3xl border border-[var(--darkAccent)] p-8 shadow-2xl">
        <div class="grid grid-cols-2 gap-4 text-[var(--softLight)]">
          <div class="stat bg-transparent shadow-none">
            <div class="stat-title text-[var(--softLight)]/70">Proyek</div>
            <div class="stat-value text-[var(--warmHighlight)]">120+</div>
            <div class="stat-desc text-[var(--softLight)]/60">Kampanye digital aktif</div>
          </div>
          <div class="stat bg-transparent shadow-none">
            <div class="stat-title text-[var(--softLight)]/70">Sejak</div>
            <div class="stat-value text-[var(--softLight)]">2020</div>
            <div class="stat-desc text-[var(--softLight)]/60">Berawal dari studio konten</div>
          </div>
          <div class="stat bg-transparent shadow-none">
            <div class="stat-title text-[var(--softLight)]/70">Tim</div>
            <div class="stat-value text-[var(--warmHighlight)]">35</div>
            <div class="stat-desc text-[var(--softLight)]/60">Producer, designer, engineer</div>
          </div>
          <div class="stat bg-transparent shadow-none">
            <div class="stat-title text-[var(--softLight)]/70">Kepuasan</div>
            <div class="stat-value text-[var(--softLight)]">4.9/5</div>
            <div class="stat-desc text-[var(--softLight)]/60">Brand partner happy</div>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>
