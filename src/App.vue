<template>
  <div>
      <p v-if="!repoName">loading...</p>
      <p v-else>
          most star repo is
          <a href="repoUrl">{{repoNmae}}</a>
      </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
        repoName:'',
        repoUrl:'',
    }
  },
  methods: {},
}
</script>

<style type="text/css" scoped>
</style>
