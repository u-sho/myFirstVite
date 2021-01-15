import { ref } from "vue"

export default function simpleCounter() {
  const count = ref(0)

  const decrement = () => count.value--
  const increment = () => count.value++
  const reset = () => count.value=0

  return {
    count,
    decrement,
    increment,
    reset
  }
}