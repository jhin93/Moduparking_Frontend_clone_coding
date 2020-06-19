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
  </v-container>
</template>
<script>
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
        title: '주차 공유 안내'
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
  .container-navbar{
    max-width: 100vw;
  }

  /* div {
    border: solid;
    border-color: red;
  } */
</style>
