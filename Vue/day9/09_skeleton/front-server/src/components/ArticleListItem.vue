<template>
  <div>
    <h5>PK : {{ article.id }}</h5>
    <p>작성자 : {{ article.username }} </p>
    <p>제목 : {{ article.title }}</p>
    <router-link :to="{ name: 'DetailView', params: {id: article.id}}">[Detail]</router-link>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    article: Object,
  },
}
</script>

<style>

</style>
