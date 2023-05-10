<template>
  <div class="home">
    <HelloWorld msg="Cat Image"/>
    <p v-if="!imgSrc">{{ message }}</p>
    <img v-if="imgSrc" :src="imgSrc" alt="" style="width:300px; height:300px;">
    <br>
    <button @click="getCatImage()">Get Cat</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

const CatURL = "https://api.thecatapi.com/v1/images/search"

export default {
    name: 'HomeView',
    components: {
        HelloWorld,
    },
    data() {
        return {
            imgSrc: null,
            message: "로딩중....",
        }
    },
    methods: {
        getCatImage() {
            const catImageSearchURL = CatURL
            axios({
                method: 'get',
                url: catImageSearchURL
            })
            .then((response) => {
                console.log(response)
                console.log(response.data)
                const imgSrc = response.data[0].url
                this.imgSrc = imgSrc
                console.log('imgSrc', this.imgSrc)
            })
            .catch((error) => {
                console.log(error)
                this.message = `F5를 누르세요.`
            })
        }
    },
    created() {
        this.getCatImage()
    },
}
</script>

<style>

</style>
