<template>
    <div>
        <el-row class="menu">
          <el-col :span="5"><div class="grid-content bg-purple title-content">
            <i class="before-i"></i>
            <span class="title-content">Blog-skill</span>
            <i class="after-i"></i>
          </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content"   @mouseover="enter($event)" @mouseleave ="leave($event)">
              <img class="icon-img" src="./首页.png">
              <span class="menu-content">首页</span>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content"  @mouseover="enter($event)" @mouseleave ="leave($event)">
              <img class="icon-img" src="./菜单.png">
              <span class="menu-content">分类</span>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content"  @mouseover="enter($event)" @mouseleave ="leave($event)">
              <img class="icon-img" src="./归档.png">
              <span class="menu-content">归档</span>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content"  @mouseover="enter($event)" @mouseleave ="leave($event)">
              <img class="icon-img" src="./日程表.png">
              <span class="menu-content">日程表</span>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content"  @mouseover="enter($event)" @mouseleave ="leave($event)">
              <img class="icon-img" src="./地图.png">
              <span class="menu-content">站点地图</span>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content"  @mouseover="enter($event)" @mouseleave ="leave($event)">
              <img class="icon-img" src="./个人.png">
              <span class="menu-content">关于</span>
            </div>
          </el-col>
        </el-row>
    </div>
</template>

<script>
  import {addClass,removeClass} from "../../common/js/dom";

  export default {
        name: "blog-header",
      methods:{
          enter(e){
            addClass(e.currentTarget,"active")
          },
        leave(e){
          removeClass(e.currentTarget,"active");
        }
      }
    }
</script>

<style scoped>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 40px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .menu{
    margin-left: 15%;
    margin-top: 35px;
  }
  .title-content{
    font-size: 18px;
    font-weight: bold;
    line-height: 40px;
  }
  .before-i,.after-i{
    display: block;
    overflow: hidden;
    margin: 0 auto;
    width: 100px;
    position: relative;
    display: block;
    height: 2px;
    background: #222;
  }
  .icon-img{
    width: 15px;
    height: 15px;
    vertical-align:middle;
  }
  .menu-content{
    margin-left: 5px;
    font-size: 15px;
  }
  .active{
    background-color: #CCC;
  }
</style>
