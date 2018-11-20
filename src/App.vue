<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
@import './common/scss/common';
#app{
  min-width: 1250px;
}
.el-breadcrumb {
  font-size: 13px !important;
}

.el-pager {
  li {
    &.active {
      border-color: $mainColor !important;
      background-color: $mainColor !important;
      color: #fff !important;
    }
  }
}

</style>
