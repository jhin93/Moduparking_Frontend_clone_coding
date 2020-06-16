<template>
  <div>
    <div class="container1-bg">
      <v-container class="container1">
        <v-col
          class="c1-h1"
          md="12"
          sm="12"
        >
          <h1>
          모두가 사용하는<br>
          쉽고 편리한 주차 플랫폼<br>
          </h1>
          <p>
            주차와 관련한 니즈를 가진 모두를 연결하여<br>
            더 편리하고 합리적인 주차문화를 만들어가는<br>
            온라인 주차문화 플랫폼 입니다.
          </p><br>
          <button>지금 시작하기</button>
        </v-col>
      </v-container>
    </div>
    <v-container>
      <h1>
        공유가 쉽다!<br>
        사용이 편리하다!<br>
        주차가 즐겁다!<br>
      </h1>
      <p>다양한 주차 서비스로 주차고민을 덜어보세요.</p>
      <p>다양한 주차장 정보, 주차 공유, 스마트 주차 서비스까지</p>
      <p>모두의주차장에서 한번에 해결 할 수 있어요.</p>
      <v-row>
        <v-col
          cols="12" md="6"
        >
          <img src="../assets/main-easy-use1.png" class="circle12">
        </v-col>
        <v-col
          cols="12" md="6"
        >
          <img src="../assets/main-easy-use2.png" class="circle34">
        </v-col>
      </v-row>
    </v-container>
    <div class="mobile-set1">
      <v-row>
        <v-col
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
          sm="7"
        >
          <div>
            <img src="../assets/main-mobile-pay.png" class="mobile-set1-img">
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="mobile-set2">
      <v-row>
        <v-col
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
          sm="7"
        >
          <div>
            <img src="../assets/main-search-info.png" class="mobile-set2-img">
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="mobile-set3">
      <v-row>
        <v-col
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
          sm="7"
        >
          <div>
            <img src="../assets/main-share.png" class="mobile-set3-img">
          </div>
        </v-col>
      </v-row>
    </div>
    <v-container>
       <div class="container-last">
         <v-col>
           <h1 class="container-last-comment">
             지금 모두의 주차장을 시작해보세요!
           </h1>
         </v-col>
         <v-col class="container-last-button">
           <button>시작하기</button>
         </v-col>
       </div>
    </v-container>
    <div>
      <v-col
        lg="12"
        md="12"
        sm="12"
      >
        <img src="../assets/main-bottom.png" class="main-bottom-img">
      </v-col>
    </div>
    <!--    Footer 는 별도 Component 로 분리 (모든 페이지에 푸터가 들어가요 ~ 두분의 마크업 코딩컨밴션이 달라서 맞춰주실 필요가 있어보입니다.-->
    <!--    <div class="footer">-->
    <!--        <a>-->
    <!--          상호명 : 주식회사 모두컴퍼니 | 사업자등록번호 : 220-88-52570 | 통신판매업 신고번호 : 제2017-서울중구-0923호<br>-->
    <!--          공동대표 : 강수남, 김동현 | 주소 : 서울시 성동구 왕십리로 115, 헤이그라운드 8층 (우) 04768 | 전화 : 1899-8242 | contact@moduparking.com | © 2020 쉽고 편리한 주차 플랫폼 모두의주차장 All Right Reserved-->
    <!--        </a>-->
    <!--    </div>-->
    <!--    <div>-->
    <!--      <button>이용약관</button>-->
    <!--    </div>-->
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>
  .c1-h1 {
    margin: 200px 0;
  }

  .container1-bg {
    background-image: url("../assets/mainiphon-mockup.png");
    width: 100%;
    background-size: cover;
    background-position: 50%;
  }

  .circle12 {
    width: 100%;
  }

  .circle34 {
    width: 100%;
  }

  .mobile-set1-img {
    width: 100%;
  }

  .mobile-set2 {
    background-color: #0099ff
  }

  .mobile-set2-img {
    width: 100%;
  }

  .mobile-set3-img {
    width: 100%;
  }

  div {
    border: solid;
    border-color: red;
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
</style>
