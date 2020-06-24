<template>
  <div>
    <naver-maps eager
      :height="height"
      :width="width"
      :mapOptions="mapOptions"
      :initLayers="initLayers"
      @load="onLoad">
      <naver-info-window
        class="info-window"
        @load="onWindowLoad"
        :isOpen="info"
        :marker="marker">
        <div class="info-window-container">
          <h1>{{hello}}</h1>
        </div>
      </naver-info-window>
      <naver-marker :lat="37.5476597" :lng="127.0436095" @click="onMarkerClicked" @load="onMarkerLoaded"/>
    </naver-maps>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      width: 480,
      height: 440,
      info: false,
      marker: null,
      count: 1,
      map: null,
      isCTT: false,
      mapOptions: {
        lat: 37.5476597,
        lng: 127.0436095,
        zoom: 16,
        zoomControl: true,
        zoomControlOptions: { position: 'TOP_RIGHT' },
        mapTypeControl: true
      },
      initLayers: ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN']
    }
  },
  computed: {
    hello () {
      return `Hello, World! × ${this.count}`
    }
  },
  methods: {
    onLoad (vue) {
      this.map = vue
    },
    onWindowLoad (that) {
    },
    onMarkerClicked (event) {
      this.info = !this.info
    },
    onMarkerLoaded (vue) {
      this.marker = vue.marker
    }
  },
  mounted () {
    setInterval(() => this.count++, 1000)
  }
}
</script>
<style scoped>
  .info-window-container {
    padding: 10px;
    width: 300px;
    height: 100px;
  }
</style>
