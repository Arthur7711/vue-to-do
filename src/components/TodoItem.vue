<script lang="ts" setup>
interface ITodo {
  id: string
  text: string
}

defineProps<{ todo: ITodo }>()

const emit = defineEmits({
  removeTodo: (id: string) => {},
  approveTodo: (id: string) => {},
})
</script>
<template>
  <div class="todo-item">
    <span class="todo-text">{{ todo.text }}</span>
    <div class="todo-actions">
      <button class="approve-btn">✔</button>
      <button class="remove-btn">✖</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $white;
  padding: 10px 15px;
  margin: 10px auto;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 2px 5px $shadow-color;
}

.todo-text {
  font-size: 1.1rem;
  color: $text-color;
  flex: 1;
}

.todo-actions {
  display: flex;
  gap: 10px;
  margin-left: 15px;
}

.approve-btn,
.remove-btn {
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.approve-btn:hover {
  color: $green;
  transform: scale(1.2);
}

.remove-btn:hover {
  color: $red;
  transform: scale(1.2);
}
</style>
