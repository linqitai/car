<style lang="scss" scoped>
@import '../common/scss/common.scss';
.header {
  position: relative;
  width: 100%;
  height: $headerTop;
  line-height: $headerTop;
  color: #ffffff;
  background-color: #464C5B;
  .logoIcon {
    width: 32px;
    height: 32px;
    margin-left: 20px;
    margin-top: 9px;
  }
  .manage-box{
    font-size: 14px;
    padding: 0 24px;
    cursor: pointer;
    &:hover{
      background-color: $mainColor;
    }
    .iconstyle{
      font-size: 14px;
      padding-right: 3px;
    }
  }
}
</style>
<template>
  <div class="header">
    <div class="left width100"><img class="logoIcon" src="../images/logo.png"></div>
    <div class="left">鑫业小程序</div>
    <div class="right manage-box">
      <i class="iconfont iconstyle icon-logout"></i>退出登录
    </div>
    <div class="right manage-box">
      <i class="iconfont iconstyle icon-actsting"></i>账户设置
    </div>
  </div>
</template>
<script>
// import { userLoginOut, userInfo } from '../api/index'
export default {
  data() {
    return {
      role: '',
      username: 'admin',
      icon: 'icon-manage'
    }
  },
  methods: {
    toFirstPage() {
      // this.$router.push('./firstPage')
    },
    getUserInfo() {
      
    }
  },
  created() {
    // this.getUserInfo()
  }
}
</script>