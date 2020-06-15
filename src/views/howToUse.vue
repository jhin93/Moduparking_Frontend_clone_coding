<template>
  <v-container>
    <div class='t__blue t__title t__bold t__bottom_line'>공유주차장 이용하기</div>
    <v-row>
      <v-col xs12 sm6 md6 lg6 xl6>
        <v-carousel height="100%" cycle interval="3000"
                    :delimiter-icon="svgPath.mdiCheckboxBlankCircle"
                    :next-icon="svgPath.mdiChevronRight"
                    :prev-icon="svgPath.mdiChevronLeft">
          <v-carousel-item v-for='(item,i) in items' :key='i' :src='item.src'></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col xs12 sm6 md6 lg6 xl6>
        <div class='t__title t__blue t__bold bottom_2.5rem' v-on:click='test'> STEP 1. 공유주차장 찾아서 결제하기</div>
        <div v-for='n in 2' v-bind:key='n'>
          <div class='t__body t__bold'>{{descs[n]}}</div>
        </div>
        <div class="red">{{descs[2]}}
        </div>
      </v-col>
    </v-row>
  </v-container>
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
      ]
    }
  }
}
</script>

<style scoped>
</style>
