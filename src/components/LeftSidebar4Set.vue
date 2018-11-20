<style lang="scss" scoped>
  @import '../common/scss/common.scss';
  @import '../common/scss/mixin.scss';
  $ciclepx:56px;
  $lItemHeight:86px;
  $circleml:($lItemHeight - $ciclepx)/2;
  
  .lSidebar{
    position: fixed;
    left: 0;
    top: $headerTop;
    right: 0;
    bottom: 0;
    background-color: white;
    width: $lSidebarWidth;
    float: left;
    .lItem{
      height: $lItemHeight;
      text-align: center;
      vertical-align: middle;
      padding-top: 10px;
      .cicleBox{
        color: rgb(255, 255, 255);
        width: $ciclepx;
        height: $ciclepx;
        border-radius: $ciclepx;
        margin-left: $circleml;
        background-color: #F2F2F2;
        &:hover{
          .iconStyle{
            color: #3498DB !important;
          }
        }
        &.backcolorCurrent{
          background-color: #3498DB !important;
          .iconStyle{
            color: #ffffff !important;
          }
        }
        .iconStyle{
          height: $ciclepx;
          line-height: $ciclepx;
          font-size: 22px !important;
          color: #CCCCCC;
        }
      }
      .title{
        margin-top: 10px;
        color: #c7c7c7;
      }
    }
  }
  .mSidebar{
    position: fixed;
    left: $lSidebarWidth;
    top: $headerTop;
    right: 0;
    bottom: 0;
    background-color: #F2F2F2;
    width: $mSidebarWidth;
    float: left;
    border-left:1px solid #F3F2F2 !important;
    .itemTitle{
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #e8e8e8;
      color: #B6B6B6;
      cursor: pointer;
      .iconStyle{
        margin-left: 12px;
        line-height: 50px;
      }
      .title{
        margin-left: 3px;
      }
      .arrow{
        margin-right: 20px;
        color: #c7c7c7;
      }
    }
    .item{
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #e8e8e8;
      cursor: pointer;
      .title{
        margin-left: 24px;
      }
      &.selected{
        color: $selectedColor;
        background-color: white;
      }
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .3s ease
    }
    .fade-enter, .fade-leave-to{
      opacity: 0;
    }
  }
</style>
<template>
  <div>
    <ul class="lSidebar">
      <li class="lItem" v-for="(item,index) in lSidebar">
        <div class="cicleBox" :class="{backcolorCurrent:item.id==current}" @click="itemClick(index,item.text)">
          <i class="fa fa-square iconStyle"></i>
        </div>
        <div class="title">{{item.text}}</div>
      </li>
    </ul>
    <ul class="mSidebar">
      <li v-for="(item,index) in mSidebar">
        <div class="itemTitle" @click="flexToggle(index)">
          <i class="fa iconStyle left" :class="item.icon"></i>
          <div class="title left">{{item.title}}</div>
          <!-- <i class="iconfont icon-arrowdowm arrow right"></i> -->
        </div>
        <transition name='fade'>
          <ul v-show="flex[index]">
            <li class="item" v-for="(item,index) in item.subs" :class="[item.id==currentId?'selected':'']" @click="textClick(item.id,item.text)">
              <div class="title left">{{item.text}}</div>
            </li>
          </ul>
        </transition>
      </li>
    </ul> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentId: '',
      current:0,
      itemTitleLen: '',
      flex: [],
      isCollapse: false,
      activeIndex: '',
      lSidebar : [{id:0,icon:'icon-actsting',text:'小程序设置'}
      // {id:1,icon:'icon-actsting',text:'人员管理'},
      // {id:2,icon:'icon-actsting',text:'短信包管理'},
      // {id:3,icon:'icon-actsting',text:'消息提醒'},
      // {id:4,icon:'icon-actsting',text:'上传管理'}
      ],
      mSidebar:[
        {icon:'fa-navicon',title:'基础信息',subs:[{id:0,text:'授权'}
        // {id:1,text:'模板消息'},{id:2,text:'举报管理'}
        ]},
        // {icon:'fa-navicon',title:'用户管理',subs:[{id:3,text:'新增用户'},{id:4,text:'活跃用户'},{id:5,text:'黑名单用户'}]},
        // {icon:'fa-navicon',title:'统计分析',subs:[{id:3,text:'活跃分析'},{id:4,text:'时段分析'},{id:5,text:'新增和启动'}]}
        ]
    }
  },
  // 接受父组件的值
  // props: {
  //   lSidebar: Array,
  //   required: true
  // },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '')
    }
  },
  created(){
    this.itemTitleLen = 2;
    this.flex=this.initFlex();
    var ls = this.childToParent;
    console.log(ls,'--ls--')
  },
  mounted() {
  },
  methods: {
    router(text) {
      console.log(text)
    },
    itemClick(index,text) {
      this.current = index;
      console.log(index,'click me');
      console.log(text,'click me');
      this.currentId = 100;
      switch(text){
        case '预约':
        this.mSidebar = [
                {icon:'fa-navicon',title:'内容管理',subs:[{id:0,text:'看车申请'},{id:1,text:'评论管理'},{id:2,text:'举报管理'}]},
                {icon:'fa-navicon',title:'用户管理',subs:[{id:3,text:'新增用户'},{id:4,text:'活跃用户'},{id:5,text:'黑名单用户'}]}
               ]; break;
        case '品牌':
          this.mSidebar = [
          {icon:'fa-navicon',title:'品牌管理',subs:[{id:0,text:'品牌管理'},{id:1,text:'评论管理'},{id:2,text:'举报管理'}]},
          {icon:'fa-navicon',title:'用户管理',subs:[{id:3,text:'新增用户'},{id:4,text:'活跃用户'},{id:5,text:'黑名单用户'}]}
         ]; break;
        default:
          this.mSidebar = [
          {icon:'fa-navicon',title:'品牌管理',subs:[{id:0,text:'品牌管理'},{id:1,text:'评论管理'},{id:2,text:'举报管理'}]},
          {icon:'fa-navicon',title:'用户管理',subs:[{id:3,text:'新增用户'},{id:4,text:'活跃用户'},{id:5,text:'黑名单用户'}]}
         ]; break;
      }
    },
    textClick(index,text) {
      this.currentId = index;
      console.log(text)
      switch(text){
        case '看车申请':
          this.$router.push('/apply'); break;
        case '评论管理':
          this.$router.push('/review'); break;
        case '举报管理':
          this.$router.push('/complaint'); break
        case '品牌管理':
          this.$router.push('/brand'); break;
        default:
          this.$router.push('/apply'); break;
      }
    },
    flexToggle(index) {
      // this.activeIndex = index
      console.log(index);
      var arr = [];
      for(var i=0; i<this.itemTitleLen; i++) {
        arr[i]=false;
      }
      console.log(this.flex,'--this.flex---')
      if(this.flex[index] == true) {
        this.flex = arr; 
      }else{
        arr[index]=true;
        this.flex = arr;
      }
    },
    initFlex() {
      console.log(this.itemTitleLen,'--itemTitleLen--')
      var arr=[]
      for(var i = 0; i < this.itemTitleLen; i++) {
        if(i==0) {
          arr[i] = true;
        }else{
          arr[i] = false;
        }
      }
      return arr;
    }
  }
}
</script>


