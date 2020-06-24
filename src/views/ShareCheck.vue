<template>
  <v-container class="container">
    <div class="t__blue t__title t__bold px-1">공유적립금 확인하기</div>
    <div class="footer px-1"></div>
    <v-container class = "detail-container">
      <v-row class="animation">
        <v-col class="t__body t__bold px-1">
          배정받은 거주자우선(주거지) 주차면을 사용하지 않는 시간동안 유료로 이웃 운전자에게 공유할 수 있습니다.
        </v-col>
        <v-flex xs12 sm6 md6 lg6 xl6>
          <div class="fit">
            <v-carousel class="carousel" cycle interval="3000" hide-delimiter-background height
              :delimiter-icon="svgPath.mdiCheckboxBlankCircle"
              :next-icon="svgPath.mdiChevronRight"
              :prev-icon="svgPath.mdiChevronLeft"
            >
              <v-carousel-item class="img-view" eager v-for="(item,i) in items1" :key="i">
                <img :src="item.src"/>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-flex>
        <v-flex class="top_3rem " xs12 sm6 md6 lg6>
          <div class = "t__title t__blue t__bold px-1" > STEP.1 적립금 확인하기</div>
          <div class="px-1" v-for="desc in desc1" v-bind:key="desc">
            <li class="t__body">{{desc}}</li>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md6 lg6 xl6>
          <div class="fit">
            <v-carousel class="carousel" cycle interval="3000" hide-delimiter-background height
              :delimiter-icon="svgPath.mdiCheckboxBlankCircle"
              :next-icon="svgPath.mdiChevronRight"
              :prev-icon="svgPath.mdiChevronLeft"
            >
              <v-carousel-item class="img-view" eager v-for="(item,i) in items2" :key="i">
                <img :src="item.src"/>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-flex>
        <v-flex class="top_3rem " xs12 sm6 md6 lg6>
          <div class = "t__title t__blue t__bold px-1" > STEP.2 앱 포인트로 전환하기</div>
          <div class="px-1" v-for="desc in desc2" v-bind:key="desc">
            <li class="t__body">{{desc}}</li>
          </div>
        </v-flex>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

import images from '../assets/index.js'
import * as icons from '@mdi/js'

export default {
  name: 'checkAndTrance',
  data: function () {
    return {
      svgPath: icons,
      desc1: [
        ' 공유한 주차장에서 발생한 주차가 종료되는 즉시 결제 금액의 일부가 포인트로 적립됩니다.',
        '거주자우선(주거지)주차면 공유를 통한 적립 비율은 지역마다 상이하므로 자세한 사항은 문의 바랍니다.'
      ],
      desc2: [
        '적립금을 모두의주차장 포인트로 전환할 경우 앱에서 다른 주차장 이용요금 결제 시 사용할 수 있습니다.',
        '모바일 문화상품권으로 교환을 원하실 경우 별도로 문의 부탁드립니다.'
      ],
      items1: [
        {
          src: images.check_trans.check1
        },
        {
          src: images.check_trans.check2
        }
      ],
      items2: [
        {
          src: images.check_trans.trans1
        },
        {
          src: images.check_trans.trans2
        },
        {
          src: images.check_trans.trans3
        }
      ],
      cycle: true,
      index: 0,
      interval: 3000
    }
  }
}
</script>

<style scoped>
.container{
  max-width:1140px;
}
.img-view{
  height:100%;
  text-align:center;
}
.desc{
  margin-left:5%;
}
.detail-container{
  display:flex;
}
.animation{
  width:50%;
  display:flex
}

</style>
