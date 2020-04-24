<template>
    <div>
      <el-container>
        <el-aside width="30%"></el-aside>
        <el-container >
          <el-header height="10%">
            <Header></Header>
          </el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>

    </div>
</template>

<script>
  import Header  from '../../components/header/header'
    export default {
        name: "main",
        components:{
          Header,
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
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #1e2021;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
    line-height: 160px;
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
