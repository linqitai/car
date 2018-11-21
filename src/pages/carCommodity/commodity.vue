<style lang="scss" scoped>
.wrapper{
  padding:12px 20px;
  background-color: white;
  .operateTableBox{
    margin-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #F3F2F2;
    background-color: #F2F2F2;
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
          <el-breadcrumb-item><span class="nocurrent">汽车</span></el-breadcrumb-item>
          <el-breadcrumb-item><span>车型列表</span></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="operateTableBox">
      <search-condition @clickSearchData="getList">
        <div class="element">
          <div class="inline">
            <el-dropdown @command="handleMoreCommand">
              <el-button type="primary">
                批量操作<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="allOpen">批量开启</el-dropdown-item>
                <el-dropdown-item command="allHot">批量热门</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="element">
          <p class="inline">品牌</p>
          <div class="inline">
             <el-select class="width140" v-model="brandId" placeholder="请选择品牌" @change="brandChange">
              <el-option
                v-for="item in brandOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="element">
          <p class="inline">时间</p>
          <div class="inline">
            <el-date-picker
              v-model="hisTime"
              @change="dateChange"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </div>
        <div class="element">
          <p class="inline">排量</p>
          <div class="inline">
             <el-select class="width120" placeholder="请选择排量" v-model="pailiang" @change="pailiangChange">
              <el-option
                v-for="item in pailiangOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="element">
          <p class="inline">车型</p>
          <div class="inline">
             <el-select class="width120" placeholder="请选择车型" v-model="chexing" @change="chexingChange">
              <el-option
                class="width120"
                v-for="item in chexingOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="element">
          <p class="inline">排放标准</p>
          <div class="inline">
             <el-select class="width160" placeholder="请选择排放标准" v-model="pfbz" @change="pfbzChange">
              <el-option
                v-for="item in pfbzOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="element">
          <p class="inline">里程</p>
          <div class="inline">
             <el-select class="width160" placeholder="请选择里程" v-model="lc" @change="lcChange">
              <el-option
                v-for="item in mileageOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </search-condition>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
      @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="img_url"
          label="图标"
          width="80">
          <template slot-scope="scope">
            <img :src="scope.row.img_url" width="60">
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width="100"
          sortable
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="sort"
          label="排序"
          sortable
          width="100"
          sortable>
        </el-table-column>
        <el-table-column
          prop="is_featured"
          label="是否显示在首页"
          width="140">
          <template slot-scope="scope">
            {{scope.row.is_featured | getIs_fastBoolean}}
            <el-switch
              v-model="scope.row.is_featured"
              active-color="#409EFF"
              inactive-color="#c7c7c7"
              @change="fastChange($event,scope.row.id)">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="is_show"
          label="是否显示"
          width="100">
         <template slot-scope="scope">
            {{scope.row.is_show | getIs_showBoolean}}
            <el-switch
              v-model="scope.row.is_show"
              active-color="#409EFF"
              inactive-color="#c7c7c7"
              @change="showChange($event,scope.row.id)">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="buy_time"
          label="购买时间"
          width="160">
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row)" type="text" size="small" icon="el-icon-check">详情</el-button>
            <el-button @click="handleDeleteClick(scope.row)" type="text" size="small" icon="el-icon-close">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="tableBottom" v-show="showPageTag">
        <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" :page-sizes="[4,6,8]" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
    
  </div>
</template>
<script>
// import { format, getTime, getDateHM } from '../../../common/js/times'
// import { getLimiteText } from '../../../common/js/utils'
import { getResourceUrl,carTypeUrl,categoryShowUrl,carDeleteUrl,carIsShowUrl,carIsFeatureUrl,ERR_OK } from '@/api/index'
import searchCondition from 'components/searchCondition.vue'
var conIds = []
export default {
  data() {
    return {
      chexing:'',
      lc:'',
      bx:'',
      kx:'',
      pailiang:'',
      brandId:'',
      pageIndex: 1,
      pageSize: 6,
      total: 100,
      showPageTag: true,
      hisTime:'',
      time: [],
      brandName:'',
      searchLoading: false,
      isShowInFirstPage:[],
      options: [{
        value: '1',
        label: '已回复'
      }, {
        value: '2',
        label: '未回复'
      }, {
        value: '3',
        label: '垃圾篓'
      }],
      brandOptions: [],
      pailiangOptions: [],
      mileageOptions:[],
      chexingOptions:[],
      pfbzOptions: [],
      status: '',
      tableData: [],
      multipleSelection: [],
      store_id: localStorage.getItem('_storeId')
    }
  },
  components: {
    searchCondition
  },
  created() {
    this.getList();
    this.getResource();
  },
  filters: {
    getIs_fastBoolean(params) {
      var is_fast = params;
      return (is_fast == 1 || is_fast == true) ?  '是' :'否'
    },
    getIs_showBoolean(params) {
      var is_show = params;
      return (is_show == 1 || is_show == true) ?  '是' :'否'
    }
  },
  methods: {
    getList() {
      let that = this;
      var params = {
        store_id: that.store_id,
        offset: (that.pageIndex-1)*that.pageSize,
        limit: that.pageSize,
        sort:'desc',
        categorys:that.brandId,
        conditions: conIds.join(','),
        time:JSON.stringify(that.time)
      }
      var url = carTypeUrl;
      console.log(params,"params")
      this.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result,'--result--')
        if(result.status_code == ERR_OK){
          that.tableData = result.data.car;
          for(var i=0;i<that.tableData.length;i++){
            if(that.tableData[i].is_show==1){
              that.tableData[i].is_show = true
            }
            if(that.tableData[i].is_featured==1){
              that.tableData[i].is_featured = true
            }
          }
          that.total = result.data.count;
          if(that.total<that.pageSize) {
            that.showPageTag = false;
          }
        }
      })
    },
    dateChange(value) {
      console.log(value,"-------value-----------")
      var data1 = new Date(value[0]).getTime().toString();
      var len1 = data1.length
      var time1 = data1.substring(0,len1-3);
      var data2 = new Date(value[1]).getTime().toString();
      var len2 = data2.length
      var time2 = data2.substring(0,len2-3);
      console.log(`time1:${time1},time2:${time2}`);
      var times = [];
      times.push(time1);
      times.push(time2);
      this.time = times;
      console.log(this.time,"this.time")
    },
    brandChange(value) {
      this.brandId = value
      console.log(this.brandId,"===this.form.brandId===")
      this.getList();
    },
    chuliChange(value) {
      if(conIds.indexOf(value) < 0){
        conIds.push(value);
      }
      this.getList();
    },
    pfbzChange(value){
       this.chuliChange(value)
    },
    chexingChange(value) {
      this.chuliChange(value)
    },
    pailiangChange(value) {
      this.chuliChange(value)
    },
    lcChange(value){
      this.chuliChange(value)
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
          // that.storeOptions = result.data.shop;
          // for (var i = that.storeOptions.length - 1; i >= 0; i--) {
          //   that.storeOptions[i].value = that.storeOptions[i].id;
          //   that.storeOptions[i].label = that.storeOptions[i].name;
          // }
          // that.spotOptions = result.data.spot;
          // for (var i = that.spotOptions.length - 1; i >= 0; i--) {
          //   that.spotOptions[i].value = that.spotOptions[i].id;
          //   that.spotOptions[i].label = that.spotOptions[i].name;
          // }
          that.pailiangOptions =  result.data.attr[4].sub;
          for (var i = that.pailiangOptions.length - 1; i >= 0; i--) {
            that.pailiangOptions[i].value = that.pailiangOptions[i].id;
            that.pailiangOptions[i].label = that.pailiangOptions[i].name;
          }
          // that.colorOptions =  result.data.attr[6].sub;
          // for (var i = that.colorOptions.length - 1; i >= 0; i--) {
          //   that.colorOptions[i].value = that.colorOptions[i].id;
          //   that.colorOptions[i].label = that.colorOptions[i].name;
          // }
          that.chexingOptions =  result.data.attr[0].sub;
          for (var i = that.chexingOptions.length - 1; i >= 0; i--) {
            that.chexingOptions[i].value = that.chexingOptions[i].id;
            that.chexingOptions[i].label = that.chexingOptions[i].name;
          }
          // that.ageOptions =  result.data.attr[1].sub;
          // for (var i = that.ageOptions.length - 1; i >= 0; i--) {
          //   that.ageOptions[i].value = that.ageOptions[i].id;
          //   that.ageOptions[i].label = that.ageOptions[i].name;
          // }
          that.mileageOptions =  result.data.attr[2].sub;
          for (var i = that.mileageOptions.length - 1; i >= 0; i--) {
            that.mileageOptions[i].value = that.mileageOptions[i].id;
            that.mileageOptions[i].label = that.mileageOptions[i].name;
          }
          // that.bsxOptions =  result.data.attr[3].sub;
          // for (var i = that.bsxOptions.length - 1; i >= 0; i--) {
          //   that.bsxOptions[i].value = that.bsxOptions[i].id;
          //   that.bsxOptions[i].label = that.bsxOptions[i].name;
          // }
          that.pfbzOptions =  result.data.attr[5].sub;
          for (var i = that.pfbzOptions.length - 1; i >= 0; i--) {
            that.pfbzOptions[i].value = that.pfbzOptions[i].id;
            that.pfbzOptions[i].label = that.pfbzOptions[i].name;
          }
          // that.priceOptions =  result.data.attr[7].sub;
          // for (var i = that.priceOptions.length - 1; i >= 0; i--) {
          //   that.priceOptions[i].value = that.priceOptions[i].id;
          //   that.priceOptions[i].label = that.priceOptions[i].name;
          // }
        }
      })
    },
    fastChange(value,id) {
      console.log(value,'--value--')
      console.log(id,'--id--')
      let that = this;
      var ids = []
      ids.push(id)
      var params = {
        store_id: that.store_id,
        car_id: JSON.stringify(ids),
        is_featured: value?0:1
      }
      var url = carIsFeatureUrl;
      console.log(params,'--params--')
      that.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--res.status_code--')
        if(result.status_code == ERR_OK){
          console.log(result)
        }
      }).catch((err)=>{
        that.$message({
          type: 'info',
          message: '系统出错了'
        }); 
      });
    },
    showChange(value,id){
      console.log(value,'--value--')
      console.log(id,'--id--')
      let that = this;
      var ids = []
      ids.push(id)
      var params = {
        store_id: that.store_id,
        car_id: JSON.stringify(ids),
        is_show: value?0:1
      }
      var url = carIsShowUrl;
      console.log(params,'--params--')
      that.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--res.status_code--')
        if(result.status_code == ERR_OK){
          console.log(result)
        }
      }).catch((err)=>{
        that.$message({
          type: 'info',
          message: '系统出错了'
        }); 
      });
    },
    handleMoreCommand(command) {
      console.log(this.multipleSelection,'--multipleSelection--');
      var that = this;
      switch (command) {
        case 'allOpen':
          console.log('open')
          that.multiShow();
          break;
        case 'allHot':
          console.log('hot')
          that.multiHot();
        break;
        default:
          console.log('other')
          break;
      }
    },
    multiHot(){
      let that = this;
      var selections = [];
      if(that.multipleSelection.length==0){
        that.$message('请先选择所要显示在首页的品牌');
        return;
      }
      that.multipleSelection.forEach(function(item){
        selections.push(item.id)
      })
      var params = {
        store_id: that.store_id,
        car_id: JSON.stringify(selections),
        is_featured: 0
      }
      var url = carIsFeatureUrl;
      console.log(params,'--brandCategoryFastUrl--')
      that.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--res.status_code--')
        if(result.status_code == ERR_OK){
          console.log(result);
          that.getList();
        }
      }).catch((err)=>{
        that.$message({
          type: 'info',
          message: '系统出错了'
        }); 
      });
    },
    multiShow(){
      let that = this;
      var selections = [];
      if(that.multipleSelection.length==0){
        that.$message('请先选择所要开启的品牌');
        return;
      }
      that.multipleSelection.forEach(function(item){
        selections.push(item.id)
      })
      var params = {
        store_id: that.store_id,
        car_id: JSON.stringify(selections),
        is_show: 0
      }
      var url = carIsShowUrl;
      console.log(params,'--params--')
      that.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--res.status_code--')
        if(result.status_code == ERR_OK){
          console.log(result);
          that.getList();
        }
      }).catch((err)=>{
        that.$message({
          type: 'info',
          message: '系统出错了'
        }); 
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    edit(row) {
      this.$router.push('/commodityEdit?from=edit&id=' + row.id)
    },
    handleDeleteClick(row) {
      var that = this;
      console.log(row);
      this.$confirm('此操作将删除此条消息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(that.total,"that.total")
        console.log(Math.floor((that.total/that.pageSize+1)),"(that.total/that.pageSize+1)")
        console.log(that.pageIndex,"that.pageIndex")
        if(that.total%that.pageSize==1&&Math.floor((that.total/that.pageSize+1))==that.pageIndex){
          that.pageIndex -= 1;
          console.log("pageIndex-1")
        }
        var params = {
          store_id: that.store_id,
          car_id: row.id
        }
        var url = carDeleteUrl;
        console.log(params,"params")
        that.$axios.post(url,params).then((res)=>{
          var result = res.data;
          console.log(result,'--result--')
          if(result.status_code == ERR_OK){
            that.$message({
              type: 'success',
              message: '删除成功!'
            });
            console.log(that.pageIndex,"pageIndex")
            that.getList();
          }
        })
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
      this.pageIndex = val;
      console.log(val);
      this.getList();
    }
  }
}
</script>


