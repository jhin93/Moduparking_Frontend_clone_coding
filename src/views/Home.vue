<template>
  <div>
    <div class="container1-bg">
      <v-container class="container1">
        <!-- md 범위 : 960px ~ 1920px -->
        <!-- sm 범위 : 768px ~ 960px -->
        <!-- 아래 칼럼개수를 조정해서 각 범위 확인 가능 -->
        <!-- xs의 범위( ? ~ 768px)은 어째서인지 설정이 되지 않는다. 768px 이하로 내려가는 순간 cols = 12로 되버림. -->
        <v-row class="container1-row">
          <v-col
            cols="12"
            md="12"
            sm="12"
            xl="12"
          >
              <h1 v-ScrollAnimationText1>
                모두가 사용하는<br>
                쉽고 편리한 주차 플랫폼<br>
              </h1>
          </v-col>
          <v-col
            cols="12"
            md="12"
            sm="12"
            xl="12">
            <p v-ScrollAnimationText2>
              주차와 관련한 니즈를 가진 모두를 연결하여<br>
              더 편리하고 합리적인 주차문화를 만들어가는<br>
              온라인 주차문화 플랫폼 입니다.
            </p>
          </v-col>
          <v-col
            cols="12"
            md="12"
            sm="12"
            xl="12">
            <v-btn v-ScrollAnimationButton class="button" depressed x-large color="#0099ff">지금 시작하기</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="store-buttones-container">
      <v-row>
        <v-col
          class="store-button-play"
          cols="12"
          md="2"
          sm="2"
        >
          <v-btn class="play-button" depressed large color="#0099ff">PLAY STORE</v-btn>
        </v-col>
        <v-col
          class="store-button-app"
          cols="12"
          md="2"
          sm="2"
        >
          <v-btn class="app-button" depressed large color="#0099ff">APP STORE</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="container2">
      <v-row>
        <v-col
          cols="12"
          md="12"
          sm="12"
        >
          <h1 v-ScrollAnimationText2>
            공유가 쉽다!<br>
            사용이 편리하다!<br>
            주차가 즐겁다!<br>
          </h1>
        <p v-ScrollAnimationText2>
        다양한 주차 서비스로 주차고민을 덜어보세요.<br>
        다양한 주차장 정보, 주차 공유, 스마트 주차 서비스까지<br>
        모두의주차장에서 한번에 해결 할 수 있어요.</p>
        </v-col>
      </v-row>
      <v-row class="circles">
        <v-col
          cols="12" sm="6"
        >
          <img src="../assets/main-easy-use1.png" class="circle12">
        </v-col>
        <v-col
          cols="12" sm="6"
        >
          <img src="../assets/main-easy-use2.png" class="circle34">
        </v-col>
      </v-row>
    </v-container>
    <v-container class="container3">
      <v-row>
        <div class="mobile-set3">
          <v-row class="mobile-set3-row">
            <v-col
              cols="12"
              md="5"
              sm="5"
            >
              <div>
                <h1>
                  01<br>
                  모바일 주차권 결제<br>
                  더이상 출구에서 힘들게 카드결제 하지 마세요!<br>
                  현장요금 대비 평균 60% 이상 할인된 모바일<br>
                  주차권을 구매하고 편리하게 주차장을 이용하세요.<br>
                </h1>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="7"
              sm="7"
            >
              <div>
                <img v-ScrollAnimationPics src="../assets/main-mobile-pay.png" class="mobile-set3-img">
              </div>
            </v-col>
          </v-row>
        </div>
      </v-row>
    </v-container>
    <v-container class="container4">
      <v-row class="container4-row">
        <div class="mobile-set4">
          <v-row mobile-set4-row>
            <v-col
              cols="12"
              md="5"
              sm="5"
            >
              <div>
                <h1>
                  02<br>
                  주차장 정보 검색<br>
                  목적지를 검색하고 주변 주자창들의<br>
                  위치, 요금, 시간 정보를 편리하게 확인하세요.<br>
                </h1>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="7"
              sm="7"
            >
              <div>
                <img v-ScrollAnimationPics src="../assets/main-search-info.png" class="mobile-set4-img">
              </div>
            </v-col>
          </v-row>
        </div>
      </v-row>
    </v-container>
    <v-container class="container5">
      <v-row>
        <div class="mobile-set5">
          <v-row mobile-set5-row>
            <v-col
              cols="12"
              md="5"
              sm="5"
            >
              <div>
                <h1>
                  03<br>
                  주차 공간 공유<br>
                  집 앞, 가게 앞 빈 공간을 자유롭게 공유하세요.<br>
                  공간을 활용해 부가수익을 얻을 수 있습니다.<br>
                </h1>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="7"
              sm="7"
            >
              <div>
                <img v-ScrollAnimationPics src="../assets/main-share.png" class="mobile-set5-img">
              </div>
            </v-col>
          </v-row>
        </div>
      </v-row>
    </v-container>
    <v-container>
       <div class="container-last">
         <v-col
          cols="12"
          md="12"
          sm="12"
         >
           <h1 class="container-last-comment" v-ScrollAnimationButton>
             지금 모두의 주차장을 시작해보세요!
           </h1>
         </v-col>
         <v-col
          class="container-last-button"
          cols="12"
          md="12"
          sm="12"
          >
          <!-- v-btn:hover -->
          <div class="back">
            <button class="last-button">시작하기</button>
          </div>
         </v-col>
       </div>
    </v-container>
    <div>
      <v-col
        cols="12"
        md="12"
        sm="12"
      >
        <img src="../assets/main-bottom.png" class="main-bottom-img">
      </v-col>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}

</script>

<style scoped>
  .container1{
    /* 컨테이너 크기를 100vw로 맞춰서 여백을 없앴다. */
    /* https://www.it-swarm.dev/ko/vuetify.js/vuetify%EC%97%90%EC%84%9C-%EC%97%AC%EB%B0%B1-%EB%B0%8F-%ED%8C%A8%EB%94%A9-%EC%A0%9C%EA%B1%B0/838734615/ */
    max-width: 100vw;
    display: flex;
    justify-content: center
  }

  .container1-row {
    margin: 200px 0;
    max-width: 80vw;
  }

  .container1-bg {
    background-image: url("../assets/mainiphon-mockup.png");
    width: 100%;
    background-size: cover;
    background-position: 50%;
  }

  .store-buttones-container{
    max-width: 90vw;
    justify-content: space-around;
  }

  .container2{
    /* 컨테이너 크기를 100vw로 맞춰서 여백을 없앴다. */
    /* https://www.it-swarm.dev/ko/vuetify.js/vuetify%EC%97%90%EC%84%9C-%EC%97%AC%EB%B0%B1-%EB%B0%8F-%ED%8C%A8%EB%94%A9-%EC%A0%9C%EA%B1%B0/838734615/ */
    max-width: 90vw;
  }

  .circles{
    display: flex;
    justify-content: space-around;
  }

  .circle12 {
    width: 100%;
  }

  .circle34 {
    width: 100%;
  }

  .container3{
    max-width: 80vw;
  }

  .mobile-set3-img {
    width: 100%;
  }

  .container4{
    max-width: 100vw;
    background-color: #0099ff;
  }

  .container4-row{
    display: flex;
    justify-content: center;
  }

  .mobile-set4 {
    max-width: 80vw;
  }

  .mobile-set4-img {
    width: 100%;
  }

  .container5{
    max-width: 80vw;
  }

  .mobile-set5-img {
    width: 100%;
  }

  /* div {
    border: solid;
    border-color: red;
  } */

  .container-last-comment{
    display: flex;
    justify-content: center;
  }

  .container-last-button{
    display: flex;
    justify-content: center;
  }

  .main-bottom-img{
    width: 100%;
  }

  .footer{
    background-color: #E2E2E2;
  }

  .container-last{
    margin: 50px;
  }

  .container-last-comment{
     display: flex;
     justify-content: center;
   }

  .container-last-button{
    display: flex;
    justify-content: center;
  }

  .main-bottom-img{
    width: 100%;
  }

  .footer{
    background-color: #E2E2E2;
  }

  .button{
    color: white;
  }

.store-button-play{
  margin: 0rem 1rem 0rem 0rem
}

.app-button-play{
  margin: 0rem 1rem
}

.play-button{
  border-radius: 3px 3px 3px 3px;
  padding: 1rem 40px !important;
  color: white;
}

.app-button{
  border-radius: 3px 3px 3px 3px;
  padding: 10px 40px !important;
  color: white;
}

.last-button {
    color: white;
    background-color: #0099ff;
    padding: 20px 50px;
    transition: all 0.1s ease;
    border-radius: 0px 0px 8px 0px;
    width: 100%;
}

.last-button:hover {
    color: black;
    background-color: white;
    transition: all 0.2s ease 0.2s;
}

  .before-enter-text1 {
    opacity: 0;
    transition: all 1s ease-out;
    transition-delay: 0.5s
  }

  .enter-text1 {
    opacity: 1;
    transform: translateY(0px);
  }

  .before-enter-text2 {
    opacity: 0;
    transform: translateY(200px);
    transition: all 1s ease-out;
  }

  .enter-text2 {
    opacity: 1;
    transform: translateY(0px);
  }

  .before-enter-button {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1s ease-out;
  }

  .enter-button {
    opacity: 1;
    transform: translateY(0px);
  }

  .before-enter-pics {
    opacity: 0;
    transform: translateX(300px);
    transition: all 0.75s ease-out;
    transition-delay: 0.25s
  }

  .enter-pics {
    opacity: 1;
    transform: translateY(0px);
  }
</style>
