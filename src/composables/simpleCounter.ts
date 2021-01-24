import { Ref, ref } from 'vue'

interface SimpleCounter {
  count    : Ref<number>,
  decrement: () => void,
  increment: () => void,
  reset    : () => void
}

export default function simpleCounter(): SimpleCounter {
  // State
  const INITIAL_COUNT = 0
  const count = ref(INITIAL_COUNT)

  // Methods
  const decrement = (): void => { count.value-- }
  const increment = (): void => { count.value++ }
  const reset = (): void => { count.value = INITIAL_COUNT }

  return {
    count,
    decrement,
    increment,
    reset
  }
}