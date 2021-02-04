<template>
  <div>
    <h2>Home</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link to="/home/news">News</router-link>
      </li>
      <li>
        <router-link to="/home/message">Message</router-link>
      </li>
    </ul>
<!--    在此显示路由组件-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name:'Home'
}
</script>

<style scoped>

</style>