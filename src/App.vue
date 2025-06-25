<script setup lang="ts">
import TodoAdder from './components/TodoAdder.vue'
import TodoList from './components/TodoList.vue';
</script>

<template>
  <main class="todoContainer">
    <TodoAdder />
    <TodoList />
  </main>
</template>

<style scoped lang="scss">
.todoContainer {
  height: 100vh;
  overflow: hidden;
}
</style>
