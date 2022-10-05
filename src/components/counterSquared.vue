<template>
  <div class="counter-squared">
      {{$store.state.count}}
      <sup>2</sup> = 
      {{ $store.getters.countSquared }}
    </div>
</template>

<script>
export default {
    name: 'CounterSqaured'
}
</script>

<style>

</style>