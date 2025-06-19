<script setup lang="ts">
import { computed, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

import Logo from '@/assets/logo.png'
import { addTodo, todos } from '@/store'

const todoValue = ref('')
const canAddTodo = computed(() => !!todoValue.value)
const addItem = () => {
  if (canAddTodo.value) {
    addTodo({ text: todoValue.value, id: uuidv4() })
    todoValue.value = ''
  }
}
</script>

<template>
  <section class="container">
    <div class="imageBox">
      <img alt="logo" :src="Logo" class="logo" />
    </div>
    <div class="actionBox">
      <input v-model="todoValue" class="todoAdder" />
      <button class="addButton" @click="addItem">add</button>
    </div>
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
  .actionBox {
    display: flex;
    align-items: center;
    gap: 20px;
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

    .addButton {
      padding: 12px 16px;
      font-size: 18px;
      border: 2px solid $border-color;
      border-radius: 10px;
      transition: all 0.3s ease;
      background-color: $inpute-bg-color;
      color: $text-color;
      cursor: pointer;

      &:active {
        background-color: $focused-border-color;
        color: $white;
      }
    }
  }
}
</style>
