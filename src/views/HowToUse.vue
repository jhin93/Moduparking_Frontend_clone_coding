<template>
  <v-container class="container">
    <div class="t__title t__blue t__bold">거주자 우선(주거지) 공간 공유하기</div>
    <div class="footer"></div>
    <v-container class = "detail-container">
      <v-row justify="center" class="animation">
        <v-flex xs12 sm12 md6>
            <v-carousel  class="carousel" cycle interval="3000" height hide-delimiter-background
            :delimiter-icon="svgPath.mdiCheckboxBlankCircle"
            :next-icon="svgPath.mdiChevronRight"
            :prev-icon="svgPath.mdiChevronLeft">
              <v-carousel-item class="img-view" eager v-for="(item,i) in items" :key="i">
                <img :src="item.src"/>
              </v-carousel-item>
            </v-carousel>
        </v-flex>
        <v-flex  xs12 sm12 md6 >
          <div class = "t__title t__blue t__bold bottom_1rem" > STEP 1. 공유주차장 찾아서 결제하기</div>
          <div v-for="iterator in 3" v-bind:key="iterator">
            <div class="t__body t__bold">{{descs[iterator]}}</div>
          </div>
          <div class="font-red t__body">{{descs[2]}}</div>
        </v-flex>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import images from '../assets/index.js'
import * as icons from '@mdi/js'

export default {
  name: 'how_to_use',
  data: function () {
    return {
      svgPath: icons,
      descs: [
        '앱 모두의주차장을 다운받아 이용하실 수 있습니다.',
        '갤제 직후 주차 시작 되며, 정확한 위치를 안내받으실 수 있습니다.',
        '현장의 부정주차로 인해 주차가 지연될 수 있으니 시간적 여유가 있을때 이용해 주세요!'
      ],
      items: [
        {
          src: images.howto.use1
        },
        {
          src: images.howto.use2
        },
        {
          src: images.howto.use3
        },
        {
          src: images.howto.use4
        },
        {
          src: images.howto.use5
        },
        {
          src: images.howto.use6
        },
        {
          src: images.howto.use7
        },
        {
          src: images.howto.use8
        }
      ]
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
</style>
