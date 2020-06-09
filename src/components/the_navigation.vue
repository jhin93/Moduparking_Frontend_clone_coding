<template>
  <div>
    <div id="nav">
      <span class="left">
        <router-link to="/">
          <img class="company_logo" src />
        </router-link>
      </span>
      <span class="right">
        <router-link to="/service_intro">서비스 소개</router-link>&nbsp;
        <router-link to="/corp_intro">기업 소개</router-link>&nbsp;
        <router-link to="/elementor-345">주차 공유 안내</router-link>&nbsp;
        <router-link to="/affiliate_cooperation">제휴 ・ 협력 안내</router-link>&nbsp;
        <router-link to="/elementor-624">보도 ・ 홍보자료</router-link>&nbsp;
        <router-link to="/300f0-portfolio">Q & A</router-link>
      </span>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line
  name: 'navigator' // eslint-disable-next-line
}
</script>
<style scoped>
#nav {
  width: 85%;
  padding: 30px;
  line-height: 1.7%;
  font-size: 18pt;
  margin-left: 150px;
  margin-right: 75px;
  background-color: antiquewhite;
}
.right {
}
</style>
