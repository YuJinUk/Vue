<template>
  <div id="app">
    <MyIncome title="소득세 계산기"/>
  </div>
</template>

<script>
import MyIncome from './components/MyIncome.vue'

export default {
  name: 'App',
  components: {
    MyIncome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
