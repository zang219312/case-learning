<template>
  <div id="app">
    <!--显示的是当前路由地址所对应的内容 -->
    <!-- <img src="./assets/logo.png"> -->
    <!-- Detail不被缓存-->
    <keep-alive exclude="Detail">
      <!-- 我的路由的内容被加载过一次之后，就把路由的内容放在内存之中，下次进这个路由的时候，不需要重新渲染组件 ，
      只需要从内存里把以前的内容拿出来显示在页面上 -->
      <router-view />
    </keep-alive>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
