<template>
  <v-container class="container12">
    <div class>
      <v-row justify="space-around">
        <v-col cols="12">
          <div class = "t__blue t__title t__bold px-1"> 모두의 주차 공유 서비스 안내</div>
          <div class="footer" ></div>
          <div class = "AffiliateCooperation__t1">개인 소유의 주차 기능 공간을 주차장 소유자와 운전자가 공유할 수 있도록 연결해 주는 서비스 입니다.</div>
          <div class="img_container">
            <v-img :src="image.service.service"></v-img>
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
          <div class=" t__blue t__title t__bold px-1 align_center">운전자</div>
        </v-col>
        <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
          <div class=" t__blue t__title t__bold px-1 align_center">모두의주차장</div>
        </v-col>
        <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4">
          <div class=" t__blue t__title t__bold px-1 align_center">공유자</div>
        </v-col>
      </v-row>
    </div>
    <div class>
      <div class="dis_flex_margin_bo_3rem inline">
          <div class="t__blue t__title t__bold px-1">유형 1. 거주자 우선(주거지) 주차면</div>
          <v-row>
            <v-col cols="12" xs="12" md="8">
              <v-img class="img_half" :src="image.service.private"></v-img>
              <h6 class= "ServiceInfo-picturetxt align_center relative "> 공유 - 거주자우선주차면</h6>
            </v-col>
          <v-col cols="12">
            <div v-for="residential in residentials" v-bind:key="residential">
              <div class="ServiceInfo-body1">{{residential}}</div>
            </div>
          </v-col>
          </v-row>
          <v-btn class="ServiceInfo-button" large rounded :ripple="false" color="#0099ff" depressed dark to="">거주자우선(주거지)주차면 공유방법</v-btn>
      </div>
    </div>
    <div class="blank_4rem"></div>
    <div class>
      <div class="dis_flex_margin_bo_3rem inline">
          <div class="t__blue t__title t__bold px-1">유형 2. 사유지 주차공간(카페, 오피스텔 등)</div>
          <v-row>
            <v-col cols="12" xs="12" md="8">
              <v-img class="img_half" :src ="image.service.residential"></v-img>
              <h6 class = "ServiceInfo-picturetxt align_center relative "> 공유 - 일반 주차 공간</h6>
            </v-col>
            <v-col cols="12">
              <div v-for="privated in privates" v-bind:key="privated">
                <div class="ServiceInfo-body1">{{privated}}</div>
              </div>
            </v-col>
          </v-row>
          <v-btn class="ServiceInfo-button" large rounded :ripple="false" color="#0099ff" depressed dark to="">일반주차창 공유 방법</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import images from '../assets'
export default {
  name: 'serviceInfo',
  data: function () {
    return {
      image: images,
      residentials: ['지역주민이 기관으로부터 배정받은 “거주자우선(주거지) 주차면”을 배정자와 운전자가 공유합니다.', '지역주민 : 앱 모두의주차장을 통해 배정받은 주차면을 공유하고, 이웃 운전자가 사용할 수 있는 시간을 설정합니다.', '운전자 : 앱 모두의주차장에서 공유주차장을 찾은 후 비용을 지불하고 정해진 시간 동안 단속 걱정없이 주차를 합니다.', '* 자치구의 관할 기관과 협력하여 진행하는 공익 사업입니다.', '* 2020 3월 기준 서울시 23개, 부산시 5개 자치구에서 진행중입니다.'],
      privates: ['주차가능한 공간을 소유한 지역 주민이 비어있는 시간동안 다른 운전자에게 공유를 합니다.', '주차공간 소유자 : 앱 모두의주차장을 통해 공유를 신청하면, 모두의주차장 팀이 주차환경을 확인 한 후 공유주차장으로 등록합니다.', '운전자 : 앱 모두의주차장에서 공유주차장을 찾은 후 비용을 지불하고 정해진 시간 동안만 주차를 합니다.']
    }
  }
}
</script>

<style scoped>
.container12{
  max-width:1140px;
  padding: 0rem 0rem 10rem 0rem;
}
.header{
  font-size:15pt;
  line-height: 101.7%;
  color:#0099ff;
  font-weight:bold;
  margin-bottom:2rem;
}
.img_role{
  width:390px;
  text-align:center;
  color:#0099ff;
  font-weight:bold;
}
.img_container{
  text-align:center;
  margin:2rem;
}
img{
  width:96.5%;
}
.line_crosser{
  padding-top:2rem;
  border-top:1px solid rgb(0,0,0,0.1)
}
</style>
