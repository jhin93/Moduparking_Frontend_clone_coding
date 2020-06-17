<template>
  <div class="container">
    <div class="t__blue t__title t__bold dis_flex_margin_bo_3rem t__bottom_line">공유시간 등록과 관리</div>
    <v-container class = "detail-container">
    <v-row class="animation t__overflow">
      <v-flex xs12 sm12 md6 lg6 xl6>
      <div class="fit">
         <v-carousel class="carousel" cycle hide-delimiter-background height
          :delimiter-icon="svgPath.mdiCheckboxBlankCircle"
          :next-icon="svgPath.mdiChevronRight"
          :prev-icon="svgPath.mdiChevronLeft">
          <v-carousel-item class="img-view" eager v-for="(item,i) in items1" :key="i">
            <img :src="item.src"/>
          </v-carousel-item>
        </v-carousel>
        </div>
      </v-flex>
      <v-flex class="top_3rem " xs12 sm12 md6 lg6>
        <div class = "t__title t__blue t__bold bottom_2.5rem" > STEP 1. 공유 시간 설정하기</div>
      </v-flex>
      <v-flex xs12 sm12 md6 lg6 xl6>
      <div class="fit">
         <v-carousel class="carousel" cycle hide-delimiter-background height
          :delimiter-icon="svgPath.mdiCheckboxBlankCircle"
          :next-icon="svgPath.mdiChevronRight"
          :prev-icon="svgPath.mdiChevronLeft">
          <v-carousel-item class="img-view" eager v-for="(item,i) in items2" :key="i">
            <img :src="item.src"/>
          </v-carousel-item>
        </v-carousel>
        </div>
      </v-flex>
      <v-flex class="top_3rem " xs12 sm12 md6 lg6>
        <div class = "t__title t__blue t__bold bottom_2.5rem" > STEP 2. 공유 시간 설정 TIP!</div>
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
  }
}
</script>

<style scoped>
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
