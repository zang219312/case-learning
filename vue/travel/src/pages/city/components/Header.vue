<template>
  <div class="header">城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe61e;</div>
    </router-link>
  </div>

</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
  position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background-color $bgColor
  font-size 0.32rem
  .header-back
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #fff
</style>
