<template>
  <div class="app">
      <router-link to="/signIn" class="route-btn"  active-class="active"></router-link>
      <router-link to="/main"  class="route-btn"  active-class="active"></router-link>
    <router-view/>
  </div>
</template>

<script>
  // import SignIn from './components/signIn/signIn'
  // import Main from './components/main/main'
export default {
  name: 'App',
  /*components:{
    SignIn,
    Main
  }*/
}
</script>

<style>
  html,body,.app{
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }
</style>
