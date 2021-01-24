<template>
  <h1>{{ msg }}</h1>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
      rel="noopener noreferrer"
    >Vite Documentation</a> |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >Vue 3 Documentation</a>
  </p>

  <p>
    Recommended setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
      rel="noopener noreferrer"
    >VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
      rel="noopener noreferrer"
    >Vetur</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features"
      target="_blank"
      rel="noopener noreferrer"
    >Vue DX</a>
  </p>
  <p>
    Make sure to use workspace version of TypeScript to get improved support via
    <a
      href="https://github.com/znck/vue-developer-experience"
      target="_blank"
      rel="noopener noreferrer"
    >@vuedx</a>.
    <br>Note @vuedx is still experimental and this setup is provided for early feedback.
  </p>
  <p>
    Count is: {{ count }}
  </p>
  <button @click="increment">
    increment count
  </button>
  <button @click="decrement">
    decrement count
  </button>
  <button @click="reset">
    reset count
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import simpleCounter from '@/composables/simpleCounter'

export default defineComponent({
  name: 'HelloWorld',

  props: {
    msg: {
      required: true,
      type    : String
    }
  },

  setup: () => {
    const { count, increment, decrement, reset } = simpleCounter()
    return { count, increment, decrement, reset }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>