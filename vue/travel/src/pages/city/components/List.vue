<template>
  <div class="list"
       ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
            <!-- this.$store.state.city)-->
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hot"
               :key="item.id"
               @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item,key) of cities"
           :key="key"
           :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class='item border-bottom'
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)"> {{innerItem.name}} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    /** 把vuex里面的city，这个公有的数据映射到我这个组件的计算属性里，映射过来的名字叫做currentCity  */
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      /** 在组件中可以不用dispatch调用actions，可以直接commit直接调用mutations */
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    /** 我们有一个mutations叫做changeCity，然后把这个mutations映射到我们这个组件里面一个名字叫做changeCity
     *  的方法里
     */
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]

        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    // 不加clcik：true android点击无效
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  .title
    line-height 0.54rem
    background-color #eeeeee
    padding 0.2rem
    color #666
    font-size 0.26rem
  .button-list
    overflow hidden
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      float left
      width 33.33%
      .button
        text-align center
        margin 0.1rem
        padding 0.1rem 0
        border 0.02rem solid #cccccc
        border-radius 0.06rem
  .item-list
    .item
      line-height 0.76rem
      padding 0.2rem
</style>
