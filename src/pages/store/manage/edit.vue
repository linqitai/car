<style lang="scss" scoped>
$marignLen:14px;
.apply{
  padding:12px 20px;
  background-color: white;
  .inputContent{
    margin-top: 10px;
    padding-bottom: 10px;
    padding-left: 12px;
    border: 1px solid #F3F2F2;
    background-color: #F2F2F2;
    display: flex;
    .contentLeft{
      flex: 0 0 360px;
    }
    .contentRight{
      flex: 0 0 500px;
      padding-top: 10px;
      .title{
        height: 40px;
        line-height: 40px;
      }
      .amap{
        width: 500px;
        height: 500px;
      }
    }
  }
  .imgManageBox{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1002;
    width: 1016px;
    height: 700px;
    background-color: #fff;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius:10px;
    -moz-box-shadow:2px 2px 5px #333333; -webkit-box-shadow:2px 2px 5px #333333; box-shadow:2px 2px 5px #333333;
    .border{
      border-color:#c81111 !important;
    }

    .borderNo{
      border-color: transparent !important;
    }
    i.el-icon-circle-close{
      position: absolute;
      right: 0px;
      top: 0px;
      font-size: 24px;
    }
    .title{
      padding-left: 16px;
      font-size: 17px;
      height: 50px;
      line-height: 54px;
      border-bottom:1px solid #c7c7c7;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
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
        width: 776px;
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
            margin-bottom: 3px;margin-right: 3px;border: 1px solid transparent;
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
</style>
<template>
  <div class="apply" ref="apply">
    <div class="imgManageBox" v-show="isShowImgManage">
      <div class="dialogModel" v-show="dialogFormVisible">
        <div class="header">移动图片</div>
        <div class="element">
          <p class="inline">移动到：</p>
          <div class="inline">
            <el-select v-model="moveTo" placeholder="请选择文件夹">
              <el-option  v-for="(item,index) in treeData" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </div>
        </div>
        <div>
        </div>
        <div class="footer">
          <el-button class="right margL20" type="primary" @click="sureMove">确 定</el-button>
          <el-button class="right " @click="dialogFormVisible = false">取 消</el-button>
        </div>
      </div>
      <i class="el-icon-circle-close" @click="isShowImgManage=false"></i>
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
              <el-button type="success" size="small" @click="dialogFormVisible = true">移动选中</el-button>
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
                <li v-for="(item,index) in imgs" :key="index" class="picBorder" :data-index="index"><!-- :class="{'borderNo':item.checked==0}" -->
                  <p class="img">
                    <img data-select='0' @click="selectImg($event,item.id,index)" :src="item.url" height="118">
                  </p>
                </li>
              </ul>
              <div class="tableBottom" v-show="showPageTag">
                <!-- <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout="sizes, prev, pager, next, jumper" :total="total">
                </el-pagination> -->
                <el-button type="primary" icon="el-icon-arrow-left" circle :disabled="disabled1" @click="lastPage"></el-button>
                <el-button type="primary" icon="el-icon-arrow-right" circle :disabled="disabled2" @click="nextPage"></el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="breadcrumbWrapper">
      <div class="breadcrumb">
        <i class="iconfont icon-home iconhomestyle nocurrent"></i>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">
            <span class="nocurrent">首页</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item><span class="nocurrent">预约</span></el-breadcrumb-item>
          <el-breadcrumb-item><span class="nocurrent">门店管理</span></el-breadcrumb-item>
          <el-breadcrumb-item><span>门店编辑</span></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="inputContent">
      <div class="contentLeft">
        <div class="lineBox">
          <b class="icon">*</b>
          <b class="text">店名</b>
          <el-input class="inputTitle_middle" v-model="form.name" placeholder="请填写店名"></el-input>
        </div>
        <div class="lineBox">
          <b class="icon">*</b>
          <b class="text">logo</b>
          <el-button class="inputTitle2" size="medium" type="primary" icon="el-icon-menu" @click="showImgManage('logo')"></el-button>
          <el-button class="inputTitle2" size="medium" type="primary" icon="el-icon-close" @click="clearLogoUrl"></el-button>
        </div>
        <div class="lineBox" v-show="isShowLogo">
          <b class="icon"></b>
          <b class="text"></b>
          <img :src="form.logo" height="118" width="118">
        </div>
        <div class="lineBox">
          <b class="icon">*</b>
          <b class="text">封面</b>
          <el-button class="inputTitle2" size="medium" type="primary" icon="el-icon-menu" @click="showImgManage('封面')"></el-button>
          <el-button class="inputTitle2" size="medium" type="primary" icon="el-icon-close" @click="clearImgUrl"></el-button>
        </div>
        <div class="lineBox" v-show="isShowImgUrl">
          <b class="icon"></b>
          <b class="text"></b>
          <img :src="form.img_url" height="118" width="118">
        </div>
        <div class="lineBox">
          <b class="icon">*</b>
          <b class="text">虚拟销量</b>
          <el-input class="inputTitle_middle" v-model="form.sold_num" placeholder="请填写虚拟销量"></el-input>
        </div>
        <div class="lineBox">
          <b class="icon">*</b>
          <b class="text">虚拟在售量</b>
          <el-input class="inputTitle_middle" v-model="form.selling_num" placeholder="请填写虚拟在售量"></el-input>
        </div>
        <div class="lineBox" v-show="hide">
          <b class="icon">*</b>
          <b class="text">经度</b>
          <el-input class="inputTitle_middle" v-model="form.lng" placeholder="请填写经纬度"></el-input>
        </div>
        <div class="lineBox" v-show="hide">
          <b class="icon">*</b>
          <b class="text">维度</b>
          <el-input class="inputTitle_middle" v-model="form.lat" placeholder="请填写经纬度"></el-input>
        </div>
         <div class="lineBox">
          <b class="icon">*</b>
          <b class="text">经纬度</b>
          <el-input class="inputTitle_middle" v-model="form.jwd" placeholder="请填写经纬度"></el-input>
        </div>
        <div class="lineBox">
          <b class="icon">*</b>
          <b class="text">详细地址</b>
          <el-input class="inputTitle_middle" v-model="form.address" placeholder="请填写详细地址"></el-input>
        </div>
        <div class="lineBox">
          <b class="icon">*</b>
          <b class="text">联系电话</b>
          <el-input class="inputTitle_middle" v-model="form.mobile" placeholder="请填写联系地址"></el-input>
        </div>
        <el-button type="primary" class="margT20 width160" @click="save">保存</el-button>
      </div>
      <div class="contentRight">
            <div class="title">门店经纬度：</div>
            <!-- <el-amap class="amap" :zoom="zoom" :center="center" :events="events">
              <el-amap-marker vid="marker" 
                :position="center">
              </el-amap-marker>
            </el-amap> -->
            <div id="container" style="width: 100%;height: 500px"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { getResourceUrl,carAddEditUrl,carShowUrl,getImageUrl,uploadUrl,getGroupsUrl,addGroupsUrl,deleteGroupsUrl,movePicToGroupUrl,shopInfoUrl,saveShopEdiUrl,ERR_OK } from '@/api/index'
// import VueAMap from 'vue-amap';
// var imgArr = new Array();
// import Vue from 'vue'
// import AMap from 'vue-amap'
// AMap.initAMapApiLoader({
//   key: 'f74ac94ad8e172979ca2ebd2899548c8',
//   plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
//   v: '1.4.4'
// });

// Vue.use(AMap);

var ids = new Array();

export default {
  data() {
    return {
      hide: false,
      form:{
        name:'',
        img_url: '',
        logo:'',
        image_ids: '',
        jwd:'',
        lng:'',
        lat:''
      },
      center: [120.730103,27.9795],
      zoom: 12,
      events:{
        init(o) {
          console.log(o,"o")
          // let marker = new AMap.Marker({
          //   position: [120.730103,27.9795]
          // });
          // marker.setMap(o);
        },
        'click': (e) => {
          var that = this;
          console.log(e)
          var lng = e.lnglat.lng;
          var lat = e.lnglat.lat;
          var arr = e.lnglat.lng + "," + e.lnglat.lat;
          var lnglat = [];
          lnglat.push(lng)
          lnglat.push(lat)
          console.log(lng+","+lat);
          that.form.lng = lng;
          that.form.lat = lat;
          that.form.jwd = arr;
          that.center = lnglat;
          console.log(that.form.jwd,"that.form.jwd")
        }
      },
      id:'',
      percentage: 0,
      progressDialog: false,
      pageIndex: 1,
      pageSize: 23,
      total: 100,
      showPageTag: true,
      disabled1:true,
      disabled2:false,
      checkonclicknode:true,
      moveTo: '',
      formLabelWidth: '200px',
      dialogFormVisible:false,
      startArr:[],
      endArr:[],
      formData:new FormData(),
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
      },
      isShowImgManage: false,
      id: '',
      imgs:[],
      imgArr:[],
      progressDialog: false,
      percentage: 0,
      show1: true,
      show2: false,
      show3: false,
      time: '',
      isShowImgUrl:false,
      isShowLogo:false
    }
  },
  mounted() {
    this.loadmap()
  },
  created() {
    var that = this;
    this.id = this.$cookie.get("_shopId");
    console.log(this.id,"id")
    that.getPicInfo();
    setTimeout(function() {
      that.getGroups();
    }, 20)
    if(this.form.img_url){
      that.isShowImgUrl = true;
    }else{
      that.isShowImgUrl = false;
    }
    console.log(that.center,"that.center===")
    this.getShopInfo()
  },
  methods: {
    lastPage(){
      this.pageIndex = this.pageIndex - 1;
      if(this.pageIndex==1){
        this.disabled1 = true;
      }
      this.getPicInfo()
    },
    nextPage(){
      this.pageIndex = this.pageIndex + 1;
      if(this.pageIndex>1){
        this.disabled1 = false;
      }
      this.getPicInfo()
    },
    loadmap() {
      var that = this;
      const map = new AMap.Map('container', {
        zoom: 12
      });
      AMap.plugin('AMap.Geocoder', function () {
        var geocoder = new AMap.Geocoder({
          city: "010" //城市，默认：“全国”
        });
        var marker = new AMap.Marker({
          map: map,
          bubble: true
        });
      //为地图注册click事件获取鼠标点击出的经纬度坐标
        map.on('click', function (e) {
        //设置地图上所标点的坐标
          marker.setPosition(e.lnglat);
          console.log(e.lnglat,"e.lnglat")
          var lng = e.lnglat.lng;
          var lat = e.lnglat.lat;
          var arr = e.lnglat.lng + "," + e.lnglat.lat;
          var lnglat = [];
          lnglat.push(lng)
          lnglat.push(lat)
          console.log(lng+","+lat);
          that.form.lng = lng;
          that.form.lat = lat;
          that.form.jwd = arr;
          // that.center = lnglat;
          console.log(that.form.jwd,"that.form.jwd")
          //逆地理编码
          geocoder.getAddress(e.lnglat, function (status, result) {
            console.log(status,"status")
            console.log(result,"result")
            if (status == 'complete' && result.info === 'OK') {
              console.log(result.regeocode.formattedAddress)
            }
          })
        })
      });
    },
    save(){
      let that = this;
      var params = that.form
      params.store_id = that.store_id;
      params.shop_id = that.id;
      var url = saveShopEdiUrl;
      
      this.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--res.status_code--')
        if(result.status_code == ERR_OK){
          // that.$message("保存成功")
          that.getShopInfo()
          that.$message({
            type: 'success',
            message: '保存成功!'
          });
          that.$router.push("/store")
        }
      })
    },
    //获取用户所在城市信息
    getShopInfo() {
      let that = this;
      var params = {
        store_id: this.store_id,
        shop_id: this.id
      }
      var url = shopInfoUrl;
      
      this.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--res.status_code--')
        if(result.status_code == ERR_OK){
          that.form = result.data;
          that.form.jwd = that.form.lng + "," + that.form.lat
          var lnglat = [];
          lnglat.push(that.form.lng)
          lnglat.push(that.form.lat)
          that.center = lnglat
          console.log(that.center,"that.center")
          that.events = {
            init(o) {
              let marker = new AMap.Marker({
                position: lnglat
              });
              marker.setMap(o);
            },
            'click': (e) => {
              console.log(e)
              var lng = e.lnglat.lng;
              var lat = e.lnglat.lat;
              console.log(lng+","+lat);
              that.form.lng = lng;
              that.form.lat = lat;
              that.form.jwd = that.form.lng + "," + that.form.lat
            }
          }
          if(that.form.logo){
            that.isShowLogo = true;
          }
          if(that.form.img_url){
            that.isShowImgUrl = true;
          }
        }
      })
    },
    showImgManage(text){
      this.inputText = text;
      var li = document.getElementsByClassName('picBorder')
      console.log(li.length,"picBorder");
      // 重新打开imgManage的时候，所有图片取消被选中状态
      for(var i=0;i<li.length;i++){
        $(li[i]).removeClass("border");
        this.imgs[i].checked = 0;
      }
      this.isShowImgManage = true;
    },
    clearLogoUrl() {
      this.form.logo = "";
      this.isShowLogo = false;
    },
    clearImgUrl() {
      this.form.img_url = "";
      this.isShowImgUrl = false;
    },
    useBtn() {
      var that = this;
      console.log(this.inputText,"----this.inputText------")
      if(this.inputText == "封面"){
        this.$cookie.set('active',1)
        this.imgs.map(function(item) {
          if(item.checked){
            that.form.img_url = item.url;
            console.log("封面");
            console.log(that.form.img_url)
            that.isShowImgUrl = true;
          }
        })
        // localStorage.setItem('_url', images[0].url)
        // this.$router.go(-1);
      }else if(this.inputText == 'logo') {
        this.$cookie.set('active',2);
        console.log("setActive====2");
        var images = [];
        this.imgs.map(function(item) {
          if(item.checked){
            that.form.logo = item.url;
            that.isShowLogo = true;
          }
        })
        that.imgArr = images;
        console.log("logo");
      }
      that.isShowImgManage = false;
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
      this.getPicInfo()
    },
    getGroups() {
      let that = this;
      var params = {
        store_id: this.store_id,
      }
      var url = getGroupsUrl;
      
      this.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--res.status_code--')
        if(result.status_code == ERR_OK){
          this.treeData = result.data;
        }
      })
    },
    inputChange(e) {
      let that = this;
      var file = e.target.files[0]
      let params = new FormData()
      params.append('file', file)
      params.append('store_id', that.store_id)
      params.append('group_id', that.group_id||0)
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
            console.log("====成功===");
            that.imgs.unshift(res.data[0])
            // that.form.img_url = res.data[0].url;
            // that.isShowImgUrl = true;
            // console.log(that.form.img_url)
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
        offset:  (that.pageIndex-1)*that.pageSize,
        limit: this.pageSize 
      }
      var url = getImageUrl;
      this.$axios.post(url,params).then((res)=>{
        var result = res.data;
        // console.log(result.status_code,'--res.status_code--')
        if(result.status_code == ERR_OK){
          that.imgs = result.data.images;
          // console.log(that.imgs,'--img--')
          that.total = result.data.offset;
          if(that.total<that.pageSize) {
            that.showPageTag = false;
          }else{
            that.showPageTag = true;
          }
          var is_end = result.data.is_end;
          console.log(is_end,"isEnd")
          if(is_end == 0){
            that.disabled2 = false
          }else{
            that.disabled2 = true
          }
        }
      })
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
      console.log(id)
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
    },
    showImgManage(text){
      this.inputText = text;
      var li = document.getElementsByClassName('picBorder')
      console.log(li.length,"picBorder");
      // 重新打开imgManage的时候，所有图片取消被选中状态
      for(var i=0;i<li.length;i++){
        $(li[i]).removeClass("border");
        this.imgs[i].checked = 0;
      }
      this.isShowImgManage = true;
    },
  }
}
</script>


