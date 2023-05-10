<template>
  <div>
    <h1 v-if="breed_name">{{breed_name}}</h1>
    <p v-if="!imgSrc">{{ message }}</p>
    <img v-if="imgSrc" :src="imgSrc" alt="">
    <br>

  </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'DogView',
    data() {
        return {
            imgSrc: null,
            message: "로딩중....",
            breed_name: '',
        }
    },
    methods: {
        getDogImage() {
            const breed = this.$route.params.breed
            const dogImageSearchURL = `https://dog.ceo/api/breed/${breed}/images/random`
            this.breed_name = breed
            axios({
                method: 'get',
                url: dogImageSearchURL
            })
            .then((response) => {
                console.log(response)
                const imgSrc = response.data.message
                this.imgSrc = imgSrc
            })
            .catch((error) => {
                console.log(error)
                // this.message = `${breed}는 없는 품종입니다.`
                this.$router.push('/NotFound404')
            })
        }
    },
    created() {
        this.getDogImage()
    },
}
</script>

<style>

</style>