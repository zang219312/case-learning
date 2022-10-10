<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont backicon">&#xe61e;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe62a;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
  display flex
  line-height $headerHeight
  background $bgColor
  color #fff
  .header-left
    width 0.64rem
    float left
    padding 0.08rem 0 0 0.16rem
    .backicon
      text-align center
      font-size 0.4rem
  .header-input
    flex 1
    height 0.64rem
    line-height 0.64rem
    margin-top 0.2rem
    margin-left 0.2rem
    padding-left 0.2rem
    background #fff
    border-radius 0.1rem
    color #ccc
  .header-right
    min-width 1.04rem
    padding 0.1rem
    float right
    text-align center
    color #fff
    .arrow-icon
      margin-left -0.04rem
      font-size 0.24rem
</style>
