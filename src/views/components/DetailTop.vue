<template>
  <section class="detail-top">
    <div
      class="detail-top__thumb"
      :style="{maxWidth: this.isMobile ? null : `${thumbWidth}%`}"
    >
      <img :src="thumbUrl" />
      <slot name="thumbEtc" />
    </div>
    <div
      class="detail-top__info"
      :style="{maxWidth: this.isMobile ? null : `${100-thumbWidth-10}%`}"
    >
      <div class="detail-top__title">
        {{ data.title }}
        <div
          v-if="data.titleLink"
          class="detail-top__title-link"
        >
          링크
        </div>
      </div>
      <div class="detail-top__subtitle">
        {{ data.subtitle }}
        <div
          v-if="data.subtitleLink"
          class="detail-top__subtitle-link"
        >
          <a
            :href="data.subtitleLink"
            target="_blank"
          >
            {{ data.subtitleLinkTitle }}
          </a>
        </div>
      </div>
      <div class="detail-top__text">
        {{ data.text }}
        <slot name="text" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DetailTop',
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String,
      default: null
    },
    thumbWidth: {
      type: Number,
      default: null
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'isMobile',
      isTablet: 'isTablet',
      isDesktop: 'isDesktop'
    }),
    thumbUrl () {
      return this.isMobile ? this.data.thumbMobile : this.data.thumb
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-top {
  $root: &;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -1px;

  .mobile & {
    flex-direction: column;
    margin-top: rem(86);
  }

  &__info {
    padding: 10px 0;

    .mobile & {
      padding: rem(66) 0;
    }
  }

  &__title {
    @include font(500);

    display: flex;
    align-items: center;
    font-size: rem(50, 18);
    letter-spacing: -2px;
    white-space: nowrap;

    .mobile & {
      font-size: rem(52);
    }
  }

  &__subtitle {
    @include font(200);

    display: flex;
    align-items: center;
    margin-top: rem(15, 18);
    font-size: rem(40, 18);
    letter-spacing: -0.12em;
    white-space: nowrap;

    .mobile & {
      justify-content: space-between;
      margin-top: rem(22);
      font-size: rem(52);
    }
  }

  &__subtitle-link {
    margin-left: 48px;
    line-height: 0;

    a {
      @include font(500);

      position: relative;
      display: inline-flex;
      height: rem(32, 18);
      align-items: center;
      justify-content: center;
      padding: 0 rem(16, 18);
      border: 1px solid #000;
      background: #094;
      color: #fffefe;
      font-size: rem(14, 18);
      white-space: nowrap;

      @include texture;
    }

    .mobile & {
      margin-left: 0;

      a {
        height: rem(56);
        font-size: rem(24);
      }
    }
  }

  &__text {
    @include font(400);

    margin-top: rem(28, 18);
    font-size: rem(18, 18);
    letter-spacing: -0.08em;
    line-height: 1.9;
    word-break: keep-all;

    .mobile & {
      margin-top: rem(51);
      font-size: rem(30);
    }
  }

  &__thumb {
    overflow: hidden;
    width: 100%;
    border: 1px solid #000;
    margin-top: -1px;

    img {
      width: 100%;
    }

    .mobile & {
      margin: 0;
    }
  }
}
</style>
