<template>
  <div id="app">

    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link> -->

    <!-- </div> -->
    <!-- <router-view/> -->
    <!-- 上面展示 -->
   <div></div>
   <router-view/>
   <!-- 底部导航 -->
   <div class="nav-bottom">
    <router-link to="/home">
      <i class="iconfont iconiconfontzhizuobiaozhun023101"></i>
      <label>首页</label>
    </router-link>
    <router-link to="/find">
      <i class="iconfont iconfaxian1"></i>
      <label>发现</label>
    </router-link>
    <router-link to="/order">
      <i class="iconfont icondingdan"></i>
      <label>订单</label>
    </router-link>
    <router-link to="/mine">
      <i class="iconfont iconwode"></i>
      <label>我的</label>
    </router-link>
  </div>
  </div>
</template>

<style lang="scss">
@import './assets/css/index.css'
</style>
