import { ref } from 'vue'

const INITIAL_COUNT = 0

// State
const count = ref(INITIAL_COUNT)

// Methods
const decrement = (): void => { count.value-- }
const increment = (): void => { count.value++ }
const reset = (): void => { count.value = INITIAL_COUNT }

export default {
  count,
  decrement,
  increment,
  reset
}