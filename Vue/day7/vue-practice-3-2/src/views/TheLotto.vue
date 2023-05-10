<template>
  <div>
    <h1>
        로또
    </h1>
    <button @click="choiceNumber">Get Lucky Numbers</button>
    <p>{{ number }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'TheLotto',
    data(){
        return {
            number: "",
        }
    },
    methods: {
        choiceNumber() {
            this.number = ""
            for (let i=0; i<6; i++) {
                  this.number += (String(_.sample(_.range(1,46))) + " ")
                }
        }
    }
}
</script>

<style>

</style>