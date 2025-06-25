import { ref } from 'vue'
interface todoItem {
  id: string
  text: string
}

function todoStore() {
  const todos = ref<todoItem[]>([])
  const approvesTodos = ref<todoItem[]>([])
  const addTodo = (todo: todoItem) => {
    todos.value.push(todo)
  }
  const removeTodo = (id: string) => {
    todos.value = todos.value.filter((el) => el.id !== id)
  }
  const approveTodo = (id: string) => {
    const todoItem = todos.value.find((el) => el.id === id)
    todos.value = todos.value.filter((el) => el.id !== id)
    approvesTodos.value.push(todoItem!)
  }
  return { todos, approvesTodos, addTodo, removeTodo, approveTodo }
}

export const { todos, approvesTodos, addTodo, removeTodo, approveTodo } = todoStore()
