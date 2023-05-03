<template>
  <div class="MyIncome">
    <h1>{{ title }}</h1>
    연봉 입력 (만원):  <input type="number" v-model.number="checkincome" :class="checktaxbasemethod()">
    <br><br>
    세액감면액 (만원): <input type="number" v-model.number="checktax">
    <hr>
    <h2>종합소득금액 : {{ checkincome }} 만원</h2>
    <h2>종합소득공제 : (-) 150 만원 </h2>
    <h2 :class="checktaxbasemethod()">과세표준 : {{ checktaxbase }} 만원</h2>
    <hr>
    <MyTaxrate :taxBase="checktaxbase" :minustax="checktax"/>
  </div>
</template>

<script>

import MyTaxrate from '@/components/MyTaxrate'

export default {
  name: 'MyIncome',
  components: {
    MyTaxrate,
  },
  props: {
    title: String
  },
  data() {
    return {
        checkincome : 0,
        checktax : 0,
        checktaxbase : 0,
    }
  },
  methods : {
    checktaxbasemethod() {
        console.log('인컴뷰',typeof this.checkincome)
        this.checktaxbase = this.checkincome - 150
    }
  },
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
