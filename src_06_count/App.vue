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
export default {
  name: "App",
  data(){
    return {
      count:0
    }
  },
  computed:{
    evenOrOdd(){
      return this.count % 2 === 1 ? '奇数':'偶数'
    }
  },
  methods:{
    increment(){
      const count=this.count++
      return count
    },
    decrement(){
      if(this.count===0){
        return
      }else {
        this.count--
      }
    },
    incrementIfodd(){
        if(this.count%2===1){
          this.count++;
        }
    },
    incrementAsync(){
      setTimeout(()=>{
        this.count++
      },1000)
    }
  }
}
</script>

<style scoped>

</style>