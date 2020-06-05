<template>
  <div style="width: 100%;height: 100%;">
    <el-container class="el-articles"  v-for="(article,index) in articles" :key="index">
      <el-aside width="20%">
        <div>
          <div style="height: 20px;">
            <el-avatar :src="article.picUrl"></el-avatar>
          </div>
          <div style="height: 20px;"><span class="span-date">{{new Date(article.createTime).getDate()< 10 ? '0' + new Date(article.createTime).getDate() : new Date(article.createTime).getDate()}}</span></div>
          <div style="height: 20px;"><span class="span-mon">{{getEngMonth(new Date(article.createTime).getMonth())}}</span></div>
          <div style="height: 20px;"><span class="span-year">{{new Date(article.createTime).getFullYear()}}</span></div>
        </div>
      </el-aside>
      <el-main>
        <div @click="selectArticle(article)">
          <div class="div-title"><p class="p-title">{{article.title}}</p></div>
          <div class="div-title"><p class="p-content">{{article.content.length>164?article.content.substring(0,164)+"...":article.content}}</p></div>
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
      },
    computed:{
        getEngMonth(){
          return function (month) {
            var en_mon_arr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"];  //英文月份
            return en_mon_arr[month]
          }
        }
    },
    methods:{
      selectArticle(article){
        this.$emit('select',article);
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
    /*background-color:#DCDCDC;*/
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
