<template>
  <div class='container'>
    <div class='t__blue t__title t__bold dis_flex_margin_bo_3rem t__bottom_line'>공유시간 등록과 관리</div>
    <v-container class = 'detail-container'>
    <v-row class='animation t__overflow'>
      <v-flex xs12 sm6 md6 lg6 xl6>
      <div class="fit">
        <v-carousel class='carousel t__overflow' cycle height='100%' interval='3000'  hide-delimiter-background :delimiter-icon='svgPath.mdiCheckboxBlankCircle' :next-icon='svgPath.mdiChevronRight' :prev-icon='svgPath.mdiChevronLeft'>
          <v-carousel-item :eager="cycle" v-for='(item,i) in items1' :key='i' :src='item.src'></v-carousel-item>
        </v-carousel>
        </div>
      </v-flex>
      <v-flex class='top_3rem ' xs12 sm6 md6 lg6>
        <div class = 't__title t__blue t__bold bottom_2.5rem' v-on:click='test'> STEP 1. 공유 시간 설정하기</div>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6 xl6>
      <div class="fit">
        <v-carousel class='carousel t__overflow' cycle height='100%' interval='3000'  hide-delimiter-background :delimiter-icon='svgPath.mdiCheckboxBlankCircle' :next-icon='svgPath.mdiChevronRight' :prev-icon='svgPath.mdiChevronLeft'>
          <v-carousel-item :eager="cycle" v-for='(item,i) in items2' :key='i' :src='item.src'></v-carousel-item>
        </v-carousel>
        </div>
      </v-flex>
      <v-flex class='top_3rem ' xs12 sm6 md6 lg6>
        <div class = 't__title t__blue t__bold bottom_2.5rem' v-on:click='test'> STEP 2. 공유 시간 설정 TIP!</div>
      </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import images from '../assets/index.js'
import * as icons from '@mdi/js'

export default {
  name: 'manageShare',
  data: function () {
    return {
      svgPath: icons,
      items1: [
        {
          src: images.manage.manage1
        },
        {
          src: images.manage.manage2
        },
        {
          src: images.manage.manage3
        },
        {
          src: images.manage.manage4
        },
        {
          src: images.manage.manage5
        },
        {
          src: images.manage.manage6
        }
      ],
      items2: [
        {
          src: images.tip.tip1
        },
        {
          src: images.tip.tip2
        },
        {
          src: images.tip.tip3
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
