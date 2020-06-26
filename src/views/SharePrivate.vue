<template>
  <v-container>
    <div class="t__title t__blue t__bold px-1">사유지 주차공간 공유하기</div>
    <div class="px-1 footer "></div>
    <v-container class = "detail-container">
      <v-row justify="center" class="animation">
        <v-col class="AffiliateCooperation__t1" cols="12">
          주택, 빌라, 상가 주차장 등 개인이 소유한 주차공간을 모두의 주차장 앱에서 다른 사람에게 공유 할 수 있습니다.
        </v-col>
        <v-col cols="12"  sm="12" md="6" >
        <div class="fit">
          <v-carousel class="carousel" cycle interval="3000" hide-delimiter-background height
            :delimiter-icon="delimiterIcon"
            :next-icon="nextIcon"
            :prev-icon="prevIcon">
            <v-carousel-item class="img-view" eager v-for="(item,i) in items" :key="i">
              <img :src="item.src"/>
            </v-carousel-item>
          </v-carousel>
          </div>
        </v-col>
        <v-col class="top_3rem " cols="12" sm="12" md="6">
          <div class="d-none d-md-block d-print-block">
            <div class = "Step1 Share-title1"> STEP 1. 사유지 공유주차장으로 등록</div>
            <div v-for="(desc,iterator) in descs" v-bind:key="iterator">
              <div class="Share-body1">{{descs[iterator]}}</div>
            </div>
          </div>
          <div  class = " px-1 d-flex d-md-none align_center">
            <v-flex >
              <div class="t__title t__blue t__blue t__bold px-1">STEP 1. 사유지 공유주차장으로 등록</div>
              <div class="mobile-boxer">
                <div class="t__body" v-for="(str,i) in descs" :key="i">{{str}}</div>
              </div>
              </v-flex>
            </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
// todo 반응형으로 뷰티파이 그리드 적용
import images from '../assets/index.js'
import { mdiCheckboxBlankCircle, mdiChevronRight, mdiChevronLeft } from '@mdi/js'

export default {
  name: 'sharePrivate',
  data: function () {
    return {
      delimiterIcon: mdiCheckboxBlankCircle,
      nextIcon: mdiChevronRight,
      prevIcon: mdiChevronLeft,
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
.Step1{
  padding: 0 0 3rem 0
}
</style>
