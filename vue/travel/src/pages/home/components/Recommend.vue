<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <router-link tag="li"
                   class="item border-bottom"
                   v-for="item of list"
                   :key="item.id"
                   :to="'/detail/'+item.id">
        <img :src="item.imgUrl"
             class="item-img" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }

}
</script>
<style lang="stylus" scoped>
@import '~style/mixins.styl'
.title
  margin-top 0.2rem
  line-height 0.8rem
  background-color #eee
  text-indent 0.2rem
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding 0.1rem
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
    .item-button
      line-height 0.44rem
      margin-top 0.16rem
      background-color #ff9200
      padding 0 0.2rem
      border-radius 0.06rem
      color #fff
</style>
