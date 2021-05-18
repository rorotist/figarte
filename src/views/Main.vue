<template>
  <div
    class="contents"
    :class="device"
  >
    <div class="contents__wrap">
      <div class="contents__image">
        <transition>
          <img
            v-show="isDesktop"
            src="/images/teaser/pc_contents_wide.png"
          />
        </transition>
        <transition>
          <img
            v-show="isTablet"
            src="/images/teaser/pc_contents.png"
          />
        </transition>
        <transition>
          <img
            v-show="isMobile"
            src="/images/teaser/mobile_contents.png"
          />
        </transition>
      </div>
      <div class="contents__body">
        <div class="links">
          <div
            v-for="(item, index) in links"
            :key="index"
            class="links__item"
            :class="`links__btn${item.id}`"
          >
            <a
              :href="item.link"
              :target="item.link ? '_blank' : null"
              @click="linkAction(item)"
            >
              {{ item.text }}
            </a>
          </div>
        </div>
      </div>
      <div
        v-if="isMobile"
        class="contents__texts"
      >
        <img
          src="/images/teaser/mobile_guide.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      links: [
        { id: '1', text: '디구루', link: 'https://forms.gle/xSGjtrYcWwEPZ6vAA' },
        { id: '2', text: '송호준', link: 'https://youtu.be/08lWz1qMOZY' },
        { id: '3', text: '져스트프로젝트', link: 'https://docs.google.com/forms/d/1BozQ7aD8cGdNmy7YK15iKo4i0jPYzONNbxesXQrtYgM/edit' },
        { id: '4', text: '최승준', link: 'https://forms.gle/snQE8Q418Wa68xnC9' },
        { id: '5', text: '케플러49', link: 'https://www.instagram.com/p/COP5tCcJSmF/?utm_source=ig_web_copy_link' },
        { id: '6', text: '페이퍼컴퍼니 어반', link: 'https://docs.google.com/forms/d/18NkAIi7FOB1p33mUHGZAeTZ32QRabfNlHvxH9DE0gLw/viewform?edit_requested=true' },
        { id: '7', text: '허윤경', link: 'https://docs.google.com/forms/d/e/1FAIpQLSf4V0hlPYNrGo6VJOvfb5G3RCZKwDurV0HTZ6iUgF8F0HUDNA/viewform' },
        { id: '8', text: '2021 세계문화예술교육 주간', link: 'http://arteweek.kr/' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'isMobile',
      isTablet: 'isTablet',
      isDesktop: 'isDesktop'
    })
  },
  watch: {},
  mounted () {},
  methods: {
    linkAction (item) {
      if (!item.link) {
        alert('준비중입니다.')
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contents {
  $root: &;

  position: relative;
  z-index: 2;
  width: 100%;
  padding: 54px 0;

  .desktop & {
    min-width: 1920px;
  }

  .mobile & {
    padding: 0;
  }

  &__wrap {
    position: relative;
    border: solid #000;
    border-width: 1px 0;

    .mobile #{$root} & {
      border-width: 0;
    }

    &::before,
    &::after {
      position: absolute;
      background: #000;
      content: '';

      .mobile #{$root} & {
        display: none;
      }
    }

    &::before {
      top: 56.2%;
      left: 0;
      width: 1230px;
      height: 1px;

      .desktop-wide #{$root} & {
        width: 64%;
      }
    }

    &::after {
      top: 0;
      bottom: 0;
      left: 1230px;
      width: 1px;

      .desktop-wide #{$root} & {
        left: 64%;
      }
    }
  }

  &__image {
    line-height: 0;
  }

  &__body {
    position: absolute;
    top: 56.3%;

    .desktop #{$root} &,
    .desktop-wide #{$root} & {
      bottom: -1px;
      left: 18.7%;
      width: 45.5%;

      @include ieAll {
        width: 45.55%;
      }
    }

    .tablet #{$root} & {
      right: -3px;
      bottom: -1px;
      left: 29.2%;
    }

    .mobile #{$root} & {
      top: 29.15%;
      right: 8.7%;
      left: 8.7%;
      height: 37.4%;
    }
  }

  &__texts {
    position: absolute;
    top: 69.5%;
    right: 8.7%;
    left: 8.7%;
    border: 1px solid #000;
    line-height: 0;
  }
}

.links {
  $root: &;

  display: flex;
  height: 100%;
  flex-wrap: wrap;
  align-items: stretch;

  &__item {
    width: 50%;
    padding: 1px 0 0 1px;
    border: 1px solid #000;
    margin: -1px 0 0 -1px;
    cursor: pointer;

    a {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 0;
    }

    .mobile & {
      width: 100%;
    }
  }

  @for $i from 1 to 9 {
    #{$root}__btn#{$i} {
      background: root('teaser/button_#{$i}.png') 50% 50% no-repeat;
      background-size: 100% auto;

      &:hover {
        background-image: root('teaser/button_#{$i}_over.png');
      }

      .mobile & {
        background-size: 100% auto;
      }
    }
  }
}
</style>
