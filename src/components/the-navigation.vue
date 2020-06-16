<template>
  <div>
    <!-- 컨테이너 생성 -->
      <!-- <v-container> -->
        <!-- 레이아웃 생성. row(가로). -->
        <!-- <div id="nav"> -->
          <v-layout row>
            <!-- 1264px에서 줄어드는 현상이 있는데() 어디서 생긴지 모르는 container의 마진과 관련이 있는지 모르겠다. -->
            <!-- md 의 기준이 1264인데 md가 사용된 곳은 없다. lg도 마찬가지. -->
            <!-- row 내부의 첫번째 col생성. 회사 로고를 담음. -->
            <v-col
              class="left"
              col="12"
              md="4"
              sm="6"
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
              col="12"
              md="8"
              sm="6"
            >
            <!-- md보다 작아지면 나타나는 햄버거(md-none) -->
            <div class="d-flex d-md-none" >
              <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </div>
            <!-- 반응형 네비게이션 페이지. 원본 페이지처럼 스크롤은 안되는 상황. 살짝 내려가면 위의 내용이 안보인다. -->
            <!-- https://vuetifyjs.com/ko/components/navigation-drawers/ 의 Temporary 템플릿 -->
            <!-- 현재 반응형 네비게이션 페이지가 the-navigation.vue에 종속되어있는 느낌. 네비게이션 바, 바디 할거 없이 화면 전체에 종속되고 스크롤도 되어야 한다. 그래서 템플릿의 최상위 div의 아이디가 app인 듯. -->
            <v-navigation-drawer
              v-model="drawer"
              absolute
              temporary
            >
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>John Leider</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  link
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
            <!-- https://vuetifyjs.com/ko/styles/display/의 Display in print에서 알아낸 반응에 따라 네비바가 없어지게 하는 클래스 -->
            <!-- md 범위를 벗어나는 순간 보이지 않는다. 근데 범위 이하로 벗어날 때만 안보인다. 범위 이상은 보인다. 버그인지?> -->
              <div class="d-none d-md-block d-print-block">
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
              </div>
            </v-col>
          </v-layout>
        <!-- </div> -->
      <!-- </v-container> -->
    <!-- URL값에 따라 갱신되는 화면 영역 -->
  </div>
</template>
<script>
import * as icons from '@mdi/js'
export default {
  name: 'navigator',
  data: function () {
    return {
      icons: icons,
      drawer: false,
      group: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ]
    }
  },
  methods: {
  },
  watch: {
    group () {
      this.drawer = false
    }
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
