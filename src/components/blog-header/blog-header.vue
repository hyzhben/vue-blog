<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="8" >
          <div class="logo">
             <i class="before-i" style="margin-bottom: 10px;"></i>
            <span class="logo-content">Blog-skill</span>
            <i class="after-i" style="margin-top: 10px"></i>
          </div>
      </el-col>
      <el-col :span="15">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#f4f4f4"
          active-text-color="#808080" router>
          <el-menu-item index="/main/home">
            <img class="icon-img" src="./首页.png">  首页
          </el-menu-item>
          <el-menu-item index="/main/" >
            <img class="icon-img" src="./菜单.png">  分类
          </el-menu-item>
          <el-menu-item index="/main/file" >
            <img class="icon-img" src="./归档.png">  归档
          </el-menu-item>
          <el-menu-item index="/mian/">
            <img class="icon-img" src="./日程表.png">  日程表
          </el-menu-item>
          <el-menu-item index="/main/map">
            <img class="icon-img" src="./地图.png">  站点地图
          </el-menu-item>
          <el-menu-item index="/main/about">
            <img class="icon-img" src="./个人.png">  关于
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '/main/addArticle',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>

  .el-menu{
    margin-top :20px;
  }
  .el-menu-item {
    /*margin-left: 10px;*/
    font-size: 15px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .logo{
    float: right;
  }
  .el-menu--horizontal{
    border-bottom: solid 0px;
  }

  a {
    text-decoration: none;
  }

  .icon-img{
    width: 15px;
    height: 15px;
    vertical-align:middle;
  }

  .logo{
    float: right;
    text-align: center;
    margin-top: 35px;
  }


  .before-i,.after-i{
    width: 100px;
    display: block;
    height: 2px;
    background: #222;
  }
</style>
