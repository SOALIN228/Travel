<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'CommonFadeAnimation',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity .5s
</style>
