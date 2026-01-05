<script setup lang="ts">
interface PolicyItem {
  policyTitle: string;
  bullets: string[];
}

const supportEmail = "support@e-cam.co.id";

const policyItems: PolicyItem[] = [
  {
    policyTitle: "Syarat & Ketentuan",
    bullets: ["Layanan fokus pada produksi konten digital dan distribusi.", "Jadwal dan revisi disepakati sebelum eksekusi produksi.", "Biaya tambahan dapat berlaku untuk permintaan di luar scope awal."],
  },
  {
    policyTitle: "Privacy Policy",
    bullets: ["Data proyek disimpan dengan kontrol akses terbatas.", "Materi sensitif hanya digunakan untuk tujuan produksi internal.", "Kami menghapus arsip mentah sesuai kesepakatan setelah proyek selesai."],
  },
  {
    policyTitle: "Refund & Return Policy",
    bullets: ["Pembatalan sebelum produksi dikenakan biaya administrasi.", "Jika hasil tidak sesuai brief awal, sesi revisi akan diprioritaskan.", "Refund proporsional dapat diajukan sebelum distribusi final dilakukan."],
  },
];
</script>

<template>
  <section id="kebijakan" class="relative px-6 py-16 md:py-20 lg:py-24">
    <div class="mb-8">
      <p class="text-sm font-semibold uppercase tracking-widest text-[var(--warmHighlight)]">Informasi</p>
      <h2 class="accentUnderline text-3xl font-semibold text-[var(--softLight)] md:text-4xl">
        Kebijakan
      </h2>
      <p class="mt-3 text-sm text-[var(--softLight)]/75">
        Hubungi kami di
        <a class="text-[var(--warmHighlight)] underline" :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>
        untuk penjelasan lebih lanjut.
      </p>
    </div>
    <div class="space-y-4">
      <div
        v-for="policy in policyItems"
        :key="policy.policyTitle"
        class="collapse sectionSurface rounded-2xl border border-[var(--darkAccent)]/60"
      >
        <input type="checkbox" />
        <div class="collapse-title text-lg font-semibold text-[var(--softLight)]">
          {{ policy.policyTitle }}
        </div>
        <div class="collapse-content">
          <ul class="list-disc space-y-2 pl-6 text-[var(--softLight)]/85">
            <li v-for="bullet in policy.bullets" :key="bullet">
              {{ bullet }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
