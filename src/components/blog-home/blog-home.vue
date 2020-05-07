<template>
  <div class="mavonEditor">
    <el-button plain>发表文章<i class="el-icon-upload el-icon--right"></i></el-button>
    <el-divider></el-divider>
    <mavon-editor class="editorClass" v-model="value" @save="save"/>
  </div>
</template>

<script>
    export default {
        name: "blog-home",
        data(){
          return{
            value:''
          }
        },
        methods :{
          save(pos, file){
            console.log(pos,file,this.value)
          }
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
</style>
