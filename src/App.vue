<template>
  <v-app class="">
    <v-content align-content-start justify-space-between>
      <!-- 왜 푸터는 대문자로 해야만 작동하는지 아직 의문 -->
      <navigator/>
      <router-view />
      <Footer/>
    </v-content>
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
