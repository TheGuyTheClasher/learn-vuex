import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    count: 0,
    colorCode: 'red'
  },
  getters: {
    countSquared(state){
      return state.count * state.count
    }
  },
  mutations: {
    incrementCounter(state, randomNum){
      state.count += randomNum;
    },
    decrementCounter(state, randomNum){
      state.count -= randomNum;
    },
    setColorCode(state, newColor){
      state.colorCode = newColor
    }
  },
  actions: {
    incrementCounter({commit}){
      axios.get('https://www.random.org/integers/?num=1&min=1&max=10&col=5&base=10&format=plain&rnd=new')
      .then((response) => {
        commit('incrementCounter', response.data)
      })
    },
    decrementCounter({commit}){
      axios.get('https://www.random.org/integers/?num=1&min=1&max=10&col=5&base=10&format=plain&rnd=new')
      .then((response) => {
        commit('decrementCounter', response.data)
      })
    },
    setColorCode({commit}, newValue){
      commit('setColorCode', newValue);
    }
  },
  modules: {
  }
})
