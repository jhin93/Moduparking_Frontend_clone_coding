<template>
  <div>
    <v-container>
      <v-flex>
        <v-layout row>
          <div id="nav">
            <v-col
              cols="6"
              md="4"
            >
              <span class="left">
                <router-link to="/">
                  <img src="../assets/companylogo.png" alt="">
                </router-link>
              </span>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="8"
            >
              <span class="right">
                <router-link to="/service-intro">서비스 소개</router-link>
                <router-link to="/corp-intro">기업 소개</router-link>
                <router-link to="/elementor-345" @mouseOver="set_flag" @mouseOut="down_flag">
                  주차 공유 안내
                  <v-icon>keyboard-arrow-down</v-icon>
                  <transition name="popup">
                    <div class="down-menu" v-if="flag">adfadf</div>
                  </transition>
                </router-link>
                <router-link to="affiliate-cooperation">제휴 ・ 협력 안내</router-link>
                <router-link to="/elementor-624">보도 ・ 홍보자료</router-link>
                <router-link to="/300f0-portfolio">Q & A</router-link>
              </span>
            </v-col>
          </div>
        </v-layout>
      </v-flex>
    </v-container>
    <!-- URL값에 따라 갱신되는 화면 영역 -->
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'navigator',
  data: function () {
    return { flag: false }
  },
  methods: {
    set_flag: function () {
      this.flag = true
    },
    down_flag: function () {
      this.flag = false
    }
  }
}
</script>
<style scoped>
#nav {
  width: 1440px;
  height: 160px;
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
  padding-bottom: 0.5rem;
  color: #0099ff;
}
#container {
  display: table-cell;
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
</style>
