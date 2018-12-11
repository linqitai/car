<style lang="scss" scoped>
.apply{
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
  <div class="apply" ref="apply">
    <div class="breadcrumbWrapper">
      <div class="breadcrumb">
        <i class="iconfont icon-home iconhomestyle nocurrent"></i>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">
            <span class="nocurrent">首页</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item><span class="nocurrent">门店</span></el-breadcrumb-item>
          <el-breadcrumb-item><span class="nocurrent">门店管理</span></el-breadcrumb-item>
          <el-breadcrumb-item><span>门店列表</span></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="operateTableBox">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column
          prop="id"
          label="id"
          sortable
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="店名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="联系电话"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="200"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="default" label="是否默认" width="100">
          <template slot-scope="scope">
            {{scope.row.is_default | getIs_defaultBoolean}}
            <el-switch
              v-model="scope.row.is_default"
              active-color="#409EFF"
              inactive-color="#c7c7c7"
              @change="is_defaultChange($event,scope.row.id)">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="img_url"
          label="封面"
          width="100">
          <template slot-scope="scope">
            <img :src="scope.row.img_url" width="60">
          </template>
        </el-table-column>
        <el-table-column
          prop="logo"
          label="logo"
          width="100">
          <template slot-scope="scope">
            <img :src="scope.row.logo" width="60">
          </template>
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleEditClick(scope.row)" type="text" size="small" icon="el-icon-check">编辑</el-button>
            <el-button @click="handleDeleteClick(scope.row)" type="text" size="small" icon="el-icon-close">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="tableBottom" v-show="showPageTag">
        <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" :page-sizes="[6,8,10]" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
    
  </div>
</template>
<script>
import { shopUrl,buyDeleteUrl,sellDeleteUrl,buySureUrl,shopDeleteEdiUrl,shopDefaultEdiUrl,ERR_OK } from '@/api/index'
import { getFullDate } from '@/common/js/utils'
export default {
  data() {
    return {
      pageIndex: 1,
      pageSize: 8,
      total: 0,
      showPageTag: false,
      hisTime:'',
      time: [],
      statusOptions: [{
        value: '1',
        label: '待处理'
      }, {
        value: '2',
        label: '已处理'
      }, {
        value: '3',
        label: '垃圾篓'
      }],
      statusId: '',
      tableData: [],
      multipleSelection: [],
      store_id:localStorage.getItem('_storeId')
    }
  },
  created() {
    this.getList();
  },
  filters: {
    getDate(t) {
      return getFullDate(t);
    },
    status(t) {
      return t==1?"待处理":t==2?"已处理":t==3?"垃圾篓":"";
    },
    getIs_defaultBoolean(value){
      var is_default = value;
      return (is_default == 1 || is_default == true) ?  '是' :'否'
    }
  },
  methods: {
    is_defaultChange(value,id){
      console.log(value,'--value--')
      console.log(id,'--id--')
      let that = this;
      var ids = []
      ids.push(id)
      var params = {
        store_id: that.store_id,
        shop_id: id,
        is_default: value?0:1
      }
      var url = shopDefaultEdiUrl;
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
    handleDeleteClick(row){
      let that = this;
      this.$confirm('此操作将删除此条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var params = {
          store_id: that.store_id,
          shop_id: row.id
        }
        var url = shopDeleteEdiUrl;
        console.log(params,'--params--')
        that.$axios.post(url,params).then((res)=>{
          var result = res.data;
          console.log(result.status_code,'--res.status_code--')
          if(result.status_code == ERR_OK){
            // that.tableData = result.data;
            that.getList();
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
    handleEditClick(row) {
      var shopId = row.id;
      console.log(shopId,"shopId")
      this.$cookie.set("_shopId",shopId)
      this.$router.push('/storeEdit')
    },
    statusChange(value){
      console.log(value,"----statusChange-------")
      this.statusId = value;
      this.getList();
    },
    getList() {
      let that = this;
      var params = {
        store_id: this.store_id,
        offset: (that.pageIndex-1)*that.pageSize,
        limit: that.pageSize
      }
      var url = shopUrl;
      console.log(params,"params")
      this.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result,'--result--')
        if(result.status_code == ERR_OK){
          that.tableData = result.data;
          console.log(that.tableData,"that.tableData ")
          for(var i=0;i<that.tableData.length;i++){
            if(that.tableData[i].is_default==1){
              that.tableData[i].is_default = true
            }
          }
          // that.total = result.count;
          // if(that.total<that.pageSize) {
          //   that.showPageTag = false;
          // }
        }
      }).catch((err)=>{
        console.info(err);
      });
    },
    clickSure() {
      console.log((this.time),"--time--");
      this.getList();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      console.log(val);
      this.pageIndex = val;
      this.getList();
    }
  }
}
</script>


