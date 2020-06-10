<template>
  <div class="home">
    <!--Header-->
    <!-- <div class="header"> -->
      <!--Navigator    -->
      <!-- <div class="logo">
        <h1>모두의 주차장</h1>
      </div>
      <div class="nav">
        <navigator />
      </div>
    </div> -->
    <!--Body-->
    <div class="body">
      <div class="sector-1">
        <div class="sector-1-content">
          <div class ="sector-1-main">
            <a class="b1">
              모두가 사용하는<br>
              쉽고 편리한 주차 플랫폼
            </a>
          </div>
          <div class="sector-1-sub">
            <a class="t__title">
              주차와 관련한 니즈를 가진 모두를 연결하여<br>
              더 편리하고 합리적인 주차문화를 만들어가는<br>
              온라인 주차문화 플랫폼입니다.
            </a>
          </div>
        <!-- 버튼 라이브러리 적용 -->
        <button @click="ff">지금 시작하기</button>
        </div>
      </div>
      <div class="link-to-store">
        <div class="playstore">
          <!-- 버튼 라이브러리 적용 -->
          <button @click="ff">PLAY STORE</button>
        </div>
        <div class="appstore">
          <!-- 버튼 라이브러리 적용 -->
          <button @click="ff">APP STORE</button>
        </div>
      </div>
      <div class="sector-2">
        <div class="sector-2-content">
          <div class ="sector-2-main">
            <a class="b1">
              공유가 쉽다!<br>
              사용이 편리하다!<br>
              주차가 즐겁다!<br>
            </a>
          </div>
          <div class="sector-2-sub">
            <a class="t__title">
              다양한 주차 서비스로 주차고민을 덜어보세요.<br>
              다양한 주차장 정보, 주차 공유, 스마트 주차 서비스까지<br>
              모두의주차장에서 한번에 해결 할 수 있어요.
            </a>
          </div>
        </div>
      </div>
      <div class="sector-3">
        <div class="sector-3-picture">
          <img class="sector-3-image1" src="http://54.180.151.177/wp-content/uploads/2020/05/구성-요소-1-–-2.png" alt="">
          <img class="sector-3-image2" src="http://54.180.151.177/wp-content/uploads/2020/05/구성-요소-2-–-2.png" alt="">
        </div>
      </div>
      <div class="sector-4">
        <div class="sector-4-content">
          <div class="sector-4-text"></div>
          <div class="sector-4-image"></div>
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
// import navigator from '@/components/the-navigation.vue'

export default {
  name: 'Home',
  components: {
    // navigator
  }
}
</script>

<style scoped>
/* .header {
  width: 1440px;
  height: 160px;
  display: flex;
  align-items: center;
  background-color: aliceblue;
} */
/* .logo {
  background-color: antiquewhite;
  width: 15%;
  margin-left: 75px;
  margin-right: 150px;
} */
.body {
  width: 1440px;
  height: 4800px;
}
.sector-1{
  width: 1440px;
  height: 700px;
  background-color: #E7EBED;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sector-1-content{
  width: 1170px;
  height: 440px;
}
.sector-1-main{
  width: 1170px;
  height: 210px;
}
.sector-1-sub{
  width: 1170px;
  height: 195px;
}
.link-to-store{
  width: 1440px;
  height: 60px;
  margin-top: 42px;
  margin-bottom: 42px;
  margin-left: 45px;
  margin-right: 45px;
  display: flex;
  align-items: center;
}
.playstore{
  /* 원래 width값은 250px */
  width: 125px;
  height: 40px;
  padding: 10px;
  background-color: #0099ff
}
.appstore{
  /* 원래 width값은 250px */
  width: 125px;
  height: 40px;
  padding: 10px;
  background-color: #0099ff;
  margin-left: 125px;
}
.sector-2{
  width: 1440px;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sector-2-content{
  width: 1335px;
  height: 600px;
}
.sector-2-main{
  width: 1335px;
  height: 300px;
  color: #0099ff;
}
.sector-2-sub{
  width: 1335px;
  height: 215px;
  font-weight: bold;
}
.sector-3{
  width: 1440px;
  height: 390px;
}
.sector-3-picture{
  width: 1310px;
  height: 390px;
  margin-left: 65px;
  margin-right: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sector-3-image1{
  width: 600px;
  height: 328px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.sector-3-image2{
  width: 600px;
  height: 328px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.sector-4{
  width: 1440px;
  height: 835px;
  background-color: #0099ff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sector-4-content{
  width: 1214px;
  height: 610px;
  background-color: aquamarine;
  margin-top: 113px;
  margin-bottom: 113px;
  margin-left: 113px;
  margin-right: 113px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sector-4-text{
  width: 462px;
  height: 610px;
  background-color: beige;
}
.sector-4-image{
  width: 753px;
  height: 610px;
  background-color: red;
}
</style>
