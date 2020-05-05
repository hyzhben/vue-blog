<template>
  <div class="main">
    <Main></Main>
  </div>
</template>

<script>
  import Main from './components/main/main'
export default {
  name: 'App',
  components:{
    Main
  }
}
</script>

<style>
  html,body,.main{
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }
</style>
