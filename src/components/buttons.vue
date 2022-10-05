<template>
  <div class="buttons">
      <button @click="$store.dispatch('decrementCounter')">-</button>
      <button @click="$store.dispatch('incrementCounter')">+</button>
    </div>
</template>

<script>
export default {
    name: 'ButtonsComponent'
}
</script>

<style>

</style>