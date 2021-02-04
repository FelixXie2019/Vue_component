<template>
  <div>
    <p>click {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfodd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>

/*
  store对象
  1.state 包含所有state数据的对象
  2.getters:包含所有getter计算属性的对象
  3.dispatch(actionName,data)
  4.commit(mutationName,data)
 */
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "App",
  computed:{
    // count(){
    //   return this.$store.state.count
    // },
    // evenOrOdd(){
    //   return this.$store.getters.evenOrOdd
    // }
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },
  methods:{
    // increment(){
    //   this.$store.commit('increment')
    // },decrement(){
    //   this.$store.commit('decrement')
    // },
    // incrementIfodd(){
    //   this.$store.dispatch('incrementIfodd')
    // },
    // incrementAsync(){
    //   this.$store.dispatch('incrementAsync')
    // },
    ...mapActions(['incrementIfodd','incrementAsync']),
    ...mapMutations({
      increment:'increment',
      decrement:'decrement'
    })
  }
}
</script>

<style scoped>

</style>