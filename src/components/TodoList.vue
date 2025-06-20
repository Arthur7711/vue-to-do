<script lang="ts" setup>
import TodoItem from './TodoItem.vue'
import { todos } from '@/store'
</script>
<template>
  <template v-if="todos.length">
    <TodoItem v-for="todo of todos" :key="todo.id" :todo="todo" />
  </template>
</template>
<style scoped lang="scss"></style>
