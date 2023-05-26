<template>
  <div>
    <h1>Article Page</h1>
    <hr>
    <router-link :to="{ name: 'CreateView' }">[Create]</router-link>
    <ArticleList />
  </div>
</template>

<script>

import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'ArticleView',
  components: {
    ArticleList
  },
  computed:{
    isLogin() {
        return this.$store.getters.isLogin // 로그인 여부 => 
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
        if (this.isLogin) {
            this.$store.dispatch('getArticles')
        } else {
            alert('로그인이 필요한 서비스입니다')
            this.$router.push({ name : 'LogInView' })
        }

        this.$store.dispatch('getArticles')

        // 로그인 O => getArticles action 실행
        // 로그인 X => login 페이지로 이동
    }
  }
}
</script>

<style>

</style>
