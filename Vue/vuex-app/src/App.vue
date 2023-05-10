<template>
  <div id="app">
    <h1>{{ message }}의 길이는 {{ messageLength }}</h1>
    <h2>*2 = {{ doubleLength }}</h2>
    <input type="text" @keyup.enter="changeMessage" v-model="inputData">
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
    inputData: null,
    }
  },
  computed: {
    message() {
        return this.$store.state.message
    },
    messageLength() {
        return this.$store.getters.messageLength
    },
    doubleLength() {
        return this.$store.getters.doubleLength
    }
  },
  methods: {
    changeMessage() {
        const newMessage = this.inputData
        // this.$store.dispatch('actions 이름', data) : actions 이름을 가진 methods를 실행
        this.$store.dispatch('changeMessage', newMessage)
        this.inputData = null
    }
  },
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
