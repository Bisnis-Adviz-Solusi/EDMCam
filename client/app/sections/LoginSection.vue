<!-- eslint-disable vue/html-self-closing -->
// eslint-disable-next-line vue/html-self-closing

<script setup>
import { ref } from "vue";
import eyeOpen from "@/icons/EyeOpen.svg";
import eyeClosed from "@/icons/EyeClosed.svg";

//pass merem dan buka
const showPassword = ref(false);
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="card">
    <div class="container">
      <div class="containerText">
        <p class="titleText">Selamat Datang</p>
        <p class="subtitleText">Masuk ke akunmu</p>
      </div>
      <div class="containerForm">
        <div class="inputForm">
          <label for="email">E-Mail</label>
          <input id="email" type="text" placeholder="Masukkan E-mail" />
        </div>

        <div class="inputForm passwordForm">
          <label for="password">Kata Sandi</label>
          <div class="passwordWrapper">
            <input id="password" :type="showPassword ? 'text' : 'password'" placeholder="Masukkan kata sandi" />
            <img :src="showPassword ? eyeOpen : eyeClosed" alt="toggle password" class="eyeIcon" @click="togglePassword" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/mixins" as *;

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 24px;
  width: 56%;
  max-width: 536px;
  height: 100%;
  padding: 48px 40px;
  box-sizing: border-box;
  box-shadow: 0 6px 30px rgba(14, 0, 55, 1);
  background-color: #fff;
  overflow: hidden;
  color: #222;
}

.card::before {
  content: "";
  position: absolute;
  background-image: url("/LogoEDM.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.08;
  z-index: 0;
  inset: 0;
}

.card > * {
  position: relative;
  z-index: 1;
}

/* isi card */

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 82px;
  align-self: stretch;
}

/* ini buat judulnya */
.containerText {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
}

.titleText {
  color: #44174e;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.52px;
}

.subtitleText {
  color: #000;
  text-align: center;
  font-family: Gudea;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.26px;
}

/* ini buat formnya */
.containerForm {
  display: flex;
  height: 48%;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
}

.passwordForm {
  label {
    font-weight: 600;
    font-size: 14px;
    color: #1e1e2d;
    margin-bottom: 6px;
  }

  .passwordWrapper {
    position: relative;
    width: 100%;
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 2px solid #282544;
    padding: 8px 32px 8px 0;
    font-size: 16px;
    background: transparent;
    color: #1e1e2d;
    outline: none;
    transition: border-color 0.3s ease;

    &::placeholder {
      color: rgba(30, 30, 45, 0.4);
      font-style: italic;
      transition: opacity 0.2s ease;
    }

    &:focus {
      border-color: #44174e;
    }

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

  .eyeIcon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }
}
</style>
