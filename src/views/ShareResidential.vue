<template>
  <v-container class="container">
    <div class="t__title t__blue t__bold margin_1rem">거주자 우선(주거지) 공간 공유하기</div>
    <div class="footer margin_1rem"></div>
    <div class="t__body margin_1rem">배정받은 거주자우선(주거지) 주차면을 사용하지 않는 시간동안 유료로 이웃 운전자에게 공유할 수 있습니다.</div>
    <v-container class = "detail-container">
      <v-row justify="center" class="animation">
        <v-flex xs12 sm12 md6>
          <v-carousel  class="carousel" cycle interval="3000" height hide-delimiter-background
          :delimiter-icon="svgPath.mdiCheckboxBlankCircle"
          :next-icon="svgPath.mdiChevronRight"
          :prev-icon="svgPath.mdiChevronLeft">
            <v-carousel-item class="img-view" eager
            v-for="(item,i) in items"
            :key="i"
            :ripple="false"
          >
              <img :src="item.src"/>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex xs12 sm12 md6 >
          <div class = "t__title t__blue t__bold margin_1rem " > STEP 1. 거주자우선주차면 공유 등록</div>
          <div v-for="n in 3" v-bind:key="n">
            <div class="t__body margin_1rem">{{descs[n-1]}}</div>
          </div>
        </v-flex>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
// todo 반응형으로 뷰티파이 그리드 적용
import images from '../assets/index.js'
import * as icons from '@mdi/js'

export default {
  name: 'share-residential',
  data: function () {
    return {
      svgPath: icons,
      descs: [
        '자치구(또는 공단)에 배정 신청시 등록한 생년월일(6자리), 전화번호, 차량번호와 일치해야합니다',
        '정보를 정확히 입력하였는데 공유설정이 안되는 경우엔 자치구(또는 공단)에 생연월일, 전화번호, 차량번호를 확인 하시기 바랍니다.',
        '주차장 등록을 완료하시고 반드시 공유시간을 설정해야 앱에서 주차장이 노출됩니다.'
      ],
      items: [
        {
          src: images.residential.residential1
        },
        {
          src: images.residential.residential1
        },
        {
          src: images.residential.residential3
        },
        {
          src: images.residential.residential4
        },
        {
          src: images.residential.residential5
        },
        {
          src: images.residential.residential6
        },
        {
          src: images.residential.residential7
        },
        {
          src: images.residential.residential8
        },
        {
          src: images.residential.residential9
        },
        {
          src: images.residential.residential10
        },
        {
          src: images.residential.residential11
        },
        {
          src: images.residential.residential11
        }
      ],
      cycle: true,
      index: 0,
      interval: 3000
    }
  },
  methods: {
    test: function () {
      console.log(icons)
    }
  }
}
</script>

<style scoped>

..theme--dark.v-btn:hover::before{
  opacity:0;
}
.container{
  max-width:1140px;
}
.img-view{
  height:100%;
  text-align:center;
}
</style>
