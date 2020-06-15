<template>
  <v-app>
    <v-layout row>
      <navigator/>
      <router-view/>
    </v-layout>
  </v-app>
</template>

<script>
import navigator from '@/components/the-navigation.vue'

export default {
  name: 'App',
  components: {
    navigator
  }
}
</script>
