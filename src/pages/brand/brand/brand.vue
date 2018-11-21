<style lang="scss" scoped>
.wrapper{
  padding:12px 20px;
  background-color: white;
  .operateTableBox{
    margin-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #F3F2F2;
    background-color: #F2F2F2;
    .functionBox{
      padding: 18px;
      .status{
        width: 120px;
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
          <el-breadcrumb-item><span>品牌列表</span></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="operateTableBox">
      <div class="functionBox">
        <!-- <el-button type="primary" @click="multiDelete">批量删除</el-button> -->
        <el-dropdown @command="handleMoreCommand">
          <el-button type="primary">
            批量操作<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="allDelete">批量删除</el-dropdown-item>
            <el-dropdown-item command="allOpen">批量开启</el-dropdown-item>
            <el-dropdown-item command="allHot">批量热门</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div style="width: 300px; float: right">
          <el-input placeholder="请输入品牌名称" v-model="brandName" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" :loading="searchLoading" @click="searchBtn"></el-button>
          </el-input>
        </div>
      </div>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
      @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="url"
          label="图标"
          width="80">
          <template slot-scope="scope">
            <img :src="scope.row.url" width="60">
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
          prop="pivot"
          label="是否显示在首页"
          width="140">
          <template slot-scope="scope">
            {{scope.row.pivot | getIs_fastBoolean}}
            <el-switch
              v-model="scope.row.pivot.is_fast"
              active-color="#409EFF"
              inactive-color="#c7c7c7"
              @change="fastChange($event,scope.row.pivot.store_id,scope.row.pivot.category_id)">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="pivot"
          label="是否显示"
          width="100">
          <template slot-scope="scope">
            {{scope.row.pivot | getIs_showBoolean}}
            <el-switch
              v-model="scope.row.pivot.is_show"
              active-color="#409EFF"
              inactive-color="#c7c7c7"
              @change="showChange($event,scope.row.pivot.store_id,scope.row.pivot.category_id)">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="添加时间"
          width="160">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleEditClick(scope.row)" type="text" size="small" icon="el-icon-check">编辑</el-button>
            <el-button @click="handleDeleteClick(scope.row)" type="text" size="small" icon="el-icon-close">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="tableBottom" v-show="showPageTag">
        <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" :page-sizes="[6,8]" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
    
  </div>
</template>
<script>
// import { format, getTime, getDateHM } from '../../../common/js/times'
// import { getLimiteText } from '../../../common/js/utils'
import { brandCategoryUrl,brandCategoryFastUrl,brandCategoryShowUrl,brandCategoryDeleteUrl,ERR_OK } from '@/api/index'

export default {
  data() {
    return {
      pageIndex: 1, // offset/10+1
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
      tableData: [
      {
        id: '',
        name: '',
        sort: '',
        pivot: [],
        created_at: ''
      }],
      multipleSelection: [],
      store_id:localStorage.getItem('_storeId')
    }
  },
  created() {
    this.getBrand();
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
    handleMoreCommand(command) {
      var that = this;
      switch (command) {
        case 'allDelete':
          console.log('delete')
          that.multiDelete();
          break;
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
        category_id: JSON.stringify(selections),
        is_fast: 0
      }
      var url = brandCategoryFastUrl;
      console.log(params,'--brandCategoryFastUrl--')
      that.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--res.status_code--')
        if(result.status_code == ERR_OK){
          console.log(result);
          that.getBrand();
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
        category_id: JSON.stringify(selections),
        is_show: 0
      }
      var url = brandCategoryShowUrl;
      console.log(params,'--brandCategoryFastUrl--')
      that.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--res.status_code--')
        if(result.status_code == ERR_OK){
          console.log(result);
          that.getBrand();
        }
      }).catch((err)=>{
        that.$message({
          type: 'info',
          message: '系统出错了'
        }); 
      });
    },
    multiDelete(){
      let that = this;
      var selections = [];
      console.log(that.multipleSelection,'-=-=-=-=-')
      if(that.multipleSelection.length==0){
        that.$message('请先选择所要删除的品牌');
        return;
      }
      that.multipleSelection.forEach(function(item){
        selections.push(item.id)
      })
      that.$confirm('此操作将批量删除所选数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var params = {
          store_id: that.store_id,
          category_id: JSON.stringify(selections)
        }
        var url = brandCategoryDeleteUrl;
        console.log(params,'--params--')
        that.$axios.post(url,params).then((res)=>{
          var result = res.data;
          console.log(result.status_code,'--res.status_code--')
          if(result.status_code == ERR_OK){
            // that.tableData = result.data;
            that.getBrand();
            that.$message({
              type: 'success',
              message: '删除成功!'
            });    
          }
        }).catch((err)=>{
          that.$message({
            type: 'info',
            message: '系统出错了'
          });  
        });
      }).catch(() => {
        that.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    showChange(value,sid,cid){
      console.log(value,'--changeShow brandCategoryShowUrl--')
      let that = this;
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
      });
    },
    fastChange(value,sid,cid){
      console.log(value,'--changeFast brandCategoryFastUrl--')
      let that = this;
      var params = {
        store_id: sid,
        category_id: cid,
        is_fast: value?0:1
      }
      var url = brandCategoryFastUrl;
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
      });
    },
    getBrand() {
      let that = this;
      var params = {
        store_id: this.store_id,
        offset: (that.pageIndex-1)*that.pageSize,
        limit: that.pageSize,
      }
      var url = brandCategoryUrl;
      console.log(params,"params")
      this.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--res.status_code--')
        if(result.status_code == ERR_OK){
          that.tableData = result.data.category;
          for(var i=0;i<that.tableData.length;i++){
            if(that.tableData[i].pivot.is_fast==1){
              that.tableData[i].pivot.is_fast = true
            }
            if(that.tableData[i].pivot.is_show==1){
              that.tableData[i].pivot.is_show = true
            }
          }
          that.total = result.data.count;
          if(that.total<that.pageSize) {
            that.showPageTag = false;
          }else{
            that.showPageTag = true;
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
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val,'multipleSelection')
    },
    handleEditClick(row) {
      this.$router.push('/brandEdit')
    },
    handleDeleteClick(row) {
      let that = this;
      this.$confirm('此操作将删除此条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var params = {
          store_id: row.pivot.store_id,
          category_id: row.pivot.category_id
        }
        var url = brandCategoryDeleteUrl;
        console.log(params,'--params--')
        that.$axios.post(url,params).then((res)=>{
          var result = res.data;
          console.log(result.status_code,'--res.status_code--')
          if(result.status_code == ERR_OK){
            // that.tableData = result.data;
            that.getBrand();
            that.$message({
              type: 'success',
              message: '删除成功!'
            });    
          }
        }).catch((err)=>{
          that.$message({
            type: 'info',
            message: '系统出错了'
          });
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
      this.getBrand();
    },
    handleCurrentChange(val) {
      console.log(val);
      this.pageIndex = val;
      this.getBrand();
    }
  }
}
</script>


