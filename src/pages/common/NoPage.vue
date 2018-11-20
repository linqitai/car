<style lang="scss" scoped>
.imgManageWrapper{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: #8A8A8C;
  .imgManage{
    width: 80%;
    height: 700px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    .title{
      padding-left: 16px;
      font-size: 17px;
      height: 50px;
      line-height: 54px;
      border-bottom:1px solid #c7c7c7;
    }
    .body{
      height: 649px;
      .bodyLeft{
        float: left;
        height: 100%;
        width: 240px;
        box-sizing: border-box;
        border-right: 1px solid #c7c7c7;
        font-size: 12px !important;
        ul.operate{
          box-sizing: border-box;
          display: flex;
          background-color:#F2F2F2;
          li{
            // flex: 1;
            width: 33.3%;
            text-align: center;
            float: left;
            .el-button--text{
              color: #323232;
            }
          }
        }
        .el-tree{
          margin:6px 6px;
        }
      }
      .bodyRight{
        float: right;
        width: 800px;
        height: 100%;
        box-sizing: border-box;
        padding: 14px 12px;
        .rightHeader{
          height: 40px;
          border-bottom: 1px solid #c7c7c7;
          box-sizing: border-box;
        }
        .control-label{
          float: left;
        }
        .help-block{
          float: left;
          color: #A8A8A8;
          vertical-align: bottom;
        }
        .addBox{
          position: relative;width: 118px;height: 118px;font-size: 14px;display: inline-block;padding: 10px;border: 2px dashed #ccc;text-align: center;vertical-align: middle;clear: both;float: left;
          .upload{position: absolute;top: 0;bottom: 0;left: 0;right: 0;width: 118px;height: 118px;opacity: 0;}
          .add{display: block;color:#c7c7c7;height: 94px;padding: 8px 0;
            .iconfont{padding: 10px 0;font-size: 80px;}
          }
        }
        .dragItem{
          width: 200px;
          height: 200px;
          margin-top:5px;
          margin-left: 5px;
          float: left;
          background: url("https://p0.ssl.qhimg.com/t01760fd9f7ddb265bb.png");
          background-repeat: no-repeat;
          background-position: center center;
        }
        /*.upload-imgs{font-size: 0; overflow: hidden;clear: both;padding-top: 12px;
          li{position: relative;width: 118px;height: 118px;font-size: 14px;display: inline-block;padding: 10px;margin-right: 25px;border: 2px dashed #ccc;text-align: center;vertical-align: middle;
            &:hover{border-color: #c7c7c7;
            }
            a>p{font-size: 16px;}
            .close{position:absolute;top: 2px;right: 3px;background-color:#C81111;width: 14px; height: 14px; border-radius:6px;text-align: center;color: white;cursor: pointer;
              &:hover{background-color:#9E0B0B;}
            }
          }
          .img{width: 100%;height: 100%; overflow: hidden; position:relative;
            img{margin-left: 50%;margin-top: 50%;transform: translate(-50%,-50%);}
          }
        }*/
      }
    }
  }
}
</style>
<template>
  <div class="imgManageWrapper">
    <div class="imgManage">
      <div class="title">图片管理</div>
      <div class="body">
        <div class="bodyLeft">
          <ul class="operate">
            <li><el-button type="text" icon="el-icon-plus" @click="openPrompt()">添加</el-button></li>
            <li><el-button type="text" icon="el-icon-edit" @click="rename(currentNode, treeData)">重命名</el-button></li>
            <li><el-button type="text" icon="el-icon-delete" @click="remove(currentNode, treeData)">删除</el-button></li>
          </ul>
          <el-tree
            :data="treeData"
            node-key="id"
            default-expand-all
            @node-drag-start="handleDragStart"
            @node-drag-enter="handleDragEnter"
            @node-drag-leave="handleDragLeave"
            @node-drag-over="handleDragOver"
            @node-drag-end="handleDragEnd"
            @node-drop="handleDrop"
            draggable
            :allow-drop="allowDrop"
            :allow-drag="allowDrag"
            @node-click="handleNodeClick">
          </el-tree>
        </div>
        <div class="bodyRight">
          <div class="form-group">
            <div class="control-label">上传图片</div>
            <div class="help-block">(建议图片格式为：JPEG/PNG，大小不超过5M)</div>
            <div>
              <div class="addBox">
                <input type="file" class="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/jpg"/>
                <a class="add"><i class="iconfont icon-plus"></i><p>点击上传</p></a>
              </div>
              ===========
              <draggable @update="datadragEnd" :options = "{animation:500}">
                <transition-group>
                  <div class="dragItem" v-for="(element,index) in imgs" :key="index">{{element.id}}</div>
                </transition-group>
              </draggable>
              =============
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
// import $ from 'jquery'
import draggable from 'vuedraggable'
export default{
  data(){
      return{
        imgs: [
          {
              id: 0,
              path: "https://p0.ssl.qhimg.com/t01760fd9f7ddb265bb.png",
          }, 
          {
              id: 1,
              path: "https://p0.ssl.qhimg.com/t01760fd9f7ddb265bb.png",
          }, 
          {
              id: 2,
              path: "https://p0.ssl.qhimg.com/t01760fd9f7ddb265bb.png",
          }, 
          {
              id: 3,
              path: "https://p0.ssl.qhimg.com/t01760fd9f7ddb265bb.png",
          }, 
          {
              id: 4,
              path: "https://p0.ssl.qhimg.com/t01760fd9f7ddb265bb.png",
          },
          {
              id: 5,
              path: "https://p0.ssl.qhimg.com/t01760fd9f7ddb265bb.png",
          }
        ],
        startArr:[],
        endArr:[],
        formData:new FormData(),
        imgs: {},
        currentNode:"",
        treeData: [{
          id: 1,
          label: '所有图片',
          children: [{
            id: 2,
            label: '未命名'
          },{
            id: 3,
            label: '我的图片'
          },{
            id: 4,
            label: '我的图片2'
          }]
        }]
      }
  },
  components: {
  　　draggable
  },
  methods:{
    addImg(e){
      let inputDOM = this.$refs.inputer;
      // 通过DOM取文件数据
      this.file = inputDOM.files;
      // this.imgs.push(items...: any)
    },
    getObjectURL(file) {
      var url = null ;
      if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
      } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
      } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
      }
      console.log(url,'--url--');
      return url ;
    },
    rename(node,data) {
      console.log(this.currentNode.data.id,'---id---');
      console.log(this.currentNode.data.label,'---label---');
      if(!node){
        this.$alert('请选择所要重命名的节点', '提示', {
          confirmButtonText: '确定'
        });
        return;
      }
      this.$prompt('请给['+ this.currentNode.data.label +']文件夹重命名：', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^[\u4e00-\u9fa5\w]{1,6}$/,
        inputErrorMessage: '请输入1~6位的文本长度'
      }).then(({ value }) => {
        const index = data[0].children.findIndex(d => d.id === node.data.id);
        this.treeData[0].children[index].label = value
        this.$message({
          type: 'success',
          message: '修改成功'
        });
      }).catch((e) => {
        this.$message({
          type: 'info',
          message: '已取消'
        });       
      });
    },
    openPrompt() {
      let that = this;
      this.$prompt('请给文件夹命名：', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^[\u4e00-\u9fa5\w]{1,6}$/,
        inputErrorMessage: '请输入1~6位的文本长度'
      }).then(({ value }) => {
        const newChild = { id: id++, label: value};
        that.treeData[0].children.push(newChild);
        this.$message({
          type: 'success',
          message: '新建的文件夹名是: ' + value
        });
      }).catch((e) => {
        this.$message({
          type: 'info',
          message: '已取消'
        });       
      });
    },
    remove(node, data) {
      if(!node){
        this.$alert('请选择所要删除的文件夹', '提示', {
          confirmButtonText: '确定'
        });
        return;
      }
      if(!node.parent.key){
        this.$alert('无法删除主文件夹', '提示', {
          confirmButtonText: '确定'
        });
        return;
      }
      this.$confirm('您确定要删除[' + node.data.label + ']文件夹？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === node.data.id);
        children.splice(index, 1);
        this.currentNode = '';
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
    handleNodeClick(data,node,p) {
      console.log(data);
      console.log(node.data.id,'---id---');
      console.log(node.data.label,'---label---');
      this.currentNode = node;
      // console.log(node.parent,'---parent---')
    },
    handleDragStart(node, ev) {
      console.log('drag start', node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.label, dropType);
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === '二级 3-1') {
        return type !== 'inner';
      } else {
        return true;
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
    },
    delImg(key){
      this.$delete(this.imgs,key);
      this.imgLen--;
    },
    submit(){
      console.log(this.imgs)
      for(let key in this.imgs){
        let name=key.split('?')[0];
        this.formData.append('multipartFiles',this.imgs[key],name);
      }
      console.log('formData')
      console.log(this.formData)
      // this.$http.post('/opinion/feedback', this.formData,{
      //   headers: {'Content-Type': 'multipart/form-data'}
      // }).then(res => {
      //   // this.alertShow=true;
      // });
    },
    datadragEnd (evt) {
      evt.preventDefault();
      console.log('拖动前的索引 :' + evt.oldIndex)
      console.log('拖动后的索引 :' + evt.newIndex)
    }
  },
  mounted () {
    //为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
    document.body.ondrop = function (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
</script>

