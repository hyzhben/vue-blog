<template>
  <div class="mavonEditor">
    <el-button plain>发表文章<i class="el-icon-upload el-icon--right"></i></el-button>
    <el-divider></el-divider>
    <mavon-editor ref="md" class="editorClass"  v-model="value" @save="save" @imgAdd="imgAdd" @imgDel="imgDel"/>

    <!-- Form -->
   <el-dialog title="是否发表文章" :visible.sync="dialogFormVisible" >
      <el-form :model="form">
        <el-form-item label="文章状态" :label-width="formLabelWidth" style="text-align: left;">
          <el-select v-model="form.status" placeholder="请选择文章状态" @change="statusSel">
            <el-option label="待发布" value="1000"></el-option>
            <el-option label="发布" value="2000"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章标题" :label-width="formLabelWidth" v-show="isPublish">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章类别" :label-width="formLabelWidth" style="text-align: left;" v-show="isPublish">
          <el-select v-model="form.type" placeholder="请选择文章类别">
            <el-option label="java" value="1"></el-option>
            <el-option label="c++" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary" @click="submitArticle">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {publish,toBepublish,ERR_OK,BASE_IMG_URL} from "../../api/config";
  import {uploadFile,addArticle} from "../../api/api";
  import { Loading } from 'element-ui';
  import qs from 'qs';
  export default {
      name: "",
      data(){
        return{
          value:'',
          imgFile:{},
          dialogFormVisible:false,
          formLabelWidth: '120px',
          form: {
            title: '',
            status: '',
            type:'',
          },
          isPublish:false,
        }
      },
      methods:{
        save(value,render){
          if(value == null || value == ''){
            this.$message.error('保存内容不能为空');
            return;
          }
          this.dialogFormVisible=true
        },
        statusSel(value){
          if(value == publish){
            this.isPublish = true
          }
          if(value == toBepublish){
            this.isPublish = false
          }
        },
        submitArticle(){
          var that = this
          if(this.form.status == null || this.form.status == ''){
            this.$message.error('文章状态不能为空');
            return;
          }
          if(this.form.status == publish){
            if(this.form.title == null || this.form.title == ''){
              this.$message.error('文章标题不能为空');
              return;
            }
            if(this.form.type == null || this.form.type == ''){
              this.$message.error('文章类型不能为空');
              return;
            }
          }
          this.dialogFormVisible = false;

          var formdata = new FormData();
          for(var _img in this.imgFile){
            formdata.append("files", this.imgFile[_img]);
          }
          var headers ={'Content-Type':"multipart/form-data"}
          //提交
          let loadingInstance = Loading.service({
            text:'正在上传...'
          });
          uploadFile(formdata,headers)
            .then(res=>{
              const result =res.data
              if(result.code == ERR_OK){
                result.data.forEach((item,index)=>{
                  that.$refs.md.$img2Url(index+1,BASE_IMG_URL+item.fileUrl)
                })
              }else{
                this.$message.error('上传图片失败');
                loadingInstance.close();
              }
              return Promise.resolve(res.data);
            }).then(res=>{
            if(res.code == ERR_OK){
              let data={
                content:that.value,
                status:that.form.status,
                files:res.data
              }
              if(that.form.status == publish){
                data.title = that.form.title
                data.type = that.form.type
              }
              console.log(data)
              //添加文章
              addArticle(qs.stringify(data)).then(res=>{
                const result =res.data
                if(result.code == ERR_OK){
                  this.$message({
                    message: '上传成功',
                    type: 'success'
                  });
                  loadingInstance.close();
                }else{
                  this.$message.error('上传文章内容失败');
                  loadingInstance.close();
                }
              }) .catch(err => {
                console.log(err)
                this.$message.error('上传文章内容失败');
                loadingInstance.close();
              })
              }
          })
            .catch(err => {
              console.log(err)
              loadingInstance.close();
            })
        },
       /* cancelBtn(){
          this.cleanData()
        },
        cleanData(){
          this.dialogFormVisible = false
          this.isPublish = false
          this.form.title = ''
          this.form.status = ''
          this.form.type= ''
        },*/
        imgAdd(pos, $file){
          // 缓存图片信息
          this.imgFile[pos] = $file;
        },
        //删除图片
        imgDel(pos){
          this.$delete(this.imgFile,pos[0]);
        },

      }
    }
</script>

<style scoped>
  .mavonEditor {
    width: 100%;
    height: 100%;
  }
  .editorClass {
    width: 100%;
    height: 90%;
  }

</style>
