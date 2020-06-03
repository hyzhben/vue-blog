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
          <el-aside style="overflow-x: hidden;overflow-y: hidden;" width="70%" class="blog-content">
            <ArticleList :articles="articles"></ArticleList>
          </el-aside>
          <el-main >待补充</el-main>
        </el-container>
      </el-main>
      <el-aside width="25%"></el-aside>
    </el-container>
</template>

<script>
  import ArticleList from '../../base/article-list/article-list'
  import {getArtilceList} from "../../api/api";
  import {ERR_OK,ERR_FAIL} from "../../api/config";
  import qs from 'qs';

  export default {
        name: "blog-home",
        data(){
          return{
            picList:['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1924821779,65256901&fm=26&gp=0.jpg',
              'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2421628370,3220857192&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2977328465,4015250825&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2753861423,1268559091&fm=26&gp=0.jpg'],
            currentPage1: 5,
            articles:[{content:'content',title:'title'}],
            currentPage:1,
            pageSize:5,
          }
        },
      mounted(){
        const data={ pageSize:this.pageSize,
          currentPage:this.currentPage}
        getArtilceList(qs.stringify(data)).then(res=>{
          if (res.data.code == ERR_OK){
           this.articles = res.data.data.list
          }else if(res.data.code == ERR_FAIL){
            this.$message.error(res.data.data);
          }else{
            this.$message.error(res.data.msg);
          }

        })
          .catch(err => console.log(err))

      },
      components:{
        ArticleList,
      },
      methods:{
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      },
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
  }
</style>
