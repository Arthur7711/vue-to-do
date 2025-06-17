<script setup lang="ts">
import Logo from "@/assets/logo.png";
import { ref } from "vue";

const todoValue = ref("");
</script>

<template>
  <section class="container">
    <div class="imageBox">
      <img alt="logo" :src="Logo" class="logo" />
    </div>
    <input v-model="todoValue" class="todoAdder" />
  </section>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .imageBox {
    display: flex;
    justify-content: center;
    height: 200px;

    .logo {
      height: 100%;
    }
  }

  .todoAdder {
    width: 300px;
    padding: 12px 16px;
    font-size: 18px;
    border: 2px solid $border-color;
    border-radius: 10px;
    outline: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px $shadow-color;
    background-color: $inpute-bg-color;
    color: $text-color;
    display: block;

    &:focus {
      border-color: $focused-border-color;
      box-shadow: 0 0 10px $focuded-shadow-color;
    }
  }
}
</style>
