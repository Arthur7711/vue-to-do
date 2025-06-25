<script lang="ts" setup>
import TodoItem from './TodoItem.vue'
import { todos, approvesTodos, approveTodo, removeTodo } from '@/store'
</script>
<template>
  <main class="lists">
    <div class="list">
      <h1 class="title">Todo List</h1>
      <template v-if="todos.length">
        <TodoItem
          v-for="todo of todos"
          :key="todo.id"
          :todo="todo"
          @remove-todo="removeTodo"
          @approve-todo="approveTodo"
        />
      </template>
    </div>
    <div class="list">
      <h1 class="title">Approved Todos</h1>
      <template v-if="approvesTodos.length">
        <TodoItem v-for="todo of approvesTodos" :key="todo.id" :todo="todo" is-approved />
      </template>
    </div>
  </main>
</template>
<style scoped lang="scss">
.lists {
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 30px 0;
  border-top: 4px solid $white;
  height: calc(100vh - 270px);
  overflow: auto;

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    &:nth-child(1) {
      border-right: 4px dashed $gray;
    }
  }

  .title {
    color: $text-color;
    font-weight: 700;
  }
}
</style>
