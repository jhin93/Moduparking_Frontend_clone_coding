<template>
  <v-container class="container">
    <div class=" margin_1rem">
      <v-col
        class="txt-box"
        cols="12"
        md="12"
        sm="12"
        xl="12"
      >
        <v-row>
          <div class = "t__blue t__title t__bold"> 기업소개 </div>
        </v-row>
        <v-row class="footer"></v-row>
        <v-row>
          <div class = "corpintro__t1"> MODUCOMPANY </div>
        </v-row>
        <v-row>
          <div class = "corpintro__t2"> 모두컴퍼니 </div>
        </v-row>
        <v-row>
          <div class = "corpintro__t3"> 주차공유사업을 통해 주차와 관련된 사회적 문제를 해결합니다. </div>
        </v-row>
        <v-row>
          <div class = "corpintro__t4">
            운전자는 원하는 주차장을 찾는 일이나 과도한 주차요금을 부담스러워합니다.<br>
            반대로 주차장들은 비어있는 주차면을 효과적으로 활용하여 매출을 증대시키는것을 어려워합니다.<br>
            이처럼 운전자와 주차장이 서로 연결되지 못하면 주차난, 불법주차 문제 등이 심각해지고 이는 곧 공공기관의 고민으로 이어집니다.<br>
            <br>
            모두의주차장은 주차공유사업을 통해 이러한 문제를 해결하고자 합니다.
            <br>
            <br>
            흩어져 있는 주차장 정보를 수집 후 공유하여 주차장 사업자들이 효과적으로 본인들의 주차장을 알리고 온라인을 통해 주차 상품을 운영할 수 있도록 합니다.
            운전자들은 이런 주차장들을 모두의주차장을 통해 쉽게 확인하고 예약 및 결제 후 이용할 수 있습니다.
            이를 통해 주차 정보와 공간이 부족해서 생겼던 주차난과 불법주차 등 주차 관련 사회적 문제 해결에 기여합니다.
          </div>
        </v-row>
      </v-col>
      <v-col
        class="txt-box"
        cols="12"
        md="12"
        sm="12"
        xl="12"
      >
        <v-row>
          <div class = "t__blue t__title t__bold"> 기업 비전 </div>
        </v-row>
        <v-row class="footer"></v-row>
        <v-row>
          <div class = "corpintro__t3"> 주차와 관련한 모든 서비스의 접점을 지향합니다. </div>
        </v-row>
        <v-row>
          <div class = "corpintro__t4">
            운전자와 주차장이 연결되지 못하면 이들과 연계한 비즈니스를 하는 카 셰어링, 전기차 충전, 세차, 정비, 지도/내비게이션, 자동차 OEM 사업자들 및 여러 온라인 플랫폼들 또한 사업적인 연결에 어려움을 느낍니다.
            모두의주차장은 주차정보 공유, 주차공간 공유, 주차권 판매 등의 서비스를 통해 주차와 관련한 다양한 이해관계자들을 모두의주차장이라는 하나의 온라인 플랫폼으로 모이게 합니다.
            이를 통해 유관업계 사업자들은 온라인과 단절된 연결고리에 있던 운전자, 주차장들과 연계한 비즈니스를 모두의주차장이라는 접점을 통해 풀어갈 수 있습니다.
            모두의주차장은 국내 최초이자 최대의 온라인 주차 플랫폼으로써 앞으로도 더 많은 플레이어들이 모두의주차장을 통해 비즈니스를 풀어갈 수 있도록 하여 주차와 관련한 모든 서비스의 접점이 되는 플랫폼으로 성장할 것입니다.
          </div>
        </v-row>
      </v-col>
      <v-col
        class="txt-box"
        cols="12"
        md="12"
        sm="12"
        xl="12"
      >
        <v-row>
          <div class = "t__blue t__title t__bold"> 사업 영역 </div>
        </v-row>
        <v-row class="footer"></v-row>
        <v-row>
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
      </v-col>
      <v-col
        class="txt-box"
        cols="12"
        md="12"
        sm="12"
        xl="12"
      >
        <v-row>
          <div class = "t__blue t__title t__bold"> 협력 지자체 </div>
        </v-row>
        <v-row class="footer"></v-row>
        <v-row>
          <img src="../assets/logos.png" class="cities">
        </v-row>
      </v-col>

    </div>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  max-width:1180px;
}
/* div{
  border: solid;
  border-color: red
} */
.head-txt{
  margin: 0.5rem 0rem;
}
.body-txt{
  margin: 2rem 0rem;
}
.txt-box{
  margin: 0rem 0rem 4rem 0rem;
}
.circle12{
  width: 100%
}
.circle34{
  width: 100%
}
.cities{
  width: 100%
}
</style>
