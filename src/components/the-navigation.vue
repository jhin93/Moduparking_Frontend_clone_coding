<template>
  <div>
    <!-- 컨테이너 생성 -->
      <v-container>
        <!-- 레이아웃 생성. row(가로). -->
        <div id="nav">
          <v-layout row>
            <!-- 1264px에서 줄어드는 현상이 있는데() 어디서 생긴지 모르는 container의 마진과 관련이 있는지 모르겠다. -->
            <!-- md 의 기준이 1264인데 md가 사용된 곳은 없다. lg도 마찬가지. -->
            <!-- row 내부의 첫번째 col생성. 회사 로고를 담음. -->
            <v-col
              class="left"
              col="4"
              md="4"
              sm="4"
            >
              <div class="left">
                <router-link to="/">
                  <img src="../assets/companylogo.png" alt="">
                </router-link>
              </div>
            </v-col>
            <!-- row 내부의 두번째 col생성. 네비게이션 바를 담음. -->
            <v-col
              class="right"
              col="8"
              md="8"
              sm="8"
            >
              <div class="right">
                <router-link to="/service-intro">서비스 소개</router-link>
                <router-link to="/corp-intro">기업 소개</router-link>
                <router-link to="/elementor-345">
                  <v-hover   v-slot:default="{ hover }">
                      <div><p id="test">주차 공유 안내</p>
                          <v-extend-transition>
                              <div class="test1" v-if="hover" >test1</div>
                              <div class="test1" v-if="hover" >test2</div>
                              <div class="test1" v-if="hover" >test3</div>
                          </v-extend-transition>
                      </div>
                  </v-hover>
                </router-link>
                <router-link to="affiliate-cooperation">제휴 ・ 협력 안내</router-link>
                <router-link to="/elementor-624">보도 ・ 홍보자료</router-link>
                <router-link to="/300f0-portfolio">Q & A</router-link>
              </div>
            </v-col>
          </v-layout>
        </div>
      </v-container>
    <!-- URL값에 따라 갱신되는 화면 영역 -->
  </div>
</template>
<script>
import * as icons from '@mdi/js'
export default {
  name: 'navigator',
  data: function () {
    return { icons: icons }
  },
  methods: {
  }
}
</script>
<style scoped>
#nav {
  padding: 30px;
  line-height: 1.7;
  font-size: 18pt;
  display: flex;
  align-items: center;
}

img {
  max-width: 100%;
  width: 250px;
}

#nav a {
  font-weight: bold;
  color: #3f3f3f;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #000000;
}
#nav a:hover {
  color: #0099ff;
}
#container {
  display: table-cell;
}

.test1{
  color: black;
}

.down-menu {
  position: inline;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}
.popup-enter-active,
.popup-leave-active {
  display: inline-block;
  position: relative;
  transition-delay: 0.2s;
  transition-duration: 0.1s;
}
.popup-enter, .popup-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.left{
  display: flex;
  align-items: center;
  justify-items: center;
}
.right{
  display: flex;
  align-items: center;
  justify-items: center;
}
div{
  border: solid;
  border-color: red;
}
</style>
