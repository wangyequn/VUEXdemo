<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Index></Index>
    <List></List>
  </div>
</template>

<script>
import Index from '@/pages/index'
import List from '@/pages/list'
import store from './store'
export default {
  name: 'app',
  components: {
    Index,
    List
  },
  store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
