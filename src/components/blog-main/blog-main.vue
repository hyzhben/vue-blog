<template>
      <el-container>
        <el-container >
          <el-header height="100px">
            <BlogHeader></BlogHeader>
          </el-header>
          <el-main style="padding: 0px;">
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
</template>

<script>
  import BlogHeader  from '../blog-header/blog-header'
  import BlogHome from '../blog-home/blog-home'
    export default {
        name: "blog-main",
        components:{
          BlogHeader,
          BlogHome
        }
    }
</script>

<style scoped>
  html,body,#app,.el-container{
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    color: #333;
    background-color: #f4f4f4;
    text-align: center;
  }

  .el-aside {
    background-color: #1e2021;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
