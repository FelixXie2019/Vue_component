<template>
  <div>
    <h2 class="test">Blog列表</h2>
    <ul>
      <Blog v-for="(blog,index) in blogs" :key="blog.id" :blog="blog" />
    </ul>
  </div>
</template>

<script>
import Blog from './Blog.vue'
export default {
  data(){
    return {
      blogs:[
        {id:1,title:'Blog1111'},
        {id:2,title:'Blog2222'},
        {id:3,title:'Blog3333'},
      ]
    }
  },
  components:{
    Blog
  }
}
</script>

//限制当前组件的样式只对当前组件有效，对外部组件和内部的其他组件无效
<style scoped>
h2{
  color: red;
}
</style>