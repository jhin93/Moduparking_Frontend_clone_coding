<template>
  <div>
    <div id="nav">
      <span class="left">
        <router-link to="/">
          <img class="company_logo" src />
        </router-link>
      </span>
      <span class="right">
        <router-link to="/">서비스 소개</router-link>
        <router-link to="/about">기업 소개</router-link>
        <router-link to="/elementor-345">주차 공유 안내</router-link>
        <router-link to="/300f0-contact">제휴 ・ 협력 안내</router-link>
        <router-link to="/elementor-624">보도 ・ 홍보자료</router-link>
        <router-link to="/300f0-portfolio">Q & A</router-link>
      </span>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line
  name: "navigator" // eslint-disable-next-line
};
</script>
<style scoped>
#nav {
  padding: 30px;
  line-height: 1.7%;
  margin-left: 10%;
  margin-right: 10%;
  font-size: 18pt;
}

#nav a {
  font-weight: bold;
  color: #3f3f3f;
}
#nav a:hover {
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgb(0, 0, 0);
}

#nav a.router-link-exact-active {
  color: #0099ff;
}
</style>
