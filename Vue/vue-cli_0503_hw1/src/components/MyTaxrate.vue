<template>
  <div class="MyTaxrate">
    <h2>산출세액 : {{ calculator() }}</h2>
    <h2>세액감면 : (-) {{ minustax }}</h2>
    <hr>
    <MyFinaltax :checkminustax="minustax" :checktaxbase="taxbase"/>
  </div>
</template>

<script>

import MyFinaltax from '@/components/MyFinaltax'

export default {
  name: 'MyTaxrate',
  components: {
    MyFinaltax
  },
  props: {
    taxBase: Number,
    minustax: Number,
  },
  data() {
    return {
        resulttax : 0,
        taxbase : 0,
    }
  },
  methods : {
    calculator() {
        console.log('taxrate',typeof this.taxBase)
        console.log(this.taxBase)
        if (this.taxBase <= 1200) {
            this.taxbase = Math.round(this.taxBase * 0.06)
            return Math.round(this.taxBase * 0.06)
        } else if (this.taxBase > 1200 && this.taxBase <= 4600) {
            this.taxbase = Math.round(this.taxBase * 0.15 - 108)
            return Math.round(this.taxBase * 0.15 - 108)
        } else if (this.taxBase > 4600 && this.taxBase <= 8800) {
            this.taxbase = Math.round(this.taxBase * 0.24 - 522)
            return Math.round(this.taxBase * 0.24 - 522)
        } else if (this.taxBase > 8800 && this.taxBase <= 15000) {
            this.taxbase = Math.round(this.taxBase * 0.35 - 1490)
            return Math.round(this.taxBase * 0.35 - 1490)
        } else if (this.taxBase > 15000 && this.taxBase <= 30000) {
            this.taxbase = Math.round(this.taxBase * 0.38 - 1940)
            return Math.round(this.taxBase * 0.38 - 1940)
        } else if (this.taxBase > 30000 && this.taxBase <= 50000) {
            this.taxbase = Math.round(this.taxBase * 0.4 - 2540)
            return Math.round(this.taxBase * 0.4 - 2540)
        } else if (this.taxBase > 50000 && this.taxBase <= 100000) {
            this.taxbase = Math.round(this.taxBase * 0.42 - 3540)
            return Math.round(this.taxBase * 0.42 - 3540)
        } else {
            this.taxbase = Math.round(this.taxBase * 0.45 - 6540)
            return Math.round(this.taxBase * 0.45 - 6540)
        }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
