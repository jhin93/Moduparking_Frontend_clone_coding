<template>
  <div class='container'>
    <div class='t__blue t__title t__bold dis_flex_margin_bo_3rem t__bottom_line'>공유주차장 이용하기</div>
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
        <div class = 't__title t__blue t__bold bottom_2.5rem' v-on:click='test'> STEP 1. 공유주차장 찾아서 결제하기</div>
        <div v-for='n in 2' v-bind:key='n'>
          <div class='t__body t__bold'>{{descs[n]}}</div>
        </div>
        <div class="red">{{descs[2]}}
        </div>
      </v-flex>
      </v-row>
    </v-container>
    </div>
</template>

<script>
import images from '../assets/index.js'
import * as icons from '@mdi/js'
export default {
  name: 'how-to-use',
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
      ],
      cycle: true,
      index: 0,
      interval: 3000
    }
  },
  methods: {
    test: function () {
      console.log(images)
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
