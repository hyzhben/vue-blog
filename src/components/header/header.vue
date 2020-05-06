<template>
    <div>
      <el-row class="menu">
        <el-col :span="5"><div class="grid-content bg-purple title-content"><span class="logo-line-before"><i class="" style="transform: translateX(100%);"></i></span>Blog-skill</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple">首页</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple">分类</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple">归档</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple">日程表</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple">站点地图</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple">关于</div></el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "header"
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
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .menu{
    margin-left: 20%;
    margin-top: 20px;
  }
  .logo-line-before{
    display: block;
    overflow: hidden;
    margin: 0 auto;
    width: 75%;
  }
  .logo-line-before i, .logo-line-after i {
    position: relative;
    display: block;
    height: 2px;
    background: #222;
  }
</style>
