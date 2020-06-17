<template>
  <v-app>
    <v-layout row align-content-start justify-center>
      <navigator/>
      <router-view/>
      <!-- 왜 푸터는 대문자로 해야만 작동하는지 아직 의문 -->
      <Footer/>
    </v-layout>
  </v-app>
</template>

<script>
import navigator from '@/components/TheNavigation.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    navigator,
    Footer
  }
}
</script>
