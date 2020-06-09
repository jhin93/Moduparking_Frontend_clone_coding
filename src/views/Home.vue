<template>
  <div class="home">
    <!--Header    -->
    <div></div>
    <!--Navigator    -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/terms">Terms</router-link>
    </div>
    <!--Body    -->
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <!--footer    -->
    <div></div>
    <!--side menu    -->
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
