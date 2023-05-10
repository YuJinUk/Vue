<template>
  <div id="app">
    <div class="container">
        <nav class="row">
            <div class="col-3 border" style="min-height: 100vh">
                <SideBar />
            </div>
            <div class="col-1"></div>
            <div class="col-8 border">
                <p class="m-3">
                    <router-view/>
                </p>
            </div>
        </nav>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'

export default ({
    name: 'App',
    components: {
        SideBar,
    }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


</style>
