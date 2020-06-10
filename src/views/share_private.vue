<template>
  <div class='container'>
    <div>주택, 빌라, 상가 주차장 등 개인이 소유한 주차공간을 모두의 주차장 앱에서 다른 사람에게 공유 할 수 있습니다.</div>
    <div class = 'detail_container'>
      <div class='animation'>
        <div>
          <v-carousel-item v-for='photo in photos' v-bind:key='photo' :src='photo.png' cycle dark interval='3000'></v-carousel-item>
        </div>
      </div>
      <div class='desc'>
        <div class = 't__title t__blue'> step 1. 사유지 공유주차장으로 등록</div>
        <div v-for='desc in descs' v-bind:key='desc'>
          <div>{{desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sharePrivate',
  data: function () {
    return {
      descs: ['일반주차장 공유의 경우 즉시 등록되지 않으며',
        '승인 대기 상태가 됩니다!',
        '담당팀에서 순차적으로 주차 요금, 주차장 한경 등을 종합적으로',
        '확인하여 공유 가능할 시에 별도로 연락을 드립니다.',
        '주차장 사진 및 필요 서류가 없는 경우 승인이 지연될 수 있습니다.'
      ],
      photos: [
        '../assets/custom--1-8',
        '../assets/custom--1-8',
        '../assets/custom--2-4',
        '../assets/custom--3-7',
        '../assets/custom--4-6',
        '../assets/custom--5-6',
        '../assets/custom--6-6',
        '../assets/custom--7-6',
        '../assets/custom--8-6',
        '../assets/custom--13-3',
        '../assets/custom--14-2'
      ],
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
    }
  }
}
</script>

<style scope>
.detail_container{
  display:flex;
}
.animation{
  width:50%;
  display:flex
}
</style>
