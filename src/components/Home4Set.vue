<template>
  <div class="home">
    <v-head></v-head>
    <div class="contentWrapper">
      <keep-alive>
        <l-sidebar></l-sidebar>
      </keep-alive>
      <div class="content" ref="content">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import vHead from './Header.vue'
import lSidebar from './LeftSidebar4Set.vue'
export default {
  data() {
    return {
      // childToParent: localStorage.getItem('_lSidebar'),
      // lSidebar:[],
    }
  },
  created() {
    // var ls = localStorage.getItem('_lSidebar');
    // console.log(ls,'--ls-created-')
  },
  methods: {
    // childToParentEvent(value) {
    //   console.log(value,'--childToParent--')
    //   this.childToParent = value;
    //   if(this.childToParent == "setting") {
    //   this.lSidebar = [{id:0,icon:'icon-actsting',text:'小程序设置'},{id:1,icon:'icon-actsting',text:'人员管理'},{id:2,icon:'icon-actsting',text:'短信包管理'},{id:3,icon:'icon-actsting',text:'消息提醒'},{id:4,icon:'icon-actsting',text:'上传管理'}]
    //   }else if(this.childToParent == "manage") {
    //     this.lSidebar = [{id:0,icon:'icon-actsting',text:'预约'},{id:1,icon:'icon-actsting',text:'品牌'},{id:2,icon:'icon-actsting',text:'车型'},{id:3,icon:'icon-actsting',text:'轮播设置'},{id:4,icon:'icon-actsting',text:'店面管理'}]
    //   }
    //   console.log(lSidebar,'--lSidebar--')
    // }
  },
  components: {
    vHead, lSidebar
  }
}
</script>
<style lang="scss">
@import '../common/scss/common.scss';
.home {
  font-size: 13px;
  background-color: gray;
  @include extend();
  .contentWrapper{
    position: relative;
    .content{
      position: fixed;
      left: $lSidebarWidth+$mSidebarWidth;
      top: $headerTop;
      right: 0;
      bottom: 0;
      background-color: white;
      float: left;
      .el-transfer-panel__body{
        height: 400px !important;
        padding-bottom: 16px !important;
      }
      .el-checkbox-group{
        height: 400px !important;
      }
      .el-checkbox__label{
        color: #888889;
        font-size: 13px;
      }
      .transfer-footer{
        margin-left: 50%;
        transform: translateX(-50%);
      }
      .el-step__head.is-success {
        color: $mainColor !important;
        border-color: $mainColor !important;
      }
      .el-step__title.is-success {
          color: $mainColor !important;
      }
      .el-step__description.is-success {
          color: $mainColor !important;
      }
    }
  }
}
</style>
