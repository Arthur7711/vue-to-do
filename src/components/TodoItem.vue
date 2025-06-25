<script lang="ts" setup>
interface ITodo {
  id: string
  text: string
}

const props = defineProps<{ todo: ITodo; isApproved?: boolean }>()

const emit = defineEmits<{
  (e: 'approveTodo', id: string): void
  (e: 'removeTodo', id: string): void
}>()

const onApproveTodo = () => {
  emit('approveTodo', props.todo.id)
}
const onRemoveTodo = () => {
  emit('removeTodo', props.todo.id)
}
</script>
<template>
  <div class="todoItem">
    <span class="todoText" :class="{ approvedText: isApproved }">{{ todo.text }}</span>
    <div v-if="!isApproved" class="todoActions">
      <button class="approveBTN" @click="onApproveTodo">✔</button>
      <button class="removeBTN" @click="onRemoveTodo">✖</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.todoItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $white;
  padding: 10px 15px;
  margin: 10px auto;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 2px 5px $shadow-color;
  width: 100%;

  .todoText {
    font-size: 1.1rem;
    color: $text-color;
    flex: 1;
  }

  .approvedText {
    text-decoration: line-through;
  }

  .todoActions {
    display: flex;
    gap: 10px;
    margin-left: 15px;
  }

  .approveBTN,
  .removeBTN {
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .approveBTN:hover {
    color: $green;
    transform: scale(1.2);
  }

  .removeBTN:hover {
    color: $red;
    transform: scale(1.2);
  }
}
</style>
