<template>
  <div class="hello">
    <h1 style="color:skyblue">{{ msg }}</h1>
    <li v-for="video in videos" :key="video.id.videoId">
        <img :src="video.snippet.thumbnails.default.url" alt="썸네일" @click="SelectVideo(video)">
        <br><br><br>
    </li>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    videos: {
        type: Array,
        required: true,
    }
  },
  data() {
    return {
        boardList: [],
    }
  },
  methods: {
    SelectVideo(video) {
        this.$emit('select-video', video)
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
