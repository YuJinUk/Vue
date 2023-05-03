<template>
  <div class="MyChild">
    <div>
        <h1>AppChild</h1>
        <input type="text" v-model="stringz" @input="onEmit">
        <br><br>
        <p>appData : {{ apptochild }}</p>
        <p>parentData : {{ parenttochild }}</p>
        <p>childData : {{ stringz }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyChild',
  props: {
    apptochild: String,
    parenttochild: String,
  },
  data() {
    return {
        stringz : "",
    }
  },
  methods : {
    onEmit() {
        this.$emit("childtoparentevent", this.stringz)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
