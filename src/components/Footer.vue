<template>
  <v-footer class="footer-content">
    <v-flex>
      <div class="footer__text">
        상호명 : 주식회사 모두컴퍼니 | 사업자등록번호 : 220-88-52570 | 통신판매업 신고번호 : 제2017-서울중구-0923호<br>
        공동대표 : 강수남, 김동현 | 주소 : 서울시 성동구 왕십리로 115, 헤이그라운드 8층 (우) 04768 | 전화 : 1899-8242 | contact@moduparking.com | &copy; {{ new Date().getFullYear() }} 쉽고 편리한 주차 플랫폼 모두의주차장 All Right Reserved
      </div>
    </v-flex>
  </v-footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
/* div{
  border: solid;
  border-color: red;
} */
.container-footer{
  max-width: 100vw;
}

.footer-content{
  max-width: 100vw;
}
.footer-button{
  margin: 10px 10px 0px 10px;
}
</style>
