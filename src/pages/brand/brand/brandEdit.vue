<style lang="scss" scoped>
@import '../../../common/scss/common.scss';
.wrapper{
  padding:12px 20px;
  background-color: white;
  .contentBox{
    margin-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #F3F2F2;
    background-color: #F2F2F2;
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
    .lineBox{ 
      display: flex;
      align-items: center;
      margin-top:10px;
      .icon{
        flex: 0 0 10px;
        color: red; 
        font-size: 18px;
        height: 18px;
        line-height: 24px;
      }
      .text{
        flex: 0 0 60px;
        color: #646464;
      }
      .inputTitle{
        flex: 0 0 300px;
      }
      .upload-demo{
        margin-left: 12px;
      }
      .danwei{
        flex: 0 0 160px;
        margin-left: 12px;
      }
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
          <el-breadcrumb-item><span class="nocurrent">品牌</span></el-breadcrumb-item>
          <el-breadcrumb-item><span class="nocurrent">品牌管理</span></el-breadcrumb-item>
          <el-breadcrumb-item><span>汽车品牌编辑</span></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="contentBox">
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">详情图片</b>
        <el-input class="inputTitle" placeholder="请填写标题"></el-input>
        <el-upload
          class="inputTitle"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3">
          <el-button class="upload-demo" size="small" type="primary">点击上传</el-button>
        </el-upload>
      </div>
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">名称</b>
        <el-input class="inputTitle" placeholder="请填写名称"></el-input>
      </div>
      <div class="lineBox">
        <b class="icon">*</b>
        <b class="text">排序</b>
        <el-input class="inputTitle" placeholder="请填写排序"></el-input>
      </div>
      <el-button type="primary" class="margT20 width160" @click="sureBtn">确定</el-button>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      active: 1,
      show1: true,
      show2: false,
      show3: false,
      time: '',
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }],
      ld: ''
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    sureBtn() {
      this.$router.push('/brand')
    },
  }
}
</script>


