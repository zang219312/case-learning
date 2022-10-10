<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of list"
          :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl"
               class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <!-- <button class="item-button">查看详情</button> -->
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/mixins.styl'
.title
  line-height 0.8rem
  background-color #eee
  text-indent 0.2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 37.09%
  .item-img
    width 100%
.item-info
  flex 1
  padding 0.1rem
  min-width 0
  .item-title
    line-height 0.54rem
    font-size 0.32rem
    elliplsis()
  .item-desc
    line-height 0.4rem
    color #cccccc
    elliplsis()
</style>
