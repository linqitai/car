<style lang="scss" scoped>
@import '../../common/scss/common.scss';
$marignLen:14px;
.wrapper{
  padding:12px 20px;
  background-color: white;
  overflow-y: scroll;
  
  .contentBox{
    overflow-y: scroll;
    margin-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #F3F2F2;
    background-color: #F2F2F2;
    .uploadImgs{font-size: 0; overflow: hidden;clear: both;padding-top: 12px;height: auto;
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
    .addBox{
      position: relative;width: 56px;height: 36px;font-size: 14px;
      display: inline-block;clear: both;
      box-sizing: border-box;margin-left: 3px;background-color:#409EFF;
      border-radius: 6px;text-align: center;
      &:hover{
        background-color:#69B3FF;
      }
      .upload{position: absolute;top: 0;bottom: 0px; left:0;width: 56px;opacity: 0;}
      .icon{display: block; color: #fff !important;font-size: 14px !important; margin-top: 6px;}
    }
  }

  .stepsBox{
    text-align: center;
    width: 100%;
    padding-top: 16px;
    padding-bottom: 12px;
    .step{
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
  .contentBox{
    padding: 16px 24px;
  }
}

.box{
  display: flex;
  .boxl{
    flex: 0 0 360px;
  }
  .boxr{
    flex: 0 0 360px;
  }
}
.title{
  margin-top: 16px;
  margin-bottom: 6px;
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
</style>
<template>
  <div class="wrapper">
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
          <el-breadcrumb-item :to="{ path: '/' }"><span class="nocurrent">首页</span></el-breadcrumb-item>
          <el-breadcrumb-item><span class="nocurrent">汽车</span></el-breadcrumb-item>
          <el-breadcrumb-item><span>添加/编辑车型</span></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="stepsBox">
      <el-steps class="step" :active="active" align-center finish-status="success" :space="260">
        <el-step title="进行中" description="基础信息"></el-step>
        <el-step title="待进行" description="填写详情"></el-step>
        <el-step title="待进行" description="设置价格与属性"></el-step>
      </el-steps>
    </div>
    <!-- =========================================================================================================== -->
    <div class="contentBox" v-show="show1">
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">标题</b>
        <el-input class="inputTitle" v-model="form.name" placeholder="请填写标题"></el-input>
      </div>
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">品牌</b>
        <el-select class="inputTitle" v-model="form.brandId" placeholder="请选择品牌" @change="brandChange">
          <el-option
            v-for="item in brandOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">封面</b>
        <!-- <el-input class="inputTitle" v-model="form.img_url" :disabled="true" placeholder="所选图片的链接"></el-input> -->
        <!-- <div class="addBox">
          {{getImage_url}}
          <input type="file" class="upload" name="pic" @change="inputChange($event)" accept="image/*"/>
          <i class="el-icon-upload icon"></i>
        </div> -->
        <el-button class="inputTitle2" size="medium" type="primary" icon="el-icon-menu" @click="showImgManage('封面')"></el-button>
        <!-- <el-button class="inputTitle2" size="medium" type="primary" icon="el-icon-menu" @click="toImgManage('inputChange')"></el-button> -->
        <el-button class="inputTitle2" size="medium" type="primary" icon="el-icon-close" @click="clearUrl"></el-button>
      </div>
      <div class="lineBox" v-show="isShowImgUrl">
        <b class="icon"></b>
        <b class="text"></b>
        <img :src="form.img_url" height="118" width="118">
      </div>
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">购买时间</b>
        <el-date-picker
          class="inputTitle"
          v-model="buyTime"
          @change="buyTimeChange"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">上牌时间</b>
        <el-date-picker
          class="inputTitle"
          v-model="plateTime"
          @change="plateTimeChange"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">行驶里程</b>
        <el-input class="inputTitle" v-model="form.mileage" placeholder="请填写里程"></el-input>
        <b class="danwei">单位：万公里</b>
      </div>
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">排量</b>
        <el-input class="inputTitle" v-model="form.displacement" placeholder="请填写排量"></el-input>
      </div>
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">地区</b>
        <el-input class="inputTitle" v-model="form.area" placeholder="请填写地区"></el-input>
      </div>
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">所属门店</b>
        <el-select class="inputTitle" placeholder="请选择门店" v-model="form.shop_id" @change="storeChange">
          <el-option
            v-for="item in storeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-button type="primary" class="margT20 width160" @click="next1">下一步</el-button>
    </div>
     <!-- =========================================================================================================== -->
    <div class="contentBox" v-show="show2">
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">配置亮点</b>
        <el-select
            style="width: 300px;"
            v-model="form.spot_ids"
            @change="spotChange"
            multiple
            clearable
            filterable
            allow-create
            default-first-option
            placeholder="请选择">
          <el-option
            class="inputTitle"
            v-for="item in spotOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">详情图片</b>
        <!-- <el-input class="inputTitle" v-model="image_ids" :disabled="true" placeholder="所选图片的ID"></el-input> -->
       <!--  <div class="addBox">
          {{getImage_ids}}
          <input type="file" class="upload" name="pic" @change="inputChange4detail($event,2)" accept="image/*"/>
          <i class="el-icon-upload icon"></i>
        </div> -->
        <el-button class="inputTitle2" size="medium" type="primary" icon="el-icon-menu" @click="showImgManage('详情')"></el-button>
        <!-- <el-button class="inputTitle2" size="medium" type="primary" icon="el-icon-menu" @click="toImgManage('inputChange4detail')"></el-button> -->
        <el-button class="inputTitle2" size="medium" type="primary" icon="el-icon-close" @click="clearImg"></el-button>
      </div>
      <div class="lineBox">
        <b class="icon"></b>
        <b class="text"></b>
        <ul class="uploadImgs" v-if="imgs">
          <li v-for="(item,index) in imgArr" :key="index">
            <p class="img">
              <img data-select='0' :src="item.url" height="118" width="118" style="background-color: #D5D5D5;">
            </p>
          </li>
        </ul>
      </div>
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">车辆描述</b>
        <el-input
          class="inputTitle"
          v-model="form.details"
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 6}"
          placeholder="请输入内容">
        </el-input>
      </div>
      <el-button type="primary" class="margT20 width160"  @click="backNext">上一步</el-button>
      <el-button type="primary" class="margT20 width160"  @click="next2">下一步</el-button>
    </div>
    <!-- =========================================================================================================== -->
    <div class="contentBox" v-show="show3">
      <div class="title">属性设置</div>
      <div class="box">
        <div class="boxl">
          <div class="lineBox">
            <b class="icon">*</b>
            <b class="text">排量</b>
            <el-select v-model="form.pailiang" clearable placeholder="请选择">
              <el-option
                class="inputTitle"
                v-for="item in pailiangOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="lineBox">
            <b class="icon">*</b>
            <b class="text">颜色</b>
            <el-select v-model="form.color" clearable placeholder="请选择">
              <el-option
                class="inputTitle"
                v-for="item in colorOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="lineBox">
            <b class="icon">*</b>
            <b class="text">车型</b>
            <el-select v-model="form.chexing" clearable placeholder="请选择">
              <el-option
                class="inputTitle"
                v-for="item in chexingOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
            <div class="lineBox">
            <b class="icon">*</b>
            <b class="text">车龄</b>
            <el-select v-model="form.age" clearable placeholder="请选择">
              <el-option
                class="inputTitle"
                v-for="item in ageOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="boxr">
          <div class="lineBox">
            <b class="icon">*</b>
            <b class="text">里程区间</b>
            <el-select v-model="form.mileageRange" clearable placeholder="请选择">
              <el-option
                class="inputTitle"
                v-for="item in mileageOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="lineBox">
            <b class="icon">*</b>
            <b class="text">变速箱</b>
            <el-select v-model="form.bsx" clearable placeholder="请选择">
              <el-option
                class="inputTitle"
                v-for="item in bsxOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="lineBox">
            <b class="icon">*</b>
            <b class="text">排放标准</b>
            <el-select v-model="form.pfbz" clearable placeholder="请选择">
              <el-option
                class="inputTitle"
                v-for="item in pfbzOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="lineBox">
            <b class="icon">*</b>
            <b class="text">价格区间</b>
            <el-select v-model="form.priceRange" clearable placeholder="请选择">
              <el-option
                class="inputTitle"
                v-for="item in priceOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="title">价格设置</div>
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">原价</b>
        <el-input class="inputTitle" v-model="form.original_price" placeholder="请输入原价"></el-input>
        <b class="danwei">单位：万元</b>
      </div>
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">现价</b>
        <el-input class="inputTitle" v-model="form.price" placeholder="请输入原价"></el-input>
        <b class="danwei">单位：万元</b>
      </div>
      <el-button type="primary" class="margT20 width160"  @click="backNext">上一步</el-button>
      <el-button type="primary" class="margT20 width160"  @click="next3">保存</el-button>
    </div>
    <!-- =========================================================================================================== -->
    <el-dialog
      :visible.sync="progressDialog"
      width="30%">
      <div style="padding-bottom: 10px;">图片上传中</div>
      <el-progress style="margin-top: 10px;" :text-inside="true" :stroke-width="18" :percentage="percentage" status="success"></el-progress>
    </el-dialog>
  </div>
</template>
<script>
  // import axios from 'axios';
  import { getResourceUrl,carAddEditUrl,carShowUrl,getImageUrl,uploadUrl,getGroupsUrl,addGroupsUrl,deleteGroupsUrl,movePicToGroupUrl,ERR_OK } from '@/api/index'
// var imgArr = new Array();
var ids = new Array();
export default {
  data() {
    return {
      isBuyTimeChange: false,
      isPlateTimeChange: false,
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
      active: parseInt(this.$cookie.get('active'))||1,
      show1: true,
      show2: false,
      show3: false,
      time: '',
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      brandOptions: [],
      options: [],
      storeOptions: [],
      spotOptions:[],
      pailiangOptions:[],
      colorOptions:[],
      chexingOptions:[],
      ageOptions:[],
      bsxOptions:[],
      pfbzOptions:[],
      priceOptions:[],
      mileageOptions:[],
      ld: '',
      store_id:localStorage.getItem('_storeId'),
      form:{
        name:'',
        brandId: '', // 缺少
        category_ids:[],
        img_url: '',
        buy_time: '',
        plate_time: '',
        mileage: '',
        displacement:'',
        area: '',
        shop_id: '',
        spot_ids: [],
        image_ids: '',
        details: '',
        attr_ids:[],
        pailiang:'', //============
        color: '',
        chexing: '',
        age:'',
        bsx: '',
        pfbz:'',
        mileageRange:'',
        priceRange: '',//============
        original_price: '',
        price:''
      },
      image_ids:'',
      buyTime:'',
      plateTime:'',
      inputText:'',
      isShowImgUrl: false
    }
  },
  created(){
    let that = this;
    this.getResource();
    console.log("=======created=====");
    // this.$cookie.set('active',1)
    this.active = 1;
    this.setActive();
    this.id = this.$cookie.get("_carId");
    if(this.$route.query.from=='edit'){
      this.getCarInfo();
    }
    that.getPicInfo();
    setTimeout(function() {
      that.getGroups();
    }, 20)
    if(this.form.img_url){
      that.isShowImgUrl = true;
    }else{
      that.isShowImgUrl = false;
    }
  },
  computed:{
    getActiv(){
      
    },
    getImage_url() {
      let that = this;
      var _url = localStorage.getItem('_url');
      console.log(_url,"---------url-----------")
      that.form.img_url = _url;
    },
    getImage_ids(){
      let that = this;
      ids = [];
      for(var i=0;i<that.imgArr.length;i++) {
        ids.push(that.imgArr[i].id);
      }
      that.form.image_ids = ids;
    }
  },
  methods: {
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
      }else if(this.inputText == '详情') {
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
        that.imgArr = images;
        console.log("详情");
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
      console.log(params,"========params==========")
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
          message: '接口无效!'
        });
        // this.$message({
        //   type: 'success',
        //   message: '删除成功!'
        // });
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
    getCarInfo(){
      let that = this;
      var params = {
        store_id: this.store_id,
        car_id: this.id
      }
      var url = carShowUrl;
      this.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--res.status_code--');
        if(result.status_code == ERR_OK){
          that.form.name = result.data.name;
          that.buyTime = result.data.buy_time;
          that.form.buy_time = result.data.buy_time;
          console.log(that.buyTime,"that.buyTime")
          console.log(that.form.buy_time,"that.form.buy_time")
          that.plateTime = result.data.plate_time;
          that.form.plate_time = result.data.plate_time;
          that.form.img_url = result.data.img_url;
          if(that.form.img_url){
            that.isShowImgUrl = true;
          }
          that.imgArr =  result.data.images;
          for(var i=0;i<result.data.images.length;i++){
            ids.push(result.data.images[i].id);
          }
          that.form.mileage = result.data.mileage;
          that.form.displacement = result.data.displacement;
          that.form.area = result.data.area;
          that.form.shop_id = result.data.shop_id;
          that.form.displacement = result.data.displacement;
          
          // that.form.brandId = result.data.categorys[0].id;
          that.form.details = result.data.details;
          that.form.price = result.data.price;
          that.form.original_price = result.data.original_price;
          that.form.pailiang = result.data.attrs[0].id;
          that.form.color = result.data.attrs[1].id;
          that.form.chexing = result.data.attrs[2].id;
          that.form.age = result.data.attrs[3].id;
          that.form.mileageRange = result.data.attrs[6].id;
          that.form.bsx = result.data.attrs[4].id;
          that.form.pfbz = result.data.attrs[5].id;
          that.form.priceRange = result.data.attrs[7].id;
          var spotIds = [];
          for(var i=0;i< result.data.spots.length;i++){
            spotIds.push(result.data.spots[i].id);
          }
          that.form.spot_ids = spotIds;

          var cateIds = [];
          for(var i=0;i< result.data.categorys.length;i++){
            cateIds.push(result.data.categorys[i].id);
          }
          that.form.category_ids = cateIds;
          this.form.brandId = cateIds[0];
          console.log(that.form.category_ids,"--that.form.category_ids---")
        }
      })
    },
    setActive(){
      console.log(this.active,"----active----------")
      if(this.active == 1) {
        this.show1 = true
        this.show2 = false
        this.show3 = false
      } else if(this.active == 2) {
        this.show1 = false
        this.show2 = true
        this.show3 = false
      } else if(this.active == 3) {
        this.show1 = false
        this.show2 = false
        this.show3 = true
      }
    },
    clearUrl() {
      this.form.img_url = "";
      this.isShowImgUrl = false;
    },
    clearImg() {
      var that = this;
      that.form.image_ids = "";
      ids=[];
      that.imgArr=[];
    },
    spotChange(value){
      this.spot_ids = value
      console.log(this.form.spot_ids,"===this.form.spot_ids===")
    },
    plateTimeChange(value) {
      this.isPlateTimeChange = true;
      this.plateTime = value
      console.log(value)
      var data = new Date(value).getTime().toString();
      var len = data.toString().length
      this.form.plate_time = data.substring(0,len-3);
      // this.plateTime = data.substring(0,len-3);
      console.log(this.form.plate_time,"===this.form.plate_time===")
    },
    buyTimeChange(value) {
      this.isBuyTimeChange = true;
      this.buyTime = value
      console.log(value)
      var data = new Date(value).getTime().toString();
      var len = data.toString().length
      this.form.buy_time = data.substring(0,len-3);
      // this.buyTime =  data.substring(0,len-3);
      console.log(this.form.buy_time,"---this.form.buy_time----")
    },
    storeChange(value) {
      this.form.shop_id = value
      console.log(this.form.shop_id,"===this.form.shop_id===")
    },
    brandChange(value) {
      this.form.brandId = value
      console.log(this.form.brandId,"===this.form.brandId===")
    },
    getResource() {
      let that = this;
      var params = {
        store_id: this.store_id,
      }
      var url = getResourceUrl;
      this.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--res.status_code--');
        if(result.status_code == ERR_OK){
          that.brandOptions = result.data.category;
          for (var i = that.brandOptions.length - 1; i >= 0; i--) {
            that.brandOptions[i].value = that.brandOptions[i].id;
            that.brandOptions[i].label = that.brandOptions[i].name;
          }
          that.storeOptions = result.data.shop;
          for (var i = that.storeOptions.length - 1; i >= 0; i--) {
            that.storeOptions[i].value = that.storeOptions[i].id;
            that.storeOptions[i].label = that.storeOptions[i].name;
          }
          that.spotOptions = result.data.spot;
          for (var i = that.spotOptions.length - 1; i >= 0; i--) {
            that.spotOptions[i].value = that.spotOptions[i].id;
            that.spotOptions[i].label = that.spotOptions[i].name;
          }
          that.pailiangOptions =  result.data.attr[4].sub;
          for (var i = that.pailiangOptions.length - 1; i >= 0; i--) {
            that.pailiangOptions[i].value = that.pailiangOptions[i].id;
            that.pailiangOptions[i].label = that.pailiangOptions[i].name;
          }
          that.colorOptions =  result.data.attr[6].sub;
          for (var i = that.colorOptions.length - 1; i >= 0; i--) {
            that.colorOptions[i].value = that.colorOptions[i].id;
            that.colorOptions[i].label = that.colorOptions[i].name;
          }
          that.chexingOptions =  result.data.attr[0].sub;
          for (var i = that.chexingOptions.length - 1; i >= 0; i--) {
            that.chexingOptions[i].value = that.chexingOptions[i].id;
            that.chexingOptions[i].label = that.chexingOptions[i].name;
          }
          that.ageOptions =  result.data.attr[1].sub;
          for (var i = that.ageOptions.length - 1; i >= 0; i--) {
            that.ageOptions[i].value = that.ageOptions[i].id;
            that.ageOptions[i].label = that.ageOptions[i].name;
          }
          that.mileageOptions =  result.data.attr[2].sub;
          for (var i = that.mileageOptions.length - 1; i >= 0; i--) {
            that.mileageOptions[i].value = that.mileageOptions[i].id;
            that.mileageOptions[i].label = that.mileageOptions[i].name;
          }
          that.bsxOptions =  result.data.attr[3].sub;
          for (var i = that.bsxOptions.length - 1; i >= 0; i--) {
            that.bsxOptions[i].value = that.bsxOptions[i].id;
            that.bsxOptions[i].label = that.bsxOptions[i].name;
          }
          that.pfbzOptions =  result.data.attr[5].sub;
          for (var i = that.pfbzOptions.length - 1; i >= 0; i--) {
            that.pfbzOptions[i].value = that.pfbzOptions[i].id;
            that.pfbzOptions[i].label = that.pfbzOptions[i].name;
          }
          that.priceOptions =  result.data.attr[7].sub;
          for (var i = that.priceOptions.length - 1; i >= 0; i--) {
            that.priceOptions[i].value = that.priceOptions[i].id;
            that.priceOptions[i].label = that.priceOptions[i].name;
          }
        }
      })
    },
    toImgManage(from) {
      this.$router.push('/imgManage' + '?from=' + from)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    backNext() {
      console.log(this.active,'active')
      this.active = parseInt(this.$cookie.get('active'))-1;
      console.log(this.active,'-active')
      this.$cookie.set('active',this.active)
      this.setActive();
    },
    next1() {
      console.log(this.form)
      this.show1 = false
      this.show2 = true
      this.show3 = false
      this.active = 2
      this.$cookie.set('active', 2)
      this.$cookie.set('form', this.form)
    },
    next2() {
      this.show1 = false
      this.show2 = false
      this.show3 = true
      this.active = 3
      this.$cookie.set('active', 3)
    },
    next3() {
      // console.log(ids,"---------ids------------")
     /* attr_ids:[],
        pailiang:'', //============
        color: '',
        chexing: '',
        age:'',
        bsx: '',
        pfbz:'',
        mileageRange:'',
        priceRange: '',//============*/
      this.$cookie.set('active',4)
      let that = this;
      this.form.store_id = this.store_id;
      this.form.attr_ids.push(this.form.pailiang);
      this.form.attr_ids.push(this.form.color);
      this.form.attr_ids.push(this.form.chexing);
      this.form.attr_ids.push(this.form.age);
      this.form.attr_ids.push(this.form.bsx);
      this.form.attr_ids.push(this.form.pfbz);
      this.form.attr_ids.push(this.form.mileageRange);
      this.form.attr_ids.push(this.form.priceRange);
      this.form.attr_ids = JSON.stringify(this.form.attr_ids);

      if(!this.isBuyTimeChange){
        var data = new Date(that.form.buy_time).getTime().toString();
        var len = data.toString().length;
        this.form.buy_time = data.substring(0,len-3);
        console.log(this.form.buy_time)
      }
      if(!this.isPlateTimeChange){
        var data = new Date(that.form.plate_time).getTime().toString();
        var len = data.toString().length;
        this.form.plate_time = data.substring(0,len-3);
        console.log(this.form.plate_time)
      }
      // var arrids = this.form.image_ids.split(',');
      // var len = this.form.image_ids.split(',').length;
      // console.log(this.form.image_ids.split(',').length);
      // var idds = [];
      // for(var i=0;i<len;i++){
      //   idds.push(arrids[i]);
      // }
      // params.image_ids=[];
      var cids = [];
      cids.push(this.form.brandId);
      this.form.category_ids = JSON.stringify(cids); //品牌
      var imgIds = [];
      for(var i=0;i<that.imgArr.length;i++){
        imgIds.push(that.imgArr[i].id);
      }
      this.form.image_ids = JSON.stringify(imgIds);
      this.form.spot_ids = JSON.stringify(this.form.spot_ids);//亮点
      var url = carAddEditUrl;
      var params = this.form;
      console.log(params,'params')

      this.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result,'--result--')
        if(result.status_code == ERR_OK){
          console.log("success")
          this.$router.push('/commodity')
        }
      }).catch((err)=>{
        console.info(err);
      });
    },
  }
}
</script>


