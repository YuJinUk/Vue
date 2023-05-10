<template>
  <div>
    <h1>
        점심 메뉴
    </h1>
    <button @click="choiceMenu"> Pick Lunch </button>
    <br>
    <div>{{ pickmenu }}</div>
    <br><br>
    <h1>
        로또를 뽑아보자
    </h1>
    <button @click="gotolotto">Pick Lotto</button>
  </div>
</template>

<script>
export default {
    name: 'TheLunch',
    data() {
        return {
            menu: ['돼지국밥','수육국밥','뼈해장국','제육볶음','돈가스','서브웨이'],
            pickindex: Math.floor(Math.random()*6),
            pickmenu: "",
            
        }
    },
    methods: {
        choiceMenu() {
            this.pickindex = Math.floor(Math.random()*6),
            this.pickmenu = this.menu[this.pickindex]
        },
        gotolotto() {
            this.$router.push({name: 'TheLotto'})
        },
    },
}
</script>

<style>

</style>