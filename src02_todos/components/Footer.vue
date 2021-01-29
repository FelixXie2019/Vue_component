<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" @click="allCompleted" v-model="allCompleted">
    </label>
    <span>
          <span>已完成 {{ checkCompleted }}</span> / 全部 {{ todos.length }}
    </span>
        
    <button class="btn btn-danger" @click="deleteCompletedTodos" v-show="checkCompleted>0">清除已完成任务</button>
    
  </div>
</template>

<script>
export default {
  props: ['todos', 'deleteCompletedTodos', 'setAll'],
  computed: {
    checkCompleted() {
      let completedLength = 0;
      let total = 0;
      this.todos.forEach((value) => {
        completedLength = value.completed ? 1 : 0
        total += completedLength;
      })
      return total
      // return this.todos.reduce((preTotal,todo,index)=>preTotal+(todo.completed?1:0),0)
    },
    allCompleted: {
      get() {
        return this.todos.length === this.checkCompleted && this.checkCompleted>0
      },
      set(value) {
        this.setAll(value)
      }
    }
  },

}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>