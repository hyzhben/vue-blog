<template>
    <div>
      <el-input style="width: 350px;"  v-model="username" placeholder="请输入用户名"></el-input>
      <div style="margin: 20px 0;"></div>
      <el-input style="width: 350px;" v-model="pass" placeholder="请输入密码"></el-input>
      <div style="margin: 5px 0;"><span class="forgetPass">忘记密码</span></div>
      <div style="margin: 30px 0;"></div>
      <el-button style="width: 350px;" type="primary" @click="login">提交</el-button>
    </div>
</template>

<script>
  import {postFormAPI,ErrorCodeDeal} from "../../api/api";
  import {ERR_OK} from "../../api/config";

  export default {
        name: "login",
        data(){
          return {
            username :'',
            pass:'',
          }
        },
      methods:{
        login(){
          const data={ username:this.username,
            password:this.pass}
          postFormAPI(data)
            .then(res=>{
              if (res.data.code == ERR_OK){
                      this.$router.push({path:'/main'})
              } else{
                ErrorCodeDeal(res)
              }

            })
            .catch(err => console.log(err))
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
