<template>
  <detail-layout :class="$route.params.name">
    <detail-top
      :data="top"
      :thumb-width="41.5"
    />
    <div
      v-if="contents.type === 'only-youtube'"
      class="only-youtube"
    >
      <youtube-media
        class="only-youtube__media"
        :video-id="contents.videoId"
      />
      <div
        v-if="!isMobile"
        class="only-youtube__bg"
      />
    </div>
    <template #bodyBg>
      <img :src="contents.bg" />
    </template>
  </detail-layout>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

import DetailLayout from '@page/components/DetailLayout'
import DetailTop from '@page/components/DetailTop'

export default {
  components: { DetailLayout, DetailTop },
  data () {
    return {
      namesArr: ['diguru', 'hojunsong'],
      top: {},
      contents: {}
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'isMobile',
      isTablet: 'isTablet',
      isDesktop: 'isDesktop'
    })
  },
  watch: {
    '$route.params.name': {
      async handler (val) {
        if (val && this.namesArr.includes(val)) {
          const res = await axios.get(`/jsons/detail_${val}.json`)
          this.top = res.data.top
          this.contents = res.data.contents
        } else {
          this.$router.push({ name: 'Home' }).catch()
        }
      },
      immediate: true
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.only-youtube {
  display: flex;
  width: 100%;
  border: 1px solid #000;
  margin-bottom: 86px;

  .mobile & {
    border-width: rem(3);
    margin: rem(4) 0 0;
    border-radius: rem(4);
  }

  &__media {
    width: rem(960, 18);
    height: rem(540, 18);
    border-right: 1px solid #000;

    ::v-deep iframe {
      width: 100% !important;
      height: 100% !important;
    }

    .mobile & {
      width: calc(100% + 2px);
      height: rem(454);
      margin: -1px;
    }
  }

  &__bg {
    position: relative;
    flex: 1 0 0;
    background-image: root('/detail/contents_only_youtube.png');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;

    @include texture;
  }
}
</style>
