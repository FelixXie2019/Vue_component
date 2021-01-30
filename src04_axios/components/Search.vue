<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName">
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      searchName:''
    }
  },
  methods:{
    search(){
      const searchName=this.searchName.trim();
      //分发自定义事件(search)
      if(searchName){
        this.$eventBus.$emit('search',searchName)
        this.searchName=''
      }
    }
  }
}
</script>

<style scoped>

</style>