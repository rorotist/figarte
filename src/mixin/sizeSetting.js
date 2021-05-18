const sizeSetting = {
  data () {
    return {
      device: null
    }
  },
  computed: {
    isMobile () {
      return this.device === 'mobile'
    },
    isTablet () {
      return this.device === 'tablet'
    },
    isDesktop () {
      return this.device.includes('desktop')
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      const size = window.innerWidth
      if (size > 1920) this.device = 'desktop-wide'
      else if (size >= 1230 && size <= 1920) this.device = 'desktop'
      else if (size < 1230 && size > 991) this.device = 'tablet'
      else this.device = 'mobile'
    }
  }
}

export default sizeSetting
