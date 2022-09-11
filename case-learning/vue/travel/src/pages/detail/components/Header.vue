<template>
  <div>
    <router-link tag="div"
                 to="/"
                 class="header-abs"
                 v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe61e;</div>
    </router-link>
    <!-- fade -->
    <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe61e;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop

      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    // 给window绑定的全局事件 ，在本组件和别的组件都会收到影响
    // 需要在离开页面时解绑
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    // 页面即将被隐藏，或页面被替换成新的页面的时候
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header-abs
  position absolute
  left 0.2rem
  top 0.2rem
  width 0.8rem
  height 0.8rem
  line-height 0.8rem
  text-align center
  border-radius 0.4rem
  background-color rgba(0, 0, 0, 0.8)
  .header-abs-back
    color #fff
    font-size 0.4rem
.header-fixed
  position fixed
  top 0
  left 0
  right 0
  z-index 2
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background-color $bgColor
  font-size 0.32rem
  .header-fixed-back
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #fff
</style>
