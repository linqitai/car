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
          <el-breadcrumb-item><span class="nocurrent">内容管理</span></el-breadcrumb-item>
          <el-breadcrumb-item><span>预约卖车</span></el-breadcrumb-item>
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
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div class="block right">
          <el-date-picker
            v-model="date"
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
          <template slot-scope="scope">{{ scope.row.created_at | getDate }}</template>
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
          width="160"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="describe"
          label="咨询描述"
          width="160"
          show-overflow-tooltip>
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
import { sellCarUrl,ERR_OK } from '@/api/index'
import { getFullDate } from '@/common/js/utils'

export default {
  data() {
    return {
      pageIndex: 1,
      pageSize: 8,
      total: 0,
      showPageTag: true,
      date: '',
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
    }
  },
  methods: {
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
        status: that.statusId
      }
      var url = sellCarUrl;
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
      console.log((this.date),"--date--")
    },
    handleMoreCommand(command) {
        console.log(this.multipleSelection,'--multipleSelection--');
        this.$message('click on item ' + command);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleAffirmClick(row) {
      console.log(row.age);
      this.$confirm('此操作将确认此条消息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '确认成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消确认'
        });          
      });
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
      console.log(val);
      this.pageIndex = val;
      this.getBrand()
    }
  }
}
</script>


