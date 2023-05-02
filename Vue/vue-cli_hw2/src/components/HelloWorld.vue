<template>
  <div class="hello">
    <h1>{{ msg1 }}</h1>
    <h2>{{ msg2 }}</h2>
    <h3>{{ msg3 }}</h3>
    <div>
        <span v-for="(t, idx) in time" :key="t.name">
            <button :id="'btn'+idx" @click="clickclick(idx)" :class="{bg : check(idx)}">{{t}}</button>
            <br v-if="idx % 5 == 4">
        </span>
    </div>
    <hr>
    <p>선택 시간 : {{selectedtime}}</p>
    <button @click="resetreset">reset</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg1: String,
    msg2: String,
    msg3: String,
    time: Array,
  },
  data() {
    return {
        selectedtime : [],
    }
  },
  methods : {
    check : function(value) {
        if (this.selectedtime.indexOf(this.time[value]) !== -1){
            return true
        }
        return false
    },
    clickclick : function(value) {
        if (this.selectedtime.indexOf(this.time[value]) !== -1){
            this.selectedtime.splice(this.selectedtime.indexOf(this.time[value]),1)
        } else {
            if (this.selectedtime.length < 5){
                this.selectedtime.push(this.time[value])
            }
            else if (this.selectedtime.length > 4){
            alert("5개 이상 선택할 수 없습니다.")
            }
        }
    },
    resetreset : function() {
        this.selectedtime = []
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
.bg {
    background-color: aquamarine;
}
</style>
