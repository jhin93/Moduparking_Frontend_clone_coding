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
    <div class="body">
      <div class="sector_1">
        <div class="sector_1_text">
          <div class ="sector_1_main">
            <a class="b1">
              모두가 사용하는<br>
              쉽고 편리한 주차 플랫폼
            </a>
          </div>
          <div class="sector_1_sub">
            <a class="t__body">
              주차와 관련한 니즈를 가진 모두를 연결하여<br>
              더 편리하고 합리적인 주차문화를 만들어가는<br>
              온라인 주차문화 플랫폼입니다.
            </a>
          </div>
        </div>
      </div>
    </div>
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
  height: 160px;
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
  background-color: beige;
}
.sector_1{
  width: 1440px;
  height: 700px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sector_1_text{
  width: 1170px;
  height: 440px;
  background-color: lightgreen;
}
.sector_1_main{
  width: 1170px;
  height: 210px;
  background-color: aqua;
}
.sector_1_sub{
  width: 1170px;
  height: 195px;
  background-color: bisque;
}
.v-btn{
  background-color: blue;
}
</style>
