<template>
    <el-container>
      <el-aside width="25%"></el-aside>
      <el-main >
        <el-carousel :interval="4000" type="card" height="250px">
          <el-carousel-item v-for="item in picList" :key="item">
            <img :src="item" style="width: 100%;height: 100%"></img>
          </el-carousel-item>
        </el-carousel>
        <el-container>
          <el-aside width="70%" class="blog-content">
            <BlogArticle></BlogArticle>
          </el-aside>
          <el-main >待补充</el-main>
        </el-container>
      </el-main>
      <el-aside width="25%"></el-aside>
    </el-container>
</template>

<script>
  import BlogArticle from '../blog-article/blog-article'
    export default {
        name: "blog-home",
        data(){
          return{
            picList:['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1924821779,65256901&fm=26&gp=0.jpg',
              'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2421628370,3220857192&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2977328465,4015250825&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2753861423,1268559091&fm=26&gp=0.jpg'],
          }
        },
      components:{
        BlogArticle,
      }
    }
</script>

<style scoped>
  .mavonEditor {
    width: 100%;
    height: 100%;
  }
  .editorClass{
    width: 100%;
    height: 90%;
  }
  .el-aside {
    background-color: #222222;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    /*background-color: #f1f5f5;*/
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .blog-content{
    background-color: #f4f4f4;
    box-shadow:0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
</style>
