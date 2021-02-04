<template>
  <div>
    <ul>
      <li v-for="(m,index) in messages" :key="m.id">
        <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
        <button @click="pushShow(m.id)">--通过push显示</button>
        <button @click="replaceShow(m.id)">--通过replace显示</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <hr>

    <router-view></router-view>
  </div>

</template>

<script>
export default {
  data(){
    return {
      messages:[]
    }
  },
  mounted(){
    //模拟发送异步ajax请求获取消息列表数据
    setTimeout(()=>{
      const messages=[
          {id:1,title:'message001'},
          {id:3,title:'message003'},
           {id:4,title:'message004'}
      ]
      this.messages=messages
    },1000)
  },
  methods:{
    pushShow(id){
      //编程式路由导航（跳转)
      this.$router.push(`/home/message/detail/${id}`)
    },
    replaceShow(id){
      this.$router.replace(`/home/message/detail/${id}`)
    }
  }
}
</script>

<style scoped>

</style>