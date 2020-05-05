<template>
  <div id="app" class="main">
    <div class='login'>
      <span class="loginSpan">Blog</span>
    </div>
    <div class='content'>
      <div>
        <router-link to="/login" class="route-btn"  active-class="active">登录</router-link>
        <router-link to="/register"  class="route-btn"  active-class="active">注册</router-link>
      </div>
      <div class="contentView">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  html,body{
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #f4f4f4;
  }
  .main{
    position: absolute;
    top: 20%;
    left: 35%;
  }
  .login {
    position: relative;
    width: 80px;
    height: 50px;
    margin: auto;
    background-color: #E0E0E0;
  }
  .login:before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    right:80px;
    border-width: 25px 25px;
    border-style: solid;
    border-color: transparent #E0E0E0 transparent transparent;
  }
  .login:after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    left:80px;
    border-width: 25px 25px;
    border-style: solid;
    border-color: transparent transparent transparent #E0E0E0;
    top:0;
  }
  .loginSpan{
    font-size: 25px;
    padding: 15px;
    line-height: 45px;/*让文字内容垂直居中*/
    text-align: center;/*让文字水平居中*/
  }
  .content{
    background-color: #fff;
    border: 5px solid #E0E0E0;
    margin-top: -27px;
    width: 600px;
    height: 400px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .active{
    color: blue !important;
  }
  .route-btn{
    margin-left: 130px;
    margin-top: 50px;
    border: none;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    color: #1e2021;
  }
  .contentView{
    margin-left: 140px;
    margin-top: 30px;
  }
</style>
