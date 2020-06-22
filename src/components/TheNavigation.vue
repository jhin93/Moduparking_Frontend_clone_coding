<template>
  <v-container class="container-navbar">
    <v-toolbar flat class="hidden-sm-and-down">
      <v-toolbar-title>
        <router-link to="/">
          <img src="../assets/companylogo.png" alt="" height="100" class="logo">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          depressed
          v-for="(menu,i) in menus"
          :key="i"
          :to="menu.link"
          :title="menu.title"
          :text="true"
          retail-focus-on-click="true"
        >
          <v-menu v-if="menu.items" open-on-hover  offset-y max-width="100%" left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="rgba(0,0,0,0)" v-on="on" v-bind="attrs"
              slot="activator" light depressed>
                <span>{{ menu.title }}</span>
                <v-icon >{{icons.mdiChevronDown}}</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in menu.items" :key="index" >
                <v-list-item-title>
                  <router-link class="t__black text_deco" :to="item.to"><div class="align_center">{{item.title}}</div></router-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <span v-else >{{menu.title}}</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-toolbar flat class="hidden-md-and-up">
      <v-toolbar-title>
        <router-link to="/">
          <img src="../assets/companylogo.png" alt="" height="100">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary>
      <v-menu
      transition="slide-y-transition"
      bottom
      >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="purple"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Slide Y Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in menus"
          :key="i"
          link>
          <v-list-item-content>
            <v-list-item-title class="test1" v-if="!menu.items">
              <router-link class="t__black text_deco" :to="menu.link">{{ menu.title }}</router-link>
            </v-list-item-title>
             <v-expansion-panels v-else flat>
                <v-expansion-panel>
                  <v-expansion-panel-header class="" :expand-icon="icons.mdiChevronDown">{{menu.title}}</v-expansion-panel-header>
                    <v-expansion-panel-content class="">
                      <router-link  v-for="(subject,i) in menu.items" :key="i" :to="subject.to" class="t__black text_deco">
                        <div class="bottom_1rem">{{subject.title}}</div>
                      </router-link>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
/**
 * <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary>
      <v-list dense>
        <v-list-item
          v-for="(menu, i) in menus"
          :key="i"
          link>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
 */
import * as icons from '@mdi/js'
export default {
  name: 'navigator',
  data: function () {
    return {
      drawer: null,
      icons: icons,
      menus: [{
        link: '/service-intro',
        title: '서비스 소개'
      }, {
        link: '/corp-intro',
        title: '기업 소개'
      }, {
        link: '/elementor-345',
        title: '주차 공유 안내',
        items: [
          {
            title: '공유주차장 이용하기',
            to: '/elementor-330'
          },
          {
            title: '사유지 주차공간 이용하기',
            to: '/elementor-400'
          },
          {
            title: '거주자우선(주거지)공간 공유하기',
            to: '/elementor-276'
          },
          {
            title: '공유시간 등록과 관리',
            to: '/elementor-437'
          },
          {
            title: '공유적립금 확인하기',
            to: '/elementor-567'
          },
          {
            title: '공유 정산 안내',
            to: '/300f0-portfolio'
          }
        ]
      }, {
        link: '/affiliate-cooperation',
        title: '제휴 ・ 협력 안내'
      }, {
        link: '/elementor-624',
        title: '보도 ・ 홍보자료'
      }, {
        link: '/300f0-portfolio',
        title: 'Q & A'
      }],
      dialog: false
    }
  }
}
</script>
<style scoped>
.test1{
  padding-top: 2%;
  padding-bottom: 2%;
}
.v-expansion-panel-header{
  padding: 0% !important;
  font-size: 13.5px !important;
}
.v-list-item__content{
  padding: 0% !important;
}
.padding_bottom_1rem{
  padding-bottom: 1rem;
}
/* .container-navbar{
  max-width: 100vw;
} */

  /* div {
    border: solid;
    border-color: red;
  } */
</style>
