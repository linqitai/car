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
          <el-breadcrumb-item><span class="nocurrent">预约</span></el-breadcrumb-item>
          <el-breadcrumb-item><span class="nocurrent">预约管理</span></el-breadcrumb-item>
          <el-breadcrumb-item><span>预约买车</span></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="operateTableBox">
      <div class="functionBox">
        <el-dropdown @command="handleMoreCommand">
          <el-button type="primary">
            批量操作<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="deleteMore">批量删除</el-dropdown-item>
            <el-dropdown-item command="affirmMore">批量确认</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-select class="status" v-model="statusId" @change="statusChange" filterable placeholder="状态">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div class="block right">
          <el-date-picker
            v-model="hisTime"
            @change="dateChange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
          <el-button type="primary" @click="clickSure">筛选</el-button>
        </div>
      </div>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
      @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="日期"
          sortable
          width="120">
          <template slot-scope="scope">{{ scope.row.created_at | getDate}}</template>
        </el-table-column>
        <el-table-column
          prop="user.nickname"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="电话"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="car.area"
          label="地区"
          width="100"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="car.name"
          label="咨询汽车"
          width="100"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="car.status"
          label="状态"
          width="100">
          <template slot-scope="scope"><label :class="[scope.row.status==1?'blue':scope.row.status==2?'green':'']">{{scope.row.status|status}}</label></template>
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleAffirmClick(scope.row)" type="text" size="small" icon="el-icon-check">确认</el-button>
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
import { buyCarUrl,buyDeleteUrl,sellDeleteUrl,buySureUrl,ERR_OK } from '@/api/index'
import { getFullDate } from '@/common/js/utils'
export default {
  data() {
    return {
      pageIndex: 1,
      pageSize: 8,
      total: 0,
      showPageTag: true,
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
    this.getBrand();
  },
  filters: {
    getDate(t) {
      return getFullDate(t);
    },
    status(t) {
      return t==1?"待处理":t==2?"已处理":t==3?"垃圾篓":"";
    }
  },
  methods: {
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
    statusChange(value){
      console.log(value,"----statusChange-------")
      this.statusId = value;
      this.getBrand();
    },
    getBrand() {
      let that = this;
      var params = {
        store_id: this.store_id,
        offset: (that.pageIndex-1)*that.pageSize,
        limit: that.pageSize,
        status: that.statusId,
        time: JSON.stringify(that.time)
      }
      var url = buyCarUrl;
      console.log(params,"params")
      this.$axios.post(url,params).then((res)=>{
        var result = res.data.data.list;
        that.tableData = result;
        that.total = res.data.data.count;
        console.log(that.total)
        if(that.total<that.pageSize) {
          that.showPageTag = false;
        }else{
          that.showPageTag = true;
        }
      }).catch((err)=>{
        console.info(err);
      });
    },
    clickSure() {
      console.log((this.time),"--time--");
      this.getBrand();
    },
    handleMoreCommand(command) {
      var that = this;
      console.log(this.multipleSelection,'--multipleSelection--');
      if(command == "deleteMore"){
        var ids = [];
        for (var i = this.multipleSelection.length - 1; i >= 0; i--) {
          ids.push(this.multipleSelection[i].id);
        }
        var params = {
          store_id: that.store_id,
          buy_id: JSON.stringify(ids)
        }
        var url = buyDeleteUrl;
        console.log(params,"--================params=============--");
        that.$axios.post(url,params).then((res)=>{
          var result = res.data;
          console.log(result.status_code,'--res.status_code--')
          if(result.status_code == ERR_OK){
            // that.tableData = result.data;
            that.$message({
              type: 'success',
              message: '删除成功!'
            });   
            that.getBrand(); 
          }
        }).catch((err)=>{
          that.$message({
            type: 'info',
            message: '系统出错了'
          });
        });
      }else if(command == "affirmMore") {
        var ids = [];
        for (var i = this.multipleSelection.length - 1; i >= 0; i--) {
          ids.push(this.multipleSelection[i].id);
        }
        var params = {
          store_id: that.store_id,
          buy_id: JSON.stringify(ids)
        }
        var url = buySureUrl;
        console.log(params,'--================params=============--')
        that.$axios.post(url,params).then((res)=>{
          var result = res.data;
          console.log(result.status_code,'--res.status_code--')
          if(result.status_code == ERR_OK){
            // that.tableData = result.data;
            this.$message({
              type: 'success',
              message: '确认成功!'
            });
            that.getBrand(); 
          }
        }).catch((err)=>{
          that.$message({
            type: 'info',
            message: '系统出错了'
          });
        });
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
    },
    handleAffirmClick(row) {
      var that = this;
      this.$confirm('此操作将确认此条消息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        var ids = [];
        ids.push(row.id);
        var params = {
          store_id: that.store_id,
          buy_id: JSON.stringify(ids)
        }
        var url = buySureUrl;
        console.log(params,'--================params=============--')
        that.$axios.post(url,params).then((res)=>{
          var result = res.data;
          console.log(result.status_code,'--res.status_code--')
          if(result.status_code == ERR_OK){
            // that.tableData = result.data;
            this.$message({
              type: 'success',
              message: '确认成功!'
            });
            that.getBrand(); 
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
          message: '已取消确认'
        });          
      });
    },
    handleDeleteClick(row) {
      var id = row.id;
      console.log(id,"id")
      var that = this;
      that.$confirm('此操作将删除此条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var ids = [];
        ids.push(id);
        var params = {
          store_id: that.store_id,
          buy_id: JSON.stringify(ids)
        }
        var url = buyDeleteUrl;
        that.$axios.post(url,params).then((res)=>{
          var result = res.data;
          console.log(result.status_code,'--res.status_code--')
          if(result.status_code == ERR_OK){
            // that.tableData = result.data;
            that.$message({
              type: 'success',
              message: '删除成功!'
            });   
            that.getBrand(); 
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
    deleteData(id){
      console.log(id,"----------id---------")
      var ids = [];
      ids.push(id);
      console.log(ids,"----------ids---------")
      var params = {
        store_id: that.store_id,
        buy_id: JSON.stringify(ids)
      }
      console.log(params,"--================params=============--");
      console.log(id,"----------id3---------")
      var url = buyDeleteUrl;
      console.log(params,"--================params=============--");
      that.$axios.post(url,params).then((res)=>{
        var result = res.data;
        console.log(result.status_code,'--res.status_code--')
        if(result.status_code == ERR_OK){
          // that.tableData = result.data;
          that.$message({
            type: 'success',
            message: '删除成功!'
          });   
          that.getBrand(); 
        }
      }).catch((err)=>{
        that.$message({
          type: 'info',
          message: '系统出错了'
        });
      });
    }
  }
}
</script>


