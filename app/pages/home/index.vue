@use "sass:color"; @use "./variables" as *; @use "./mixins" as *;
<template>
  <div class="home">
    <!-- Banner Promo -->
    <section class="banner">
      <img src="/BannerPromo.png" alt="Promo Banner" class="banner-img" />
    </section>

    <!-- Post Solutions -->
    <section class="solutions">
      <h2 class="solutions-title">Hollywood’s Post Solutions</h2>
      <p class="solutions-subtitle">
        DaVinci Resolve menghadirkan teknologi gambar Emmy™ Award-Winning dengan 32-bit float processing, YRGB color science, wide gamut HDR, serta audio
        legendaris Fairlight.
      </p>
      <div class="solutions-grid">
        <div class="catcard">Live Production Switcher</div>
        <div class="catcard">Professional Camera</div>
        <div class="catcard">Chroma Keyer</div>
        <div class="catcard">Software</div>
        <div class="catcard">Disk Recorder</div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 24px;

  .banner-img {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 40px;
  }

  .highlight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-bottom: 60px;

    .highlight-text {
      h2 {
        font-size: 28px;
        font-weight: 700;
      }
      .price {
        font-size: 20px;
        color: $pink;
      }
    }

    .highlight-img img {
      max-width: 400px;
    }
  }

  .solutions {
    width: 80%;

    .solutions-title {
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 16px;
    }

    .solutions-subtitle {
      font-size: 16px;
      margin-bottom: 32px;
      color: $secondary;
    }

    .solutions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;

      .catcard {
        padding: 20px;
        border-radius: 12px;
        background: $lpurple;
        color: $white;
        font-weight: 600;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
</style>
