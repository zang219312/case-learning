<template>
  <div>
    <div class="banner"
         @click="handleBannerClick">
      <img class="banner-img"
           :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number "><span class="iconfont banner-icon">&#xe665;</span>{{this.gallaryImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs"
                      v-show="showGallary"
                      @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fadeAnimation/Fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size 0.32rem
      padding 0 0.2rem
    .banner-number
      height 0.32rem
      line-height 0.32rem
      margin-top 0.14rem
      padding 0 0.4rem
      border-radius 0.2rem
      background-color rgba(0, 0, 0, 0.8)
      font-size 0.24rem
      .banner-icon
        font-size 0.24rem
        padding-right 0.1rem
</style>
