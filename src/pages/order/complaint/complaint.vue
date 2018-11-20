<style lang="scss" scoped>
.apply{
  padding:12px 20px;
  background-color: white;
  .breadcrumbWrapper{
    border: 1px solid #F3F2F2; 
    background-color: #F2F2F2;
    .breadcrumb{
      margin-left: 18px;
      height: 40px;
      line-height: 40px;
    }
    .iconhomestyle{
      float: left;
      font-size: 20px !important;
    }
    .nocurrent{
      color: #9c9c9c;
    }
  }
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
    .tableBottom{
      margin-top: 20px;
      text-align: center;
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
          <el-breadcrumb-item><span>举报管理</span></el-breadcrumb-item>
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
        <el-select class="status" v-model="status" filterable placeholder="状态">
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
          <el-button @click="clickSure">筛选</el-button>
        </div>
      </div>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
      @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="320"
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
        <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" :page-sizes="[10,12,14,16]" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
    
  </div>
</template>
<script>
// import { format, getTime, getDateHM } from '../../../common/js/times'
// import { getLimiteText } from '../../../common/js/utils'
// import { cheCredit } from '@/api/index'

export default {
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      total: 100,
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
      status: '',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        age: 18,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        age: 19,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        age: 20,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        age: 21,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        age: 22,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        age: 23,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        age: 24,
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  created() {
    // this.getval();
  },
  filters: {
    getSubmitState(t) {
      return t === 1 ? '成功' : t === -1 ? '失败' : ''
    }
  },
  methods: {
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
      console.log(row);
    },
    handleDeleteClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(val);
      this.pageIndex = val;
      // this.getval()
    }
  }
}
</script>


