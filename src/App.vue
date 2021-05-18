<template>
  <div
    class="wrap"
    :class="device"
  >
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      device: null
    }
  },
  watch: {
    device: {
      handler (val) {
        if (val) {
          this.$store.dispatch('checkDevice', val)
        }
      },
      immediate: true
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      const size = document.documentElement.clientWidth
      if (size > 1920) this.device = 'desktop-wide'
      else if (size >= 1230 && size <= 1920) this.device = 'desktop'
      else if (size < 1230 && size > 991) this.device = 'tablet'
      else this.device = 'mobile'
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  height: 100%;

  .router-fade-enter-active,
  .router-fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .router-fade-enter,
  .router-fade-leave-active {
    opacity: 0;
  }
}
</style>
