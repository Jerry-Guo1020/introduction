<template>
  <n-message-provider>
    <NavBar></NavBar>
    <router-view></router-view> <!-- 主内容 -->

  <div class="app">
    <!-- <Home></Home> -->
  
</div>

</n-message-provider>

</template>

<script lang="ts">

// import Home from './components/home.vue';
import Login from './components/Login.vue';
import NavBar from './components/NavBar.vue'
import NoToSee from './components/no_to_see.vue';

export default {
  name: 'App',
  components: {
    NoToSee,
    // Home
    Login,
    NavBar
  }
}
</script>

<style>

</style>