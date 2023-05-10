<template>
  <div>
    <h1> hello, {{ userName }} </h1>
  </div>
</template>

<script>
export default {
    name: 'HellowView',
    data() {
        return {
            userName: this.$route.params.userName
        }
    },
}
</script>

<style>

</style>