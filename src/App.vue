<template>
  <v-app>
    <navigator />
    <router-view />
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
