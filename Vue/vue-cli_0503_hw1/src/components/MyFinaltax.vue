<template>
  <div class="MyFinaltax">
    <h2 :class="result()">결정세액 : {{ answer }}</h2>
  </div>
</template>

<script>
export default {
  name: 'MyFinaltax',
  props: {
    checkminustax: Number,
    checktaxbase: Number,
  },
  data() {
    return {
        answer : 0,
    }
  },
  methods : {
    result() {
        this.answer = this.checktaxbase - this.checkminustax
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
