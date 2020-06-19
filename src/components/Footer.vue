<template>
<!-- 원래 3번째 줄의 div가 <v-container> 였는데 여백이 해결되지 않아 div로 대체해 해결했다. 일단 반응형도 문제없다. 추후에 문제가 생길 수 있으니 유념.-->
  <div>
    <v-footer>
      <v-col
        cols="12"
        md="12"
        sm="12"
      >
        <div>
          상호명 : 주식회사 모두컴퍼니 | 사업자등록번호 : 220-88-52570 | 통신판매업 신고번호 : 제2017-서울중구-0923호<br>
          공동대표 : 강수남, 김동현 | 주소 : 서울시 성동구 왕십리로 115, 헤이그라운드 8층 (우) 04768 | 전화 : 1899-8242 | contact@moduparking.com | &copy; {{ new Date().getFullYear() }} 쉽고 편리한 주차 플랫폼 모두의주차장 All Right Reserved
        </div>
      </v-col>
    </v-footer>
    <button>이용약관</button>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
div{
  border: solid;
  border-color: red;
  width: 100%;
}
button{
  margin: 10px 30px;
}
</style>
