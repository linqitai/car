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
        <div class="cicleBox" :class="{backcolorCurrent:item.id==currentLId}" @click="itemClick(item)">
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
            <li class="item" v-for="(item,index) in item.subs" :class="[item.id==currentMId?'selected':'']" @click="textClick(item)">
              <div class="title left">{{item.text}}</div>
            </li>
          </ul>
        </transition>
      </li>
    </ul> 
  </div>
</template>

<script>
var menu = [
            {id:0,icon:'icon-actsting',text:'预约',sub:[{icon:'fa-navicon',title:'预约管理',subs:[{id:0,text:'预约买车',path:'/apply'},{id:1,text:'预约卖车',path:'/sell'}]}]},
            {id:1,icon:'icon-actsting',text:'品牌',sub:[{icon:'fa-navicon',title:'品牌管理',subs:[{id:0,text:'品牌列表',path:'/brand'},{id:1,text:'选取品牌',path:'/select'}]}]},
            {id:2,icon:'icon-actsting',text:'车型',sub:[{icon:'fa-navicon',title:'车型管理',subs:[{id:0,text:'车型列表',path:'/commodity'},{id:1,text:'出售列表',path:'/sold'},{id:2,text:'添加车型',path:'/commodityEdit?from=add'}]}]},
            {id:3,icon:'icon-actsting',text:'门店',sub:[{icon:'fa-navicon',title:'门店管理',subs:[{id:0,text:'门店列表',path:'/store'}]}]},
           ]

export default {
  data() {
    return {
      currentMId: this.$cookie.get('currentMId') || 0,
      currentLId: this.$cookie.get('currentLId') || 0,
      itemTitleLen: '',
      flex: [],
      isCollapse: false,
      activeIndex: '',
      lSidebar : menu,
      mSidebar:[]
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
    // var currentLId = this.$cookie.get('currentLId');
    // console.log(currentLText,'--currentLText--')
    this.setMMenu(this.currentLId);
    // var currentMText = this.$cookie.get('currentMText');
    // this.setRouter(currentMText);
    console.log(menu,"menu")
  },
  mounted() {
  },
  methods: {
    setMMenu(id) {
      this.mSidebar = menu[id].sub;
    },
    setRouter(id) {
      this.$router.push(menu[this.$cookie.get('currentLId')||0].sub[0].subs[id].path); 
    },
    router(text) {
      console.log(text)
    },
    itemClick(item) {
      this.currentLId = item.id;
      this.$cookie.set('currentLId',item.id);
      this.currentMId = 0;
      this.setMMenu(item.id);
      this.$router.push(menu[this.$cookie.get('currentLId')||0].sub[0].subs[0].path); 
      this.$cookie.set('currentMId',0);
    },
    textClick(item) {
      console.log("you click me")
      this.currentMId = item.id;
      this.$cookie.set('currentMId',this.currentMId);
      // this.$cookie.set('currentMText',item.text);
      this.setRouter(item.id);
    },
    flexToggle(index) {
      var arr = [];
      for(var i=0; i<this.itemTitleLen; i++) {
        arr[i]=false;
      }
      if(this.flex[index] == true) {
        this.flex = arr; 
      }else{
        arr[index]=true;
        this.flex = arr;
      }
    },
    initFlex() {
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