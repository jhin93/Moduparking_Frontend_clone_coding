<template>
  <v-app>
    <v-layout row align-content-start justify-center>
      <navigator/>
      <router-view/>
    </v-layout>
  </v-app>
</template>

<script>
import navigator from '@/components/TheNavigation.vue'

export default {
  name: 'App',
  components: {
    navigator
  }
}
</script>
