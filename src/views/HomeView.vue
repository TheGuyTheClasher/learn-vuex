<template>
  <div class="home">
    <p class="title">Learn Vuex</p>
    
    <Counter />
    <CounterSqaured />
    <ButtonsComponent />
    <ColorCode />
    
    
  </div>
</template>

<script>
  import Counter from '../components/counter.vue';
  import CounterSqaured from '../components/counterSquared.vue'
  import ButtonsComponent from '../components/buttons.vue'
  import ColorCode from '../components/ColorCode.vue'

export default {
  name: 'HomeView',
  components: {
    Counter,
    CounterSqaured,
    ButtonsComponent,
    ColorCode
  },
  
}
</script>

<style>
div{
  margin-bottom: 10px;
}

.title{
  font-size: 60px;
  color: olive;
}

.counter{
  font-size: 50px;
}
.buttons button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
