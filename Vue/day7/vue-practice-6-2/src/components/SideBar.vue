<template>
  <div>
    <nav>
      <router-link to="/">모든</router-link>
      <br><br>
      <router-link to="/today">오늘</router-link>
      <br><br>
      <router-link to="/important">중요</router-link>
      <br>
    </nav>
  </div>
</template>

<script>

export default {
    name: 'SideBar',
}
</script>

<style>

</style>