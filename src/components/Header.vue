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
    <div class="left manage-box" v-if="!isShowHeaderMore">
      鑫业小程序
    </div>
    <div class="left manage-box" v-if="isShowHeaderMore" @click="manage">
      <i class="iconfont iconstyle icon-setting"></i>店铺管理
    </div>
    <div class="left manage-box" v-if="isShowHeaderMore" @click="setting">
      <i class="iconfont iconstyle icon-setting"></i>店铺设置
    </div>
    <div class="right manage-box" @click="logout">
      <i class="iconfont iconstyle icon-logout"></i>退出登录
    </div>
    <!-- <div class="right manage-box">
      <i class="iconfont iconstyle icon-actsting"></i>账户设置
    </div> -->
  </div>
</template>
<script>
import { logoutUrl, ERR_OK } from '@/api/index'
export default {
  data() {
    return {
      role: '',
      username: 'admin',
      icon: 'icon-manage'
    }
  },
  props: {
      isShowHeaderMore: {
        type: Boolean,
        default: true
      }
    },
  methods: {
    manage(){
      // localStorage.setItem('_lSidebar','manage');
      // this.$emit('childToParentEvent', 'manage')
      this.$cookie.set('currentLId',0);
      this.$router.push('/apply');
      // window.location.reload()
    },
    setting() {
      // localStorage.setItem('_lSidebar','setting');
      // this.$emit('childToParentEvent', 'setting')
      this.$router.push('/setting');
    },
    logout() {
      window.localStorage.removeItem("authorization");
      console.log(localStorage.getItem('authorization'),'--authorization---')
      var url = logoutUrl;
      this.$axios.post(url,null).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--result.status_code--');
        if(result.status_code == ERR_OK){
          this.$router.push('/login');
        }
      });
    },
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