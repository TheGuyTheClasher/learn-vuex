<template>
  <div>
        <p>Change the color of number</p>
      <input
        v-model="colorCode"
        type="text"
        placeholder="enter color"
        id="colorCode">
    </div>
</template>

<script>
export default {
    name: 'ColorCode',
    computed:{
    colorCode:{
      get(){
        return this.$store.state.colorCode
      },
      set(newValue){
        this.$store.dispatch('setColorCode', newValue)
      }
    }
  }
}
</script>

<style>
</style>