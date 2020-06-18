<template>
<!-- 원래 3번째 줄의 div가 <v-container> 였는데 여백이 해결되지 않아 div로 대체해 해결했다. 일단 반응형도 문제없다. 추후에 문제가 생길 수 있으니 유념.-->
  <div>
    <v-toolbar flat class="hidden-sm-and-down">
      <v-toolbar-title>
        <router-link to="/">
          <img src="../assets/companylogo.png" alt="" height="100">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="(menu, i) in menus"
          :key="i"
          :to="menu.link"
          :title="menu.title"
          :text="true"
          retail-focus-on-click="true"
        >{{ menu.title }}</v-btn>
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
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-navigation-drawer>
  </div>
</template>
<script>
/*
* <v-menu
*   transition="slide-y-transition"
*      bottom
*      >
*      <template v-slot:activator="{ on, attrs }">
*        <v-btn
*          class="purple"
*          color="primary"
*          dark
*          v-bind="attrs"
*          v-on="on"
*        >
*          Slide Y Transition
*        </v-btn>
*      </template>
*      <v-list>
*        <v-list-item
*          v-for="(item, i) in items"
*          :key="i"
*        >
*          <v-list-item-title>{{ item.title }}</v-list-item-title>
*        </v-list-item>
*      </v-list>
*    </v-menu>
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
        title: '서비스 소개',
        items: [],
        to: []
      }, {
        link: '/corp-intro',
        title: '기업 소개',
        items: [],
        to: []
      }, {
        link: '/elementor-345',
        title: '주차 공유 안내',
        items: [
          '공유주차장 이용하기',
          '사유지 주차공간 이용하기',
          '거주자우선(주거지)공간 이용하기',
          '공유시간 등록과 관리',
          '공유적립금 확인하기',
          '공유 정산 안내'
        ],
        to: []
      }, {
        link: '/affiliate-cooperation',
        title: '제휴 ・ 협력 안내',
        items: [],
        to: []
      }, {
        link: '/elementor-624',
        title: '보도 ・ 홍보자료',
        items: [],
        to: []
      }, {
        link: '/300f0-portfolio',
        title: 'Q & A',
        items: [],
        to: []
      }],
      dialog: false
    }
  }
}
</script>
<style scoped>
  div {
    border: solid;
    border-color: red;
    width: 100%
  }
</style>
