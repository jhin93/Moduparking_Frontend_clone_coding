<template>
  <v-container>
    <div class="t__title t__blue t__bold px-1">사유지 주차공간 공유하기</div>
    <div class="px-1 footer "></div>
    <div class="t__body px-1">주택, 빌라, 상가 주차장 등 개인이 소유한 주차공간을 모두의 주차장 앱에서 다른 사람에게 공유 할 수 있습니다.</div>
    <v-container class = "detail-container">
      <v-row justify="center" class="animation" xs12 sm12>
        <v-flex cols12 xs12 sm12 md6 lg6 xl6>
        <div class="fit">
          <v-carousel class="carousel" cycle interval="3000" hide-delimiter-background height
            :delimiter-icon="svgPath.mdiCheckboxBlankCircle"
            :next-icon="svgPath.mdiChevronRight"
            :prev-icon="svgPath.mdiChevronLeft">
            <v-carousel-item class="img-view" eager v-for="(item,i) in items" :key="i">
              <img :src="item.src"/>
            </v-carousel-item>
          </v-carousel>
          </div>
        </v-flex>
        <v-flex class="top_3rem " cols12 xs12 sm12 md6 lg6>
          <div class="d-none d-md-block d-print-block">
            <div class = "t__title t__blue t__bold px-1"> STEP 1. 거주자우선주차면 공유 등록</div>
            <div v-for="(desc,iterator) in descs" v-bind:key="iterator">
              <div class="t__body t__bold">{{descs[iterator]}}</div>
            </div>
          </div>
          <div  class = " px-1 d-flex d-md-none align_center">
            <v-flex max-width="100%">
              <div class="t__title t__blue t__blue t__bold px-1">STEP 1. 사유지 공유주차장으로 등록</div>
              <div class="mobile-boxer">
                <div class="t__body" v-for="(str,i) in descs" :key="i">{{str}}</div>
              </div>
              </v-flex>
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
  name: 'sharePrivate',
  data: function () {
    return {
      svgPath: icons,
      descs: ['일반주차장 공유의 경우 즉시 등록되지 않으며 승인 대기 상태가 됩니다!',
        '담당팀에서 순차적으로 주차 요금, 주차장 한경 등을 종합적으로 확인하여 공유 가능할 시에 별도로 연락을 드립니다.',
        '주차장 사진 및 필요 서류가 없는 경우 승인이 지연될 수 있습니다.'
      ],
      items: [
        {
          src: images.private.private1
        },
        {
          src: images.private.private2
        },
        {
          src: images.private.private3
        },
        {
          src: images.private.private4
        },
        {
          src: images.private.private5
        },
        {
          src: images.private.private6
        },
        {
          src: images.private.private7
        },
        {
          src: images.private.private8
        },
        {
          src: images.private.private9
        },
        {
          src: images.private.private10
        },
        {
          src: images.private.private11
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
.mobile-boxer{
  text-align:justify;
  margin-left:5%;
  margin-right:5%;
}
.container{
  max-width:1140px;
}
.img-view{
  height:100%;
  text-align:center;
}
</style>
