<style lang="scss" scoped>
.wrapper{
  .contentBox{
    position: relative;
    margin-top: 10px;
    padding-top: 10px;
    width: 900px;
    .authorization{
      background-color: #FFF5E6;
      padding: 8px 10px;
      width: 600px;
      margin-left: 70px;
      overflow: hidden;
      .directBtn{
        float: right;
        width: 100px;
        text-align: center;
        color: white;
        background-color: #2ECC71;
        padding: 8px 0;
      }
      .tipText{
        color: #c7c7c7;
        float: left;
        padding-top: 8px;
        .iconstyle{
          color: #FFA847;
          margin-left: 30px;
        }
        .text{
          margin-left: 50px;
        }
      }
    }
    .itemBox{
      margin-top: 20px;
      overflow: hidden;
    }
    .bottomButton{
      width: 760px;
      margin-top: 40px;
      text-align: center;
    }
    .item{
      width: 300px;
      float: left;
      .tip{
        color: #c7c7c7;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
      }
      b{
        color: red;
        font-size: 18px;
        height: 18px;
        line-height: 18px;
        vertical-align: middle;
      }
      p{
        display: inline;
        margin-left: 2px;
        color: #646464;
      }
      .input{
        margin-top: 10px;
      }
      .text{
        display: inline;
        margin-left: 20px;
      }
    }
  }
}
.checkDialog{
  position:absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: 0px 20px;
  .header{
    height: 50px;
    line-height: 50px;
    font-size: 1.2em;
    color: #646464;
  }
  .sureBtn{
    display: block;
    margin-top: 10px;
  }
  i{
    position: absolute;
    right: 0px;
    top: 0px;
    font-size: 18px;
  }
 }
.QRcode{
  position:absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 300px;
  .cardBox{
    position: relative;
    width: 100%;
    height: 300px;
    line-height: 300px;
    text-align: center;
    img{
      border: 5px solid white;
      margin-top:50%;
      transform: translateY(-50%);
    }
    i{
      position: absolute;
      right: 0px;
      top: 0px;
      font-size: 18px;
    }
  }
}
</style>
<template>
  <div class="wrapper">
    <div class="breadcrumbWrapper">
      <div class="breadcrumb">
        <i class="iconfont icon-home iconhomestyle nocurrent"></i>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }"><span class="nocurrent">首页</span></el-breadcrumb-item>
          <el-breadcrumb-item><span class="nocurrent">小程序设置</span></el-breadcrumb-item>
          <el-breadcrumb-item><span>授权</span></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="contentBox">
      <div class="authorization" v-show="!dataInfo.name">
        <div class="tipText"><i class="el-icon-warning iconstyle"></i><i class="text">警告提示文案</i></div>
        <a class="directBtn" :href="directUrl" target="_blank">授权</a>
      </div>
      <div class="itemBox">
        <div class="item margL40">
          <label><b>*</b><p>小程序:</p></label>
          <el-input class="input" v-model="dataInfo.name" placeholder="请输入标题" :disabled="true"></el-input>
          <!-- <div>{{dataInfo.name}}</div> -->
        </div>
        <div class="item margL200">
          <label><b>*</b><p>MchKey:</p></label>
          <el-input class="input" v-model="dataInfo.mch_key" placeholder="请输入标签"></el-input>
        </div>
      </div>
      <div class="itemBox">
        <div class="item margL40">
          <label><b>*</b><p>AppID:</p></label>
          <el-input class="input" v-model="dataInfo.appid" placeholder="请输入AppID" :disabled="true"></el-input>
        </div>
        <div class="item margL200">
          <div class="demo-input-suffix">
            <div class="margT8 left"><b>*</b><p>cert_key:</p></div>
            <el-upload
              class="upload-demo margL20 left"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              >
              <el-button size="small" icon="el-icon-upload">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">获取商户号中的证书</div>
            </el-upload>
          </div>
        </div>
      </div>
      <div class="itemBox">
        <div class="item margL40">
          <label><p>AppSecret:</p></label>
          <el-input class="input" v-model="dataInfo.app_secret" placeholder="请输入AppSecret"></el-input>
        </div>
        <div class="item margL200">
          <div class="demo-input-suffix">
            <div class="margT8 left"><b>*</b><p>cert_pem:</p></div>
            <el-upload
              class="upload-demo margL20 left"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              >
              <el-button size="small" icon="el-icon-upload">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">获取商户号中的证书</div>
            </el-upload>
          </div>
        </div>
      </div>
      <div class="itemBox">
        <div class="item margL40">
          <label><p>体验号:</p></label>
          <el-input
            class="input"
            type="textarea"
            v-model="dataInfo.experience"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入话题">
          </el-input>
          <label class="tip">多个微信号请用英文“,”隔开，例如 xxx,yyyy</label>
        </div>
        <div class="item margL200">
          <div class="demo-input-suffix">
            <div class="margT8 left"><b>*</b><p>小程序状态:</p><div class="text">{{dataInfo.status}}</div></div>
          </div>
        </div>
      </div>
      <div class="bottomButton">
        <el-button type="primary" size="medium" class="width100" @click="infoSave" :loading="isLoadingSave">保存</el-button>
        <el-button type="warning" size="medium" @click="commitCode">上传小程序</el-button>
        <el-button type="danger" size="medium" @click="submitCheck">提交审核</el-button>
        <el-button type="info" size="medium" @click="getQRcode" :loading="isLoading">获取体验二维码</el-button>
      </div>
      <el-card :body-style="{ padding: '0px' }" class="QRcode" v-show="dialogQRcodeVisible">
        <div class="cardBox">
          <img :src="qrcode" width="294">
          <i class="el-icon-circle-close" @click="closeCard"></i>
        </div>
      </el-card>
      <el-card class="checkDialog" v-show="dialogVisible4check">
        <i class="el-icon-circle-close" @click="dialogVisible4check=false"></i>
        <div class="header">请选择类型</div>
        <el-radio-group v-model="checkedValue"> <!-- v-if="dataInfo.categories.length>1" -->
          <el-radio v-for="(item,index) in dataInfo.categories" :label="item.id">{{item.first_class}}</el-radio>
        </el-radio-group>
        <el-button type="primary" class="sureBtn" @click="sureBtn">确定</el-button>
      </el-card>
    </div>
  </div>
</template>
<script>
// import { format, getTime, getDateHM } from '../../../common/js/times'
// import { getLimiteText } from '../../../common/js/utils'
// import { cheCredit } from '@/api/index' icon、name、sort、isHeaderPage、isShow、addTime、operate
import { authorizationUrl,infoUrl,infoSaveUrl,qrocdeUrl,auditUrl,commitCodeUrl,ERR_OK,host } from '@/api/index'
// import VueResource from 'vue-resource'
import axios from 'axios'

export default {
  data() {
    return {
      checkedValue:'',
      dialogVisible4check: false,
      isLoading: false,
      isLoadingSave: false,
      directUrl:"",
      store_id: localStorage.getItem('_storeId'),
      dataInfo: {
        store_id:localStorage.getItem('_storeId'),
        name:'',
        app_secret:"",//小程序密钥
        experience:"",//礼拜,杜甫,小明,.
        mch_key:"",//商户密钥
        mch_id:"",//商户号
        cert_pem:"",//证书pem文件
        cert_key:"",//证书key文件
      },
      dialogQRcodeVisible:false,
      qrcode:''
    }
  },
  created() {
    this.authorizate();
  },
  methods: {
    commitCode() {
      var params = {
        store_id : this.store_id
      }
      var url = commitCodeUrl;
      console.log(params,'--params--')
      axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--result.status_code--')
        if(result.status_code == ERR_OK){
          this.$message({
            type: 'success',
            message: '上传成功!'
          });
        }
      }).catch((res) => {
        this.$message({
          type: 'info',
          message: '系统出错了'
        });          
      });
    },
    sureBtn() {
      var params = {
        store_id : this.store_id,
        category_id: this.checkedValue // this.dataInfo.categories
      }
      var url = auditUrl;
      console.log(params,'--params--')
      axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--result.status_code--')
        if(result.status_code == ERR_OK){
          this.$message({
            type: 'success',
            message: '提交成功!'
          });
        }
      }).catch((res) => {
        this.$message({
          type: 'info',
          message: '系统出错了'
        });          
      });
    },
    submitCheck(){
      // this.dialogVisible4check = true;
      var that = this;
      if(Number(that.dataInfo.categories)>0) {
        if(that.dataInfo.categories.length>1){
          this.dialogVisible4check = true;
        }
      }else{
        this.$confirm('您确定要提交审核?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
        }).then(() => {
          var params = {
            store_id : this.store_id,
            category_id: this.checkedValue // this.dataInfo.categories
          }
          var url = auditUrl;
          axios.post(url,params).then((res)=>{
            var result = res.data;
            console.log(result.status_code,'--result.status_code--')
            if(result.status_code == ERR_OK){
              this.$message({
                type: 'success',
                message: '提交成功!'
              });
            }else{
              this.$message({
                type: 'info',
                message: result.status_code
              });
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消！'
          });          
        });
      }
    },
    closeCard() {
      this.dialogQRcodeVisible = false;
    },
    getQRcode() {
      let that = this;
      that.isLoading = true;
      var params = {
        store_id : this.store_id
      }
      var url = qrocdeUrl;
      axios.post(url,params).then((res)=>{
        this.dialogQRcodeVisible = true;
        var result = res.data;
        if(result.status_code == ERR_OK){
          var arr = result.data.url.split('//');
          var len = arr.length;
          that.qrcode = host+'/'+arr[len-1];
          console.info(that.qrcode,'--that.qrcode--');
        }else{
          this.$message({
            type: 'info',
            message: result.status_code
          }); 
        }
        that.isLoading = false;
      }).catch((res) => {
        this.$message({
          type: 'info',
          message: '系统出错了'
        });          
      });
    },
    //授权链接获取
    authorizate(){
      let that = this;
      var params = {
        store_id : this.store_id
      }
      var url = authorizationUrl;
      console.log(url)
      this.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--res.status_code--')
        if(result.status_code == ERR_OK){
          console.log("OK")
          that.directUrl = result.data.url;
          that.info();
          console.info(that.directUrl,'--that.directUrl--');
        }
      }).catch((res) => {
        this.$message({
          type: 'info',
          message: '系统出错了'
        });          
      });
    },
    // 小程序信息获取
    info(){
      let that = this;
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      var params = {
        store_id : this.store_id
      }
      var url = infoUrl;
      this.$axios.post(url,params).then((res)=>{
        var result = res.data;
        if(result.status_code == ERR_OK){
          console.log(result.data.store_id,'result.data.store_id')
          that.dataInfo = result.data;
          that.dataInfo.app_secret=result.data.appsecret;
          that.dataInfo.name=result.data.name;
          that.dataInfo.store_id = localStorage.getItem('_storeId');
          console.log(that.dataInfo,'--datainfo');
          if(that.dataInfo.categories.length == 1) {
            that.checkedValue = that.dataInfo.categories[0].id;
          }
        }
        loading.close();
      });
    },
    // 小程序信息获取
    infoSave(){
      console.log(localStorage.getItem('_storeId'),'--_storeId--')
      let that = this;
      var url = infoSaveUrl;
      that.isLoadingSave = true;
      this.$axios.post(url,that.dataInfo).then((res)=>{
        var result = res.data;
        console.log(ERR_OK,'--ERR_OK-')
        console.log(result.status_code,'--res.status_code--')
        if(result.status_code == ERR_OK){
          console.log(result,'--result--')
          this.$message({
            message: '恭喜你，保存成功',
            type: 'success'
          });
        }
        that.isLoadingSave = false;
      }).catch((res) => {
        this.$message({
          type: 'info',
          message: '系统出错了'
        });          
      });
    },
    handleChange(file, fileList) {
      this.fileList3 = fileList.slice(-3);
    },
    searchBtn() {
      this.searchLoading = true;
      console.log(this.brandName,'--brandName--')
    },
    clickSure() {
      console.log((this.date),"--date--")
    },
    handleMoreCommand(command) {
        console.log(this.multipleSelection,'--multipleSelection--');
        this.$message('click on item ' + command);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleAffirmClick(row) {
      console.log(row.age);
      this.$confirm('此操作将确认此条消息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '确认成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消确认'
        });          
      });
    },
    handleDeleteClick(row) {
      console.log(row);
      this.$confirm('此操作将删除此条消息, 是否继续?', '提示', {
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(val);
      this.pageIndex = val;
      // this.getval()
    }
  }
}
</script>


