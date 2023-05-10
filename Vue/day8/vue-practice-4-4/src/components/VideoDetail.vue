<template>
  <div v-if="video">
    <h2>Video Detail</h2>
    <iframe 
    id="ytplayer" 
    :src="videoURl" 
    frameborder="0" 
    allowfullscreen="allowfullscreen">
    </iframe>
    <br><br>
    {{video.snippet.title}}
  </div>
</template>

<script>
export default {
    name: 'VideoDetail',
    props: {
        video: {
            type: Object,
        }
    },
    computed: {
        videoURl() {
            const videoId = this.video.id.videoId
            return `https://www.youtube.com/embed/${videoId}`
        }
    }
}
</script>

<style>

</style>