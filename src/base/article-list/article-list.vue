<template>
  <div style="width: 100%;height: 100%;">
    <el-container class="el-articles"  v-for="(article,index) in articles" :key="index">
      <el-aside width="20%">
        <div>
          <div style="height: 20px;">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <div style="height: 20px;"><span class="span-date">06</span></div>
          <div style="height: 20px;"><span class="span-mon">JUNE</span></div>
          <div style="height: 20px;"><span class="span-year">2020</span></div>
        </div>
      </el-aside>
      <el-main>
        <div>
          <div class="div-title"><p class="p-title">{{article.title}}</p></div>
          <div class="div-title"><p class="p-content">{{article.content}}</p></div>
          <div class="div-title">
            <i class="el-icon-s-custom" style="color: #999;"></i>
            <span class="span-user">xm</span>
            <i class="el-icon-collection" style="color: #999;"></i>
            <span class="span-user">java</span>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "article-list",
      props:{
          articles:{
            type:Array,
            default:[]
          }
      }
    }
</script>

<style scoped>
  .el-articles{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }
  .el-aside {
    background-color: #383c3d;
    color: #333;
    text-align: center;
    line-height: 140px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    margin-top: 0px;
    padding: 0px;
  }

  .span-date{
    color: white;
    font-size: 22px;
  }
  .span-mon{
    color: #ffffff;
    opacity: 0.6;
    font-size: 13px;
  }
  .span-year{
    padding: 0 8px;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.25);
    color: rgba(255,255,255,0.5);
    box-shadow: inset 0 1px 0 rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.07);
    font-size: 13px;
    font-weight: 600;
  }
  .div-title{
    margin-left: 20px;
    line-height: 40px;
    text-align: left;
  }
  .p-title{
    color: #333;
    font-weight: bold;
  }
  .p-content{
    color: #999;
  }
  .span-user{
    color: #999;
  }

</style>
