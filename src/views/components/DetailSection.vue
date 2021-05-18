<template>
  <section :class="customClass">
    <div class="details-layout__inner">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'body'
    }
  },
  computed: {
    customClass () {
      return `details-layout__${this.type}`
    }
  }
}
</script>
