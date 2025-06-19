import { ref } from 'vue'
interface todoItem {
  id: string
  text: string
}

function todoStore() {
  const todos = ref<todoItem[]>([])
  const addTodo = (todo: todoItem) => {
    todos.value.push(todo)
  }
  const removeTodo = (id: string) => {
    todos.value = todos.value.filter((el) => el.id === id)
  }
  return { todos, addTodo, removeTodo }
}

export const { todos, addTodo, removeTodo } = todoStore()
