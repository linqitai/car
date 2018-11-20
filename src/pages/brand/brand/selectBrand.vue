<style lang="scss" scoped>
.wrapper{
  padding:12px 20px;
  background-color: white;
  height: 100%;
  .selectBox{
    margin-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #F3F2F2;
    background-color: #F2F2F2;
    height: 100%;
    .titleBox{
      text-align: center; 
      margin: 50px 0 20px;
      display: flex;
      justify-content: center;
      .icon{
        flex: 0 0 14px;
        color: red; 
        font-size: 24px;
      }
      .text{
        flex: 0 0 162px;
        font-size: 18px;
        color: #646464;
      }
    }
    .boxs{
      display: flex;
      // background-color:red;
      width: 500px;
      margin-left: 50%;
      transform: translateX(-50%);
      .leftBox,.rightBox{
        height: 500px;
        border: 1px solid #DBDBDB;
        background-color: #f4f4f2;
        .header{
          padding: 24px 18px;
          color: #A9A8A8;
          border-bottom: 1px solid #DBDBDB;
          .num{
            float: right;
            line-height: 20px;
          }
        }
        .contentItemsBox{
          padding: 10px 18px;
          .item{
            margin-top: 6px;
            margin-bottom: 6px;
          }
        }
      }
      .leftBox{
        flex: 0 0 200px;

      }
      .centerBox{
        flex: 0 0 100px;
        height: 500px;
        // background-color: red;
        .btnBox{
          text-align: center;
          position: relative;
          .btn_left,.btn_rigth{
            margin-top: 10px;
            position: absolute;
          }
          .btn_left{
            top: 100px;
            left: 18px;
          }
          .btn_rigth{
            top: 150px;
            left: 29px;
          }
        }
      }
      .rightBox{
        flex: 0 0 200px;
      }
    }
  }
}
.transfer{
  text-align: left; display: inline-block;height: 560px;
}
</style>
<template>
  <div class="wrapper">
    <div class="breadcrumbWrapper">
      <div class="breadcrumb">
        <i class="iconfont icon-home iconhomestyle nocurrent"></i>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }"><span class="nocurrent">首页</span></el-breadcrumb-item>
          <el-breadcrumb-item><span class="nocurrent">品牌</span></el-breadcrumb-item>
          <el-breadcrumb-item><span class="nocurrent">品牌管理</span></el-breadcrumb-item>
          <el-breadcrumb-item><span>选取品牌</span></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="selectBox">
      <div class="titleBox">
        <b class="icon">*</b>
        <b class="text">选择您经营的品牌</b>
      </div>
      <div class="boxs">
        <div class="leftBox">
          <div class="header">
            <el-checkbox v-model="allBrandChecked">所有品牌</el-checkbox>
            <label class="num">3</label>
          </div>
          <div class="contentItemsBox">
            <div class="item"><el-checkbox>野马</el-checkbox></div>
            <div class="item"><el-checkbox>野马</el-checkbox></div>
          </div>
        </div>
        <div class="centerBox">
          <div class="btnBox">
            <el-button class="btn_rigth" size="small" round icon="el-icon-arrow-right"></el-button>
            <el-button class="btn_left" size="small" round icon="el-icon-arrow-left"></el-button>
          </div>
        </div>
        <div class="rightBox">
          <div class="header">
            <el-checkbox v-model="allBrandChecked">已选取的品牌</el-checkbox>
            <label class="num">3</label>
          </div>
          <div class="contentItemsBox">
            <div class="item"><el-checkbox>野马</el-checkbox></div>
            <div class="item"><el-checkbox>野马</el-checkbox></div>
          </div>
        </div>
      </div>
      <!-- <div style="text-align: center">
        <el-transfer
          class="transfer"
          v-model="value1"
          @change="handleChange"
          filterable
          :filter-method="filterMethod"
          :titles="['所有品牌', '已选择的品牌']"
          :button-texts="['到左边', '到右边']"
          :data="list">
          <span slot-scope="{ option }">{{ option.name }}</span>
          <el-button class="transfer-footer" slot="right-footer" size="small" type="primary" @click="sureBtn">确定</el-button>
        </el-transfer>
      </div> -->
    </div>
  </div>
</template>
<script>
import { brandCategoryChooseUrl,brandCategoryEditUrl,ERR_OK } from '@/api/index';
var ids = new Array();
export default {
  data() {
    return {
      allBrandChecked: false,
      list: [],
      value1: [],
      store_id:localStorage.getItem('_storeId'),
      filterMethod(query, item) {
          return item.name.indexOf(query) > -1;
      }
    }
  },
  created() {
    var that = this;
    that.getBrandChoose();
  },
  methods: {
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
      // this.value1 = ids
    },
    getBrandChoose2() {
      this.value1 = [156,157]
    },
    getBrandChoose() {
      var that = this;
      var params = {
        store_id: this.store_id,
        is_need_all: 1
      }
      var url = brandCategoryChooseUrl;
      that.$axios.post(url,params).then((res)=>{
        // console.log(result,'--result--')
        var result= res.data;
        console.log(result,'--result--')
        if(result.status_code == ERR_OK){
          that.list = result.data.all;
          // console.log(that.list,'that.list')
          for(var i=0;i<that.list.length;i++) {
            that.list[i].key = that.list[i].id;
          }
          var choice = result.data.choice;
          for (var i = 0; i < choice.length; i++) {
            var a = choice[i].id.toString();
            ids.push(a);
          }
          that.value1 = ids;
          // that.value1 = [156,157]
          console.log(that.value1.toString())
        }else{
          that.$message({
            type: 'info',
            message: '系统出错了'
          }); 
        }
      })
    },
    sureBtn() {
      console.log(this.value1,'--value1--')
      let that = this;
      var params = {
        store_id: that.store_id,
        category_id: JSON.stringify(that.value1)
      }
      var url = brandCategoryEditUrl;
      this.$axios.post(url,params).then((res)=>{
        var result = res.data;
        // console.log(result,'--result--')
        if(result.status_code == ERR_OK){
          localStorage.setItem('currentMId',0);
          that.$router.push('/brand')
        }else{
          this.$message({
            type: 'info',
            message: '系统出错了'
          }); 
        }
      }).catch((err)=>{
        this.$message({
          type: 'info',
          message: '系统出错了'
        }); 
      });
    }
  }
}
</script>


