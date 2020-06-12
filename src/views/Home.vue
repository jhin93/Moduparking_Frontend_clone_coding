<template>
  <div>
    <div class="container1-bg">
      <v-container class="container1">
        <h1 class="c1-h1">
          모두가 사용하는<br>
          쉽고 편리한 주차 플랫폼<br>
          주차와 관련한 니즈를 가진 모두를 연결하여<br>
          더 편리하고 합리적인 주차문화를 만들어가는<br>
          온라인 주차문화 플랫폼 입니다.
        </h1>
        <button>지금 시작하기</button>
      </v-container>
    </div>
      <v-container>
        <h1 class>
          공유가 쉽다!<br>
          사용이 편리하다!<br>
          주차가 즐겁다!<br>
        </h1>
        <p>다양한 주차 서비스로 주차고민을 덜어보세요.</p>
        <p>다양한 주차장 정보, 주차 공유, 스마트 주차 서비스까지</p>
        <p>모두의주차장에서 한번에 해결 할 수 있어요.</p>
        <v-row>
          <v-col
            md="6"
          >
            <img src="../assets/main-easy-use1.png" class="circle12">
          </v-col>
          <v-col
            md="6"
          >
            <img src="../assets/main-easy-use2.png" class="circle34">
          </v-col>
        </v-row>
      </v-container>
    <div>
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
            <img src="../assets/main-mobile-pay.png" class="mobile-set1">
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  components: {
    //
  }
}
</script>

<style scoped>
.c1-h1{
  margin: 200px 0;
}

.container1-bg{
  background-image: url("../assets/mainiphon-mockup.png")
}
.circle12{
  width: 100%;
}
.circle34{
  width: 100%;
}
.mobile-set1{
  width: 100%;
}
/* div{
  border: solid;
  border-color: red;
} */
</style>
