<template>
    <el-container>
      <el-aside width="20%"></el-aside>
      <el-main >
        <el-carousel :interval="4000" type="card" height="250px">
          <el-carousel-item v-for="item in picList" :key="item">
            <img :src="item" style="width: 100%;height: 100%"></img>
          </el-carousel-item>
        </el-carousel>
        <el-container>
          <el-container>
            <el-aside style="overflow-x: hidden;overflow-y: hidden;" width="65%" class="blog-content" v-show="articles.length">
              <div>
                <ArticleList :articles="articles"></ArticleList>
              </div>
              <div>
                <el-pagination class="pagination"
                               @current-change="handleCurrentChange"
                               :current-page.sync="currentPage"
                               :page-size="pageSize"
                               layout="total, prev, pager, next"
                               :total="totalArticle" v-show="articles.length>0">
                </el-pagination>
              </div>
            </el-aside>
            <div>
              <el-main style="height: 100%;" ref="elMain">
              <el-container style="line-height: 0px;">
                  <el-header>
                    <el-input placeholder="请输入标题" v-model="title" class="input-with-select">
                      <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                  </el-header>
                <el-main>
                  <el-card class="box-card">
                    <div slot="header" class="clearfix tip-title">
                      <span>最近发布文章</span>
                    </div>
                    <div v-for="(article,index) in newestArticleList" :key="index" class="text item">
                      <el-link type="primary el-title">{{article.title}}</el-link>
                      <div class="div-date">{{getFormatDate(article.createTime)}}</div>
                    </div>
                  </el-card>
                </el-main>
                <el-footer>
                    <el-card class="box-card">
                      <div slot="header" class="clearfix tip-title">
                        <span>分类标签</span>
                      </div>
                      <div class="lab-type">
                        <el-tag type="info">c++</el-tag>
                        <el-tag type="info">java</el-tag>
                        <el-tag type="info">mybatis</el-tag>
                        <el-tag type="info">oracle</el-tag>
                        <el-tag type="info">标签二</el-tag>
                        <el-tag type="info">标签三</el-tag>
                        <el-tag type="info">标签四</el-tag>
                        <el-tag type="info">标签五</el-tag>
                      </div>
                    </el-card>
                </el-footer>
              </el-container>
            </el-main>
            </div>
          </el-container>
        </el-container>
      </el-main>
      <el-aside width="20%"></el-aside>
    </el-container>
</template>

<script>
  import ArticleList from '../../base/article-list/article-list'
  import {getArtilceList,getNewestArticle} from "../../api/api";
  import {ERR_OK,ERR_FAIL} from "../../api/config";
  import qs from 'qs';
  import NoResult from '../../base/no-result/no-result'
  import {formatConversion} from "../../utils/dateUtil";

  export default {
        name: "blog-home",
        data(){
          return{
            picList:['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1924821779,65256901&fm=26&gp=0.jpg',
              'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2421628370,3220857192&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2977328465,4015250825&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2753861423,1268559091&fm=26&gp=0.jpg'],
            articles:[],
            currentPage:1,
            pageSize:5,
            totalArticle:0,
            title:'',
            newestArticleList:[],
          }
        },
      mounted(){
        this.getArtilces(this.pageSize,this.currentPage);
        this.getNewestArticle();
      },
      components:{
        ArticleList,
        NoResult,
      },
      methods:{
        handleCurrentChange(currentPage) {
          this.getArtilces(this.pageSize,currentPage);
        },
        getArtilces(pageSize,currentPage){
          const data={ pageSize:pageSize,
            currentPage:currentPage}
          getArtilceList(qs.stringify(data)).then(res=>{
            if (res.data.code == ERR_OK){
              this.articles = res.data.data.list;
              this.totalArticle = res.data.data.total;
            }else if(res.data.code == ERR_FAIL){
              this.$message.error(res.data.data);
            }else{
              this.$message.error(res.data.msg);
            }

          })
            .catch(err => console.log(err))
        },
        getNewestArticle(){
          getNewestArticle().then(res=>{
            if (res.data.code == ERR_OK){
              this.newestArticleList=res.data.data
            }else if(res.data.code == ERR_FAIL){
              this.$message.error(res.data.data);
            }else {
              this.$message.error(res.data.msg);
            }
            }).catch(err => console.log(err))
        }
      },
    computed:{
          getFormatDate(){
            return function (date) {
              return formatConversion(date);
            }
          },
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
  .pagination{
    margin-top: 50px;
    text-align: left;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .tip-title{
    height: 30px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    line-height: 40px;
    background-color: #f4f4f5;
  }

  .text{
    line-height: 50px;
    border-bottom: 1px solid #eee;
    text-align: left;
  }
  .el-title{
    font-size: 19px;
    font-weight: 900;
    color: #20232e;
    transition: all 0.3s;
  }

  .div-date{
    display: block;
    font-size: 14px;
    color: #aaa;
    margin-top: 8px;
  }

  .lab-type{
    text-align: left;
  }
</style>
