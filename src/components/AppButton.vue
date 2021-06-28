<template>
  <button><slot /></button>
</template>

<style scoped>
button {
  display: inline-block;
  border-radius: 6px;
  padding: 0 20px;
  line-height: 44px;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: var(--c-brand);
  border: 2px solid var(--c-brand);
  text-align: center;
  text-decoration: none;
}
</style>