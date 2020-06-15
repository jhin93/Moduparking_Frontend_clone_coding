<template>
  <div class='container'>
    <div class='t__blue t__title t__bold dis_flex_margin_bo_3rem t__bottom_line'>거주자 우선(주거지) 공간 공유하기</div>
     <div class='t__body t__bold top_3rem'>배정받은 거주자우선(주거지) 주차면을 사용하지 않는 시간동안 유료로 이웃 운전자에게 공유할 수 있습니다.</div>
    <v-container class = 'detail-container'>
    <v-row class='animation t__overflow' xs12 sm6>
      <v-flex xs12 sm6 md6 lg6 xl6>
      <div class="fit">
        <v-carousel class='carousel t__overflow' cycle height='100%' interval='3000'  hide-delimiter-background :delimiter-icon='svgPath.mdiCheckboxBlankCircle' :next-icon='svgPath.mdiChevronRight' :prev-icon='svgPath.mdiChevronLeft'>
          <v-carousel-item :eager="cycle" v-for='(item,i) in items' :key='i' :src='item.src'></v-carousel-item>
        </v-carousel>
        </div>
      </v-flex>
      <v-flex class='top_3rem ' xs12 sm6 md6 lg6>
        <div class = 't__title t__blue t__bold bottom_2.5rem' v-on:click='test'> STEP 1. 거주자우선주차면 공유 등록</div>
        <div v-for='n in 3' v-bind:key='n'>
          <div class='t__body t__bold'>{{descs[n]}}</div>
      </v-flex>
      </v-row>
    </v-container>
  </div>
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
      descs: ['자치구(또는 공단)에 배정 신청시 등록한 생년월일(6자리), 전화번호, 차량번호와 일치해야합니다',
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

<style scope>
.container{
  max-width:1140px !important;
  overflow:visible;
}
.carousel{
  max-width:560px !important;
  height:50%;
  overflow:visible !important;
}
.fit{
    max-width:90% !important;

}
.detail-container{
  display:flex;
}
.animation{
  width:50%;
  display:flex
}
.v-btn {
  color: #0099ff !important;
  width: 10px;
  margin: 0%;
}
.v-size--small{
  transform:scale(0.75);
}
.v-btn--icon.v-size--small{
  width: 10px !important;
  height:10px !important;
  margin:7px !important;
}
.v-btn:not(.v-btn--text):not(.v-btn--outlined):hover:before{
  opacity:0 !important;
}
.v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before{
  opacity:1 !important;
}
.v-carousel__controls__item .v-icon{
  opacity: 0.2 !important;
}
.theme--light.v-btn.v-btn--icon{
  color: #0099ff !important;
  opacity:0.2 !important;
}
.v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active {
    width: 10px !important;
    height: 10px !important;
    opacity:1 !important
}
.v-window__prev{
  background:rgb(0,0,0,0) !important;
  left: -5%;
  z-index:1;
  transform:scale(1.5);
}
.v-window__next{
  background:rgb(0,0,0,0) !important;
  left: 92%;
  z-index: 1;
  height:50pt;
  transform:scale(1.5);
}
</style>
