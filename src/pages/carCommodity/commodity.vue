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
      <search-condition @clickSearchData="search">
        <div class="element">
          <div class="inline">
            <el-dropdown @command="handleMoreCommand">
              <el-button type="primary">
                批量操作<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="kaiqi">批量开启</el-dropdown-item>
                <el-dropdown-item command="remen">批量热门</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="element">
          <p class="inline">品牌</p>
          <div class="inline">
             <el-select v-model="brand" placeholder="请选择品牌">
              <el-option
                class="width120"
                v-for="item in options"
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
              class="input"
              v-model="date"
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
             <el-select v-model="brand" placeholder="请选择排量">
              <el-option
                class="width80"
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="element">
          <p class="inline">款型</p>
          <div class="inline">
             <el-select v-model="brand" placeholder="请选择款型">
              <el-option
                class="width120"
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="element">
          <p class="inline">保险</p>
          <div class="inline">
             <el-select v-model="brand" placeholder="请选择保险">
              <el-option
                class="width120"
                v-for="item in options"
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
             <el-select v-model="brand" placeholder="请选择里程">
              <el-option
                class="width80"
                v-for="item in options"
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
              @change="fastChange($event,scope.row.is_featured)">
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
              @change="showChange($event,scope.row.is_show)">
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
            <el-button @click="edit(scope.row)" type="text" size="small" icon="el-icon-check">编辑</el-button>
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
import { carTypeUrl,categoryShowUrl,ERR_OK } from '@/api/index'
import searchCondition from 'components/searchCondition.vue'

export default {
  data() {
    return {
      brand:'',
      pageIndex: 1,
      pageSize: 6,
      total: 100,
      showPageTag: true,
      date: '',
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
    this.search();
  },
  filters: {
    getIs_fastBoolean(params) {
      // console.log(JSON.stringify(params))
      var is_fast = params['is_fast'];
      // console.log(is_fast,'--is_fast--')
      return (is_fast == 1 || is_fast == true) ?  '是' :'否'
    },
    getIs_showBoolean(params) {
      // console.log(JSON.stringify(params))
      var is_show = params['is_show'];
      // console.log(is_show,'--is_show--')
      return (is_show == 1 || is_show == true) ?  '是' :'否'
    }
  },
  methods: {
    fastChange() {},
    showChange(value,is_show){
      console.log(value,'--value--')
      console.log(is_show,'--is_show--')
      /*let that = this;
      var params = {
        store_id: sid,
        category_id: cid,
        is_show: value?0:1
      }
      var url = brandCategoryShowUrl;
      console.log(params,'--brandCategoryFastUrl--')
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
      });*/
    },
    search() {
      let that = this;
      var params = {
        store_id: that.store_id,
        offset: (that.pageIndex-1)*that.pageSize,
        limit: that.pageSize,
        sort:'desc'
      }
      var url = carTypeUrl;
      console.log(params,"params")
      this.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result,'--result--')
        if(result.status_code == ERR_OK){
          that.tableData = result.data.car;
          that.total = result.data.count;
          if(that.total<that.pageSize) {
            that.showPageTag = false;
          }
        }
      }).catch((err)=>{
        console.info(err);
      });
    },
    searchBtn() {
      this.searchLoading = true;
      console.log(this.brandName,'--brandName--')
    },
    clickSure() {
      console.log((this.date),"--date--")
    },
    handleMoreCommand(command) {
        console.log(this.multipleSelection,'--multipleSelection--');
        this.$message('click on item ' + command);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    edit(row) {
      this.$router.push('/commodityEdit?from=edit&id=' + row.id)
    },
    handleDeleteClick(row) {
      console.log(row);
      this.$confirm('此操作将删除此条消息, 是否继续?', '提示', {
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      console.log(val);
      this.search();
    }
  }
}
</script>


