<template>
  <div
      :style="{color: $store.state.colorCode}"
      class="counter">
      <p >{{$store.state.count}}</p>
    </div>
</template>

<script>
export default {
    name: 'Counter'

}
</script>

<style>

</style>