<template>
  <div>
    <div class="container1-bg">
      <v-container class="container1">
        <!-- md 범위 : 960px ~ 1920px -->
        <!-- sm 범위 : 768px ~ 960px -->
        <!-- 아래 칼럼개수를 조정해서 각 범위 확인 가능 -->
        <!-- xs의 범위( ? ~ 768px)은 어째서인지 설정이 되지 않는다. 768px 이하로 내려가는 순간 cols = 12로 되버림. -->
        <v-row class="container1-row" justify="start">
          <v-col
            cols="12"
            md="12"
            sm="12"
            xl="12"
          >
            <a class="blue__t1" v-ScrollAnimationText1>
              모두가 사용하는<br>
              쉽고 편리한 주차 플랫폼<br>
            </a>
          </v-col>
          <v-col
            cols="12"
            md="12"
            sm="12"
            xl="12">
            <p class="black__t1" v-ScrollAnimationText2>
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
            <v-btn href="/" target="_blank" v-ScrollAnimationButton class="first-button first__button" depressed x-large color="#0099ff">지금 시작하기</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="store-buttones-container">
      <v-row>
        <v-col
          cols="12"
          md="2"
          sm="2"
        >
          <v-btn href="https://play.google.com/store/apps/details?id=com.parkingshare.mobile&hl=ko" target="_blank" class="play-button" depressed color="#0099ff">PLAY STORE</v-btn>
        </v-col>
        <v-col
          cols="12"
          md="2"
          sm="2"
        >
          <v-btn href="https://apps.apple.com/kr/app/모두의주차장-국민주차앱/id780174422" target="_blank"  class="app-button" depressed color="#0099ff">APP STORE</v-btn>
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
          <h1 class="blue__t2" v-ScrollAnimationText2>
            공유가 쉽다!<br>
            사용이 편리하다!<br>
            주차가 즐겁다!<br>
          </h1>
        <p class="black__t15" v-ScrollAnimationText2>
        다양한 주차 서비스로 주차고민을 덜어보세요.<br>
        다양한 주차장 정보, 주차 공유, 스마트 주차 서비스까지<br>
        모두의주차장에서 한번에 해결 할 수 있어요.</p>
        </v-col>
      </v-row>
      <v-row class="circles">
        <v-col
          cols="12" sm="6"
        >
          <v-img :src="image.main.use1" class="circle12"/>
        </v-col>
        <v-col
          cols="12" sm="6"
        >
          <v-img :src="image.main.use2" class="circle34"/>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="container3">
      <v-row class="container4-row">
            <v-col
              cols="12"
              md="5"
              sm="5"
            >
              <div>
                  <a class="blue__t0">01</a><br>
                  <a class="black__t0">모바일 주차권 결제</a><br>
                  <p class="black__t2">
                  더이상 출구에서 힘들게 카드결제 하지 마세요!<br>
                  현장요금 대비 평균 60% 이상 할인된 모바일<br>
                  주차권을 구매하고 편리하게 주차장을 이용하세요.<br>
                  </p>
              </div>
            </v-col>
            <v-col
              class="mobile-set3-col"
              cols="12"
              md="7"
              sm="7"
            >
              <div>
                <v-img v-ScrollAnimationPics :src="image.main.mobile"  class="mobile-set3-img" />
              </div>
            </v-col>
      </v-row>
    </v-container>
    <v-container class="container4">
      <v-container class="container3">
      <v-row class="container4-row " >
            <v-col
            class="mobile-set4-col"
              cols="12"
              md="5"
              sm="5"
            >
              <div>
                  <a class="white__t0">02</a><br>
                  <a class="white__t1">주차장 정보 검색</a><br>
                  <p class="white__t2">
                  목적지를 검색하고 주변 주자창들의<br>
                  위치, 요금, 시간 정보를 편리하게 확인하세요.<br>
                  </p>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="7"
              sm="7"
            >
              <div>
                <v-img v-ScrollAnimationPics :src="image.main.search" class="mobile-set4-img"/>
              </div>
            </v-col>
      </v-row>
      </v-container>
    </v-container>
    <v-container class="container5">
      <v-row class="container4-row mobile-set4">
            <v-col
              cols="12"
              md="5"
              sm="5"
            >
              <div>
                  <a class="blue__t0">03</a><br>
                  <a class="black__t0">주차공간 공유</a><br>
                  <p class="black__t2">
                  집 앞, 가게 앞 빈 공간을 자유롭게 공유하세요.<br>
                  공간을 활용해 부가수익을 얻을 수 있습니다.<br>
                  </p>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="7"
              sm="7"
            >
              <div>
                <v-img v-ScrollAnimationPics eager :src="image.main.share" max-width="100%" class="mobile-set5-img"/>
              </div>
            </v-col>
      </v-row>
    </v-container>
    <v-container>
       <div class="container-last">
         <v-col
          cols="12"
          md="12"
          sm="12"
         >
           <h1 class="container-last-comment blue__t3" v-ScrollAnimationButton>
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
            <button type="button" onclick="window.open('https://play.google.com/store/apps/details?id=com.parkingshare.mobile&hl=ko') " class="last-button">시작하기</button>
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
        <v-img :src="image.main.bottom" eager class="main-bottom-img" />
      </v-col>
    </div>
  </div>
</template>

<script>
import images from '../assets'
export default {
  name: 'Home',
  components: {},
  data: () => ({
    image: images
  })
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
    padding-top: 100px;
    padding-bottom: 50px;
    padding-left: 10%;
  }

  .container1-bg {
    background-image: url("../assets/mainiphon-mockup.png");
    width: 100%;
    background-size: cover;
    background-position: 50%;
  }

  .store-buttones-container{
    max-width: 92.5vw;
    justify-content: space-around;
  }

  .container2{
    /* 컨테이너 크기를 100vw로 맞춰서 여백을 없앴다. */
    /* https://www.it-swarm.dev/ko/vuetify.js/vuetify%EC%97%90%EC%84%9C-%EC%97%AC%EB%B0%B1-%EB%B0%8F-%ED%8C%A8%EB%94%A9-%EC%A0%9C%EA%B1%B0/838734615/ */
    max-width: 92.5vw;
    padding: 3rem 0rem;
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
    padding: 3rem 0rem;
  }

  .mobile-set3-col{
    display: flex;
    align-items: center
  }

  .mobile-set4-col{
    display: flex;
    align-items: center
  }

  .mobile-set3-img {
    width: 100%;
  }

  .container4{
    max-width: 100vw;
    background-color: #0099ff;
    justify-content: center;
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

  .first-button{
    color: white;
    font-size: 21px;
    border-radius: 8px 8px 8px 8px;
  }

  .button{
    color: white;
  }

  .play-button{
    border-radius: 3px 3px 3px 3px;
    color: white;
  }

  .app-button{
    border-radius: 3px 3px 3px 3px;
    /* padding: 10px 40px !important; */
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
    transition-delay: 0.5s
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
