<template>
  <div id="app">
    <div class="container">
        <h1>App</h1>
        <input type="text" v-model="stringx">
        <br><br>
        <p>parentData : {{ parenttoapp }}</p>
        <p>childData : {{ childtoapp }}</p>
    </div>
    <MyParent :apptoparent="stringx" @parenttoappevent="parenttoappmethods" @childtoappevent="childtoappmethods"/>
  </div>
</template>

<script>
import MyParent from './components/MyParent.vue'

export default {
  name: 'App',
  components: {
    MyParent
  },
  data() {
    return {
    stringx : "",
    parenttoapp : "",
    childtoapp: "",
    }
  },
  methods : {
    parenttoappmethods(value) {
        this.parenttoapp = value
        console.log('parenttoapp', value)
    },
    childtoappmethods(value) {
        this.childtoapp = value
        console.log('childtoapp',value)
    }
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
