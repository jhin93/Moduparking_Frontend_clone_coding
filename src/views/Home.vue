<template>
  <div class="home">
    <!--Header-->
    <div class="header">
      <!--Navigator    -->
      <div class="logo">
        <h1>모두의 주차장</h1>
      </div>
      <div class="nav">
        <navigator />
      </div>
    </div>
    <!--Body    -->
    <div class="body"></div>
    <!--footer    -->
    <div></div>
    <!--side menu    -->
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import navigator from '@/components/the_navigation.vue'

export default {
  name: 'Home',
  components: {
    navigator
  }
}
</script>

<style scoped>
.header {
  width: 1440px;
  height: 162px;
  display: flex;
  align-items: center;
  background-color: aliceblue;
}
.logo {
  background-color: antiquewhite;
  width: 15%;
  margin-left: 75px;
  margin-right: 150px;
}
.body {
  width: 1440px;
  height: 4800px;
}
</style>
