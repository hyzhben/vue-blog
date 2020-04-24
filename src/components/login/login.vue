<template>
    <div>
      <el-input style="width: 350px;"  v-model="account" placeholder="请输入账号"></el-input>
      <div style="margin: 20px 0;"></div>
      <el-input style="width: 350px;" v-model="pass" placeholder="请输入密码"></el-input>
      <div style="margin: 5px 0;"><span class="forgetPass">忘记密码</span></div>
      <div style="margin: 30px 0;"></div>
      <el-button style="width: 350px;" type="primary" >提交</el-button>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return {
            account :'',
            pass:'',
          }
        }
    }
</script>

<style scoped>
.forgetPass{
  opacity: 0.5;
  float: right;
  margin-right:120px ;
  font-size: 12px;

}
</style>
