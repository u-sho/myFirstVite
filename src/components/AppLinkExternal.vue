<template>
  <a
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
  ><slot /></a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name        : 'AppLinkExternal',
  inheritAttrs: false,

  props: {
    to: {
      required : true,
      type     : String,
      validator: (to: string) => to.startsWith('https://')
    }
  }
})
</script>

<style scoped>
a {
  color: var(--c-brand);
}
</style>