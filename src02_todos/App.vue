<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header/>
      <List :todos="todos"/>
      <Footer :todos="todos" :setAll="setAll" :deleteCompletedTodos="deleteCompletedTodos"  />
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import {saveTodos, readTodos} from './utils/storageUtils'

export default {
  data() {
    return {
      todos: []
    }
  },
  mounted(){
    PubSub.subscribe('updateTodo',(msg,{todo,isCheck})=>{
        this.updateTodo(todo,isCheck)
    })
    this.$globalEventBus.$on('deleteTodo',this.deleteTodo)
    this.$globalEventBus.$on('addTodo',this.addTodo)
    //模拟异步读取数据
    setTimeout(()=>{
      //读取local中保存的todos，更新数据
      this.todos=readTodos()
    },1000)
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    deleteCompletedTodos(){
      this.todos=this.todos.filter(todo=>!todo.completed)
    },
    setAll(isSetAll){
        this.todos.forEach(todo=>todo.completed=isSetAll)
    },
    updateTodo(todo,isCheck){
      todo.completed=isCheck
    }
  },
  components: {
    Header,
    List,
    Footer
  },
  watch:{
    todos:{
      deep:true,  //深度监视(本身和内部所有层次的数据)
      handler:saveTodos
      
    }
  }
}
</script>

<style scoped>

</style>
