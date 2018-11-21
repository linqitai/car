<style lang="scss" scoped>
$marignLen:14px;
.imgManageWrapper{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: #8A8A8C;
  .imgManage{
    width: 1010px;
    height: 700px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    .title{
      padding-left: 16px;
      font-size: 17px;
      height: 50px;
      line-height: 54px;
      border-bottom:1px solid #c7c7c7;
    }
    .body{
      height: 649px;
      .bodyLeft{
        float: left;
        height: 100%;
        width: 240px;
        box-sizing: border-box;
        border-right: 1px solid #c7c7c7;
        font-size: 12px !important;
        ul.operate{
          box-sizing: border-box;
          display: flex;
          background-color:#F2F2F2;
          li{
            // flex: 1;
            width: 33.3%;
            text-align: center;
            float: left;
            .el-button--text{
              color: #323232;
            }
          }
        }
        ul.tree{
          cursor: pointer;
          .treeTitle{
            margin-top: $marignLen;
            margin-bottom: $marignLen;
            font-size: 14px;
            width: 100%;
            margin-left:16px;
            border-left: 3px solid transparent;
            padding-left:6px;
          }
          li{
            margin-left: 28px;
            margin-top: $marignLen;
            margin-bottom: $marignLen;
            border-left: 3px solid transparent;
            padding-left:6px;
          }
          .currentTitle{
            border-left: 3px solid #646464;
          }
          .currentTree{
            border-left: 3px solid #646464;
          }
        }
        .el-tree{
          margin:6px 6px;
        }
      }
      .bodyRight{
        float: right;
        width: 770px;
        height: 100%;
        box-sizing: border-box;
        .rightHeader{
          height: 40px;
          line-height: 40px;
          padding-left:12px;
          border-bottom: 1px solid #c7c7c7;
          box-sizing: border-box;
          h2{
            float: left;
          }
          .btnGroup{
            padding-right:10px;
          }
        }
        .formGroup{
          padding: 14px 12px;
        }
        .control-label{
          float: left;
        }
        .help-block{
          float: left;
          color: #A8A8A8;
          vertical-align: bottom;
          font-size: 14px;
        }
        .addBox{
          position: relative;width: 118px;height: 118px;font-size: 14px;display: inline-block;padding: 1px;border: 2px dashed #ccc;text-align: center;vertical-align: middle;clear: both;float: left;box-sizing: border-box;
          .upload{position: absolute;top: 0;bottom: 0px;left: 0;right: 0;opacity: 0;}
          .add{display: block;color:#c7c7c7;height: 94px;padding: 8px 0;
            .iconfont{padding: 10px 0;font-size: 80px;}
          }
        }
        .imgBox{
          width: 138px;
          height: 138px;
          border: 2px dashed #ccc;
          float: left;
          overflow: hidden;
          img{margin-left: 50%;margin-top: 50%;transform: translate(-50%,-50%);}
        }
        .upload-imgs{font-size: 0; overflow: hidden;clear: both;padding-top: 12px;height: 490px;
          li{position: relative;width: 118px;height: 118px;font-size: 14px;display: inline-block;padding: 1px;margin-right: 5px;text-align: center;vertical-align: middle;
            margin-bottom: 3px;margin-right: 3px;
            &:hover{border-color: #c7c7c7;
            }
          }
          .close{position:absolute;top: 1px;right: 1px;background-color:#C81111;width: 14px; height: 14px; border-radius:6px;text-align: center;color: white;cursor: pointer;
            &:hover{background-color:#9E0B0B;}
          }
          .img{width: 100%;height: 100%; overflow: hidden; position:relative;
            img{margin-left: 50%;margin-top: 50%;transform: translate(-50%,-50%);}
          }
        }
      }
    }
  }
}
.border{
  border: 1px solid #c81111 !important;
}
.borderNo{
  border: 1px dashed #ccc !important;
}
</style>
<template>
<div class="imgManageWrapper">
    <div class="imgManage">
      <div class="title">图片管理</div>
      <div class="body">
        <div class="bodyLeft">
          <ul class="operate">
            <li><el-button type="text" icon="el-icon-plus" @click="addGroup()">添加</el-button></li>
            <li><el-button type="text" icon="el-icon-edit" @click="rename()">重命名</el-button></li>
            <li><el-button type="text" icon="el-icon-delete" @click="remove()">删除</el-button></li>
          </ul>
          <ul class="tree">
            <div class="treeTitle" @click="groupClick(0,'所有图片')" :class="{currentTitle:0==currentNodeId}">所有图片</div>
            <li v-for="(item,index) in treeData" :key="index" @click="groupClick(item.id,item.name)" :class="{currentTree:item.id==currentNodeId}">{{item.name}}</li>
          </ul>
      </div>
      <div class="bodyRight">
        <div class="rightHeader">
          <h2 v-if="currentLabel">{{currentLabel}}</h2>
          <h2 v-else>所有图片</h2>
          <div class="btnGroup right">
            <el-button type="primary" size="small" @click="useBtn">使用选中</el-button>
            <el-button type="primary" size="small" @click="dialogFormVisible = true">移动选中</el-button>
            <el-button type="danger" size="small" @click="deletePic">删除选中</el-button>
          </div>
        </div>
        <div class="formGroup">
          <div class="control-label">上传图片</div>
          <div class="help-block">(建议图片格式为：JPEG/PNG，大小不超过5M)</div>
          <div>
            <ul class="upload-imgs">
              <li class="addBox">
                <input type="file" class="upload" name="pic" @change="inputChange($event)" accept="image/*"/>
                <a class="add"><i class="iconfont icon-plus"></i><p>点击上传</p></a>
              </li>
              <li v-for="(item,index) in imgs" :key="index">
                <p class="img">
                  <img data-select='0' @click="selectImg($event,item.id,index)" :src="item.url" height="118">
                </p>
              </li>
            </ul>
            <div class="tableBottom" v-show="showPageTag">
              <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" :page-sizes="[10,12,14,16]" layout="total, sizes, prev, pager, next, jumper" :total="total">
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <el-dialog title="移动图片" :visible.sync="dialogFormVisible" width="400px">
    <el-form>
      <el-form-item label="移动到：">
        <el-select v-model="moveTo" placeholder="请选择文件夹">
          <el-option  v-for="(item,index) in treeData" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="sureMove">确 定</el-button>
    </div>
  </el-dialog>
  <el-dialog
    :visible.sync="progressDialog"
    width="30%">
    <div style="padding-bottom: 10px;">图片上传中</div>
    <el-progress style="margin-top: 10px;" :text-inside="true" :stroke-width="18" :percentage="percentage" status="success"></el-progress>
  </el-dialog>
</div>
</template>
<script>
  import axios from 'axios';
  import { getImageUrl,uploadUrl,getGroupsUrl,addGroupsUrl,deleteGroupsUrl,movePicToGroupUrl,ERR_OK } from '@/api/index'
  let id = 10;
  export default {
    data() {
      return {
        percentage: 0,
        progressDialog: false,
        pageIndex: 1,
        pageSize: 10,
        total: 100,
        showPageTag: true,
        checkonclicknode:true,
        moveTo: '',
        formLabelWidth: '200px',
        dialogFormVisible:false,
        startArr:[],
        endArr:[],
        formData:new FormData(),
        imgs: [],
        selectPicId: '',
        store_id: localStorage.getItem('_storeId'),
        group_id: 0,
        imgLen:0,
        currentLabel:"",
        currentNodeId:'',
        treeData: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    created() {
      let that = this;
      that.getPicInfo();
      setTimeout(function() {
        that.getGroups();
      }, 20)
      console.log(this.$route.query.from,'from')
    },
    methods: {
      useBtn() {
        var from = this.$route.query.from;
        console.log(from,"-------------from----------------")
        if(from == 'inputChange'){
          this.$cookie.set('active',1)
          var images = [];
          this.imgs.map(function(item) {
            if(item.checked){
              images.push({
                id:item.id,
                url:item.url
              });
            }
          })
          localStorage.setItem('_url', images[0].url)
          this.$router.go(-1);
        }else if(from == 'inputChange4detail') {
          this.$cookie.set('active',2);
          console.log("setActive====2");
          var images = [];
          this.imgs.map(function(item) {
            if(item.checked){
              images.push({
                id:item.id,
                url:item.url
              });
            }
          })
          console.log(JSON.stringify(images),"JSON.stringify(images)")
          localStorage.setItem('_images', JSON.stringify(images))
          this.$router.go(-1);
        }
      },
      groupClick(id,name) {
        console.log(id,'---id---');
        this.currentNodeId = id;
        console.log(name,'---name---');
        this.currentLabel = name;
        this.group_id = id;
        this.getPicInfo();
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
      },
      handleCurrentChange(val) {
        console.log(val);
        this.pageIndex = val;
        // this.getval()
      },
      getGroups() {
        let that = this;
        var params = {
          store_id: this.store_id,
        }
        var url = getGroupsUrl;
        
        axios.post(url,params).then((res)=>{
          var result = res.data;
          console.log(result.status_code,'--res.status_code--')
          if(result.status_code == ERR_OK){
            this.treeData = result.data;
          }
        }).catch((err)=>{
          console.info(err);
        });
      },
      inputChange(e) {
        let that = this;
        var file = e.target.files[0]
        let params = new FormData()
        params.append('file', file)
        params.append('store_id', that.store_id)
        params.append('group_id', that.group_id)
        var url = uploadUrl;
        $.ajax({ 
          url : url, 
          type : 'POST', 
          data : params, 
          cache:false,
          // 告诉jQuery不要去处理发送的数据
          processData : false, 
          // 告诉jQuery不要去设置Content-Type请求头
          contentType : false,
          beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("authorization", localStorage.getItem('authorization'));
            that.progressDialog = true;
          },
          complete: function( xhr,data ){
            that.percentage = 10;
            setTimeout(function() {
              that.percentage = 30;
            }, 100)
            setTimeout(function() {
              that.percentage = 50;
            }, 150)
            setTimeout(function() {
              that.percentage = 70;
            }, 200)
            setTimeout(function() {
              that.progressDialog = false;
              that.percentage = 100;
            }, 220)
          },
          success : function(res) { 
            if(res.status_code===ERR_OK){
              console.log("成功");
              that.imgs.unshift(res.data[0])
            }else{
              console.log("失败");
            }
          },
          error : function(responseStr) { 
            that.progressDialog = false;
            console.log(responseStr);
            console.log(responseStr.statusText)
            if(responseStr.status == 500) {
              that.$notify.error({
                title: '错误',
                message: '登录超时，请重新登录'
              });
              that.$router.push({
                path: '/login'
              })
            } else if(responseStr.statusText == 'error'){
              that.$notify.error({
                title: '错误',
                message: '不支持上传此格式的照片'
              });
            }
          } 
        });
      },
      getPicInfo() {
        let that = this;
        var params = {
          store_id: this.store_id,
          group_id: this.group_id,
          offset: 1 
        }
        var url = getImageUrl;
        this.$axios.post(url,params).then((res)=>{
          var result = res.data;
          // console.log(result.status_code,'--res.status_code--')
          if(result.status_code == ERR_OK){
            that.imgs = result.data.images;
            // console.log(that.imgs,'--img--')
          }
        }).catch((res) => {
          this.$message({
            type: 'info',
            message: '系统出错了'
          });          
        });
      },
      deletePic() {
        this.$confirm('此操作将永久删除该图片, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      sureMove() {
        // 所要移动的图片是：
        this.imgs.map(function(item) {
          console.log(`id:${item.id},checked:${item.checked}`)
        })
        console.log(`图片将移动到${this.moveTo}文件夹`)
        this.dialogFormVisible = false;
        var params = {
          store_id: this.store_id,
          group_id: this.moveTo,
          image_id: this.selectPicId
        }
        console.log(params)
        var url = movePicToGroupUrl;
        this.$axios.post(url,params).then((res)=>{
          var result = res.data;
          console.log(result.status_code,'--res.status_code--')
          if(result.status_code == ERR_OK){
            this.$message({
              type: 'success',
              message: '操作成功'
            });
          }else if(result.status_code == 423){
            this.$message({
              type: 'fail',
              message: '不存在分组'
            });
          }
        }).catch((res) => {
          this.$message({
            type: 'info',
            message: '系统出错了'
          });          
        });
      },
      selectImg(e,id,i) {
        let that = this;
        that.selectPicId = id;
        if(!that.imgs[i].checked){
          that.imgs[i].checked = 1;
          $(e.target).parent().parent().addClass('border')
        }else{
         that.imgs[i].checked = 0;
         $(e.target).parent().parent().removeClass('border')
       }
      },
      datadragEnd (evt) {
        evt.preventDefault();
        console.log('拖动前的索引 :' + evt.oldIndex)
        console.log('拖动后的索引 :' + evt.newIndex)
      },
      rename() {
        if(!this.currentLabel|| this.currentLabel=="所有图片"){
          this.$alert('请选择所要重命名的节点', '提示', {
            confirmButtonText: '确定'
          });
          return;
        }
        this.$prompt('请给['+ this.currentLabel +']文件夹重命名：', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[\u4e00-\u9fa5\w]{1,6}$/,
          inputErrorMessage: '请输入1~6位的文本长度'
        }).then(({ value }) => {
          // const index = data[0].children.findIndex(d => d.id === node.data.id);
          // this.treeData[0].children[index].label = value
          this.$message({
            type: 'success',
            message: '修改成功'
          });
        }).catch((e) => {
          this.$message({
            type: 'info',
            message: '已取消'
          });       
        });
      },
      addGroup() {
        let that = this;
        this.$prompt('请给文件夹命名：', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[\u4e00-\u9fa5\w]{1,6}$/,
          inputErrorMessage: '请输入1~6位的文本长度'
        }).then(({ value }) => {
          var params = {
            store_id: this.store_id,
            name: value
          }
          var url = addGroupsUrl;
          that.$axios.post(url,params).then((res)=>{
            var result = res.data;
            console.log(result.status_code,'--res.status_code--')
            if(result.status_code == ERR_OK){
              that.getGroups();
              this.$message({
                type: 'success',
                message: '新建的文件夹名是: ' + value
              });
            }
          }).catch((res) => {
            this.$message({
              type: 'info',
              message: '系统出错了'
            });          
          });
        }).catch((e) => {
          this.$message({
            type: 'info',
            message: '已取消'
          });       
        });
      },
      remove(currentNodeId) {
        let that = this;
        if(!this.currentNodeId){
          this.$alert('请选择所要删除的文件夹', '提示', {
            confirmButtonText: '确定'
          });
          return;
        }
        /*if(!node.parent.key){
          this.$alert('无法删除主文件夹', '提示', {
            confirmButtonText: '确定'
          });
          return;
        }*/
        this.$confirm('您确定要删除[' + that.currentLabel + ']文件夹？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => { 
          this.currentLabel = '';
          var params = {
            store_id: this.store_id,
            group_id: this.group_id
          }
          var url = deleteGroupsUrl;
          that.$axios.post(url,params).then((res)=>{
            var result = res.data;
            console.log(result.status_code,'--res.status_code--')
            if(result.status_code == ERR_OK){
              that.group_id = 0;
              that.getPicInfo();
              that.getGroups();
            }
          }).catch((res) => {
            this.$message({
              type: 'info',
              message: '系统出错了'
            });          
          });
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      delImg(key){
        this.$delete(this.imgs,key);
        this.imgLen--;
      },
      submit(){
        console.log(this.imgs)
        for(let key in this.imgs){
          let name=key.split('?')[0];
          this.formData.append('multipartFiles',this.imgs[key],name);
        }
        console.log('formData')
        console.log(this.formData)
      }
    }
}
</script>