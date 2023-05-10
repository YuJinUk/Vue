<template>
  <div class="home">
    <VideoList msg="SSAFY Tube" :videos="videos" @select-video="SelectVideo" />
    <VideoDetail :video="selectedVideo"/>
    <br><br>
    <TheSearchBar @input-change="onInputKeyword"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheSearchBar from '@/components/TheSearchBar.vue'
import VideoList from '@/components/VideoList.vue'
import VideoDetail from '@/components/VideoDetail.vue'
// import YouTubeIframeLoader from 'youtube-iframe'
import axios from 'axios'

const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = process.env.VUE_APP_YOUTUBE_KEY

export default {
  name: 'HomeView',
  components: {
    TheSearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return {
        inputValue: null,
        videos: [],
        selectedVideo: null,
    }
  },
  methods: {
    SelectVideo(video) {
        this.selectedVideo = video
    },
    onInputKeyword(inputText) {
        this.inputValue = inputText
        console.log('뭐씀?', this.inputValue)
        const params = {
            key: API_KEY,
            part: 'snippet',
            type: 'video',
            q: this.inputValue,
        }
        axios({
            method: 'get',
            url: API_URL,
            params
        })
        .then((result) => {
            this.videos = result.data.items
            console.log(this.videos)
        })
        .catch(error => {
            console.log(error)
        })
    },
  }
}
</script>
