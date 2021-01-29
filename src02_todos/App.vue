<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <Footer :todos="todos"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default {
  data() {
    return {
      todos: [
        {id: 1, title: '睡觉', completed: false},
        {id: 2, title: '学习', completed: true},
        {id: 3, title: '打游戏', completed: false},
      ]
    }
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    }
  },
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style scoped>

</style>