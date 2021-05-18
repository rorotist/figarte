<template>
  <div class="details-layout">
    <detail-section type="header">
      <div class="header-body">
        <div class="header-body__logo">
          ART PROJECT
        </div>
        <div class="header-body__sns">
          <span
            v-for="item in snsLists"
            :key="item.type"
            class="header-body__sns-item"
          >
            <a
              :href="item.link"
              target="_blank"
            >
              <img :src="snsImageSrc(item.type)" />
            </a>
          </span>
        </div>
      </div>
    </detail-section>
    <detail-section type="body">
      <div class="details-layout__contents-bg">
        <slot name="bodyBg" />
      </div>
      <div class="details-layout__contents">
        <slot />
      </div>
    </detail-section>
    <detail-section type="foot">
      <div class="foot-body">
        <div class="foot-body__text">
          <em>
            2021 세계문화예술교육 주간
          </em>
          <span>
            사회 위기 속 참여적 예술교육의 역할
          </span>
        </div>
        <div class="foot-body__logos">
          <img
            v-if="!isMobile"
            src="/figarte/images/detail/foot_logos.png"
          />
          <img
            v-else
            src="/figarte/images/detail/foot_logos_mo.png"
          />
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

import DetailSection from '@page/components/DetailSection'

export default {
  components: { DetailSection },
  data () {
    return {
      snsLists: []
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'isMobile',
      isTablet: 'isTablet',
      isDesktop: 'isDesktop'
    }),
    snsImageSrc () {
      return (val) => {
        return `/figarte/images/detail/top_${this.isMobile ? 'mo' : 'pc'}_${val}.png`
      }
    }
  },
  async mounted () {
    const res = await axios.get('/figarte/jsons/detail_header.json')
    this.snsLists = res.data.list
  }
}
</script>

<style lang="scss">
.details-layout {
  $root: &;

  position: relative;
  z-index: 2;
  width: 100%;
  background: linear-gradient(to right, #fff, #ffff2c);
  line-height: 1;

  @include texture;

  &__inner {
    position: relative;
    max-width: 1280px;
    padding: 0 40px;
    margin: 0 auto;

    .mobile & {
      padding: 0 rem(86);
    }
  }

  &__contents {
    position: relative;
    z-index: 2;

    &-bg {
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -960px;
    }
  }

  &__body {
    position: relative;
    z-index: 2;
    display: block;
    min-height: calc(100vh - 110px);

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      content: root('/detail/bg_shape2.png');
      transform: translate(50%, -30%);
    }

    .mobile & {
      padding-bottom: rem(300);
      background-image: root('/detail/contents_bg_mo.png');
      background-position: 50% 100%;
      background-repeat: no-repeat;
      background-size: 97.37% auto;
    }
  }

  &__header {
    position: relative;
    display: block;
    border-bottom: 1px solid #000;

    &::before {
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -960px;
      content: root('detail/bg_shape1.png');
    }

    .mobile & {
      &::before {
        width: 100%;
        height: rem(136);
        background-image: root('detail/bg_shape1_mo.png');
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: contain;
        content: '';
      }
    }
  }

  &__foot {
    position: relative;
    border-top: 1px solid #000;
    background: linear-gradient(to left, #fff, #ffff2c);
    text-align: center;

    @include texture;
  }
}

.header-body {
  position: relative;
  z-index: 2;
  display: flex;
  height: 55px;
  align-items: center;
  justify-content: space-between;

  .mobile & {
    height: rem(158);
    justify-content: center;
  }

  &__logo {
    @include fontQ(400);

    font-size: 26px;
    letter-spacing: 1px;

    .mobile & {
      font-size: rem(53);
    }
  }

  &__sns {
    display: flex;
    align-items: center;
    justify-content: center;

    .mobile & {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }

  &__sns-item {
    & + & {
      margin-left: 20px;
    }

    .mobile & {
      img {
        width: inherit;
        height: rem(45);
      }
    }
  }
}

.foot-body {
  $root: &;

  display: flex;
  height: 55px;
  align-items: center;
  justify-content: space-between;
  line-height: 1;

  .mobile & {
    display: inline-flex;
    width: 100%;
    height: inherit;
    flex-direction: column;
    padding: rem(42) 0;
    margin: 0 auto;
  }

  &__text {
    .mobile & {
      width: 100%;
      text-align: left;
    }

    em {
      @include font(500);

      margin-right: 9px;
      font-size: 20px;
      letter-spacing: -1px;

      .mobile & {
        font-size: rem(50);
      }
    }

    span {
      @include font(200);

      font-size: 14px;
      word-spacing: -1px;

      .mobile & {
        display: block;
        margin-top: rem(13);
        font-size: rem(35);
      }
    }
  }

  &__logos {
    .mobile & {
      width: 100%;
      margin-top: rem(27);
    }
  }
}
</style>
