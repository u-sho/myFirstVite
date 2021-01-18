import { Ref, ref } from 'vue'

interface SimpleCounter {
  count: Ref<number>,
  decrement: () => void,
  increment: () => void,
  reset: () => void
}

export default function simpleCounter(): SimpleCounter {
  // state
  const INITIAL_COUNT=0
  const count = ref(INITIAL_COUNT)

  // methods
  const decrement = () => { count.value-- }
  const increment = () => { count.value++ }
  const reset = () => { count.value = INITIAL_COUNT }

  return {
    count,
    decrement,
    increment,
    reset
  }
}