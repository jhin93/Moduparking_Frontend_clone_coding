<template>
  <div class='container'>
    <div v-on:click='test'>주택, 빌라, 상가 주차장 등 개인이 소유한 주차공간을 모두의 주차장 앱에서 다른 사람에게 공유 할 수 있습니다.</div>
    <div class = 'detail-container'>
      <div class='animation'>
        <div>
          <v-carousel height='100%' interval='3000' cycle  hide-delimiter-background :delimiter-icon='svgPath.mdiCircleMedium' :next-icon='svgPath.mdiChevronRight' :prev-icon='svgPath.mdiChevronLeft'>
            <v-carousel-item v-for='(item,i) in items' :key='i' :src='item.src'></v-carousel-item>
          </v-carousel>
        </div>
      </div>
      <div class='desc'>
        <div class = 't__title t__blue' v-on:click='test'> step 1. 사유지 공유주차장으로 등록</div>
        <div v-for='desc in descs' v-bind:key='desc'>
          <div>{{desc}}</div>
        </div>
      </div>
    </div>
  </div>
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
      descs: ['일반주차장 공유의 경우 즉시 등록되지 않으며',
        '승인 대기 상태가 됩니다!',
        '담당팀에서 순차적으로 주차 요금, 주차장 한경 등을 종합적으로',
        '확인하여 공유 가능할 시에 별도로 연락을 드립니다.',
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
  },
  methods: {
    next: function () {
      this.index++
    },
    before: function () {
      this.index--
    },
    test: function () {
      console.log(icons)
    }
  }
}
</script>

<style scope>
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

.v-btn {
  color: #0099ff !important;
  width: 10px;
  margin: 0%;
}
.v-btn--icon.v-size--small{
  width: 10px !important;
  height:10px !important;
  margin:3px !important;
}
.v-btn--active{
  opacity:1 !important;
}
.theme--light.v-btn.v-btn--icon{
  color: #0099ff !important;
  opacity:0.5;
}
.v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active {
    width: 10px !important;
    height: 10px !important;
    color:rgba(0,153,255,1)
}
.v-window__prev{
  background:rgb(0,0,0,0) !important;
}
.v-window__next{
  background:rgb(0,0,0,0) !important;
  left: 85%;
}
</style>
