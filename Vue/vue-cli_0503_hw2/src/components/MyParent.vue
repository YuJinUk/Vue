<template>
  <div class="MyParent">
    <div>
        <h1>AppParent</h1>
        <input type="text" v-model="stringy" @input="onEmit">
        <br><br>
        <p>appData : {{ apptoparent }}</p>
        <p :class="onEmit2()">childData : {{ childtoparent }}</p>
    </div>

    <MyChild :apptochild="apptoparent" :parenttochild="stringy" @childtoparentevent="childtoparentmethods"/>
  </div>
</template>

<script>

import MyChild from '@/components/MyChild'

export default {
  name: 'MyParent',
  components: {
    MyChild
  },
  props: {
    apptoparent:String,
  },
  data() {
    return {
        stringy : "",
        childtoparent: "",
    }
  },
  methods: {
    childtoparentmethods(value) {
        this.childtoparent = value
        console.log('value', value)
    },
    onEmit() {
        this.$emit("parenttoappevent", this.stringy)
    },
    onEmit2() {
        this.$emit("childtoappevent", this.childtoparent)
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
