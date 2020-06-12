<template>
  <div>
    <navigator />
    <router-view />
  </div>
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
