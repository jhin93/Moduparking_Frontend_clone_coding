<template>
  <div>
    <naver-maps eager
      :height="heightToNumber"
      :width="widthToNumber"
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
      <naver-marker :lat="37.5478695" :lng="127.0440953" @click="onMarkerClicked" @load="onMarkerLoaded"/>
    </naver-maps>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      info: false,
      marker: null,
      count: 1,
      map: null,
      isCTT: false,
      mapOptions: {
        lat: 37.5476597,
        lng: 127.0436095,
        zoom: 17,
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
    },
    widthToNumber () {
      return Number(this.width)
    },
    heightToNumber () {
      return Number(this.height)
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
  },
  props: {
    width: {
      type: String,
      default: '480'
    },
    height: {
      type: String,
      default: '400'
    }
  }
}
</script>
<style scoped>
  .info-window-container {
    padding: 10px;
    width: 100%;
    height: 100px;
  }
</style>
