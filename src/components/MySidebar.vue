<template>
  <div class="sidebar" :data-role="role">
    <el-menu :default-active="onRoutes" :active-text-color="activeColor" class="el-menu-vertical-demo menu" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index" class="borderTopParent">
            <template slot="title">
              <i><img :src="item.icon" class="titleIcon">
                <span class="titleText">{{ item.title }}</span>
              </i>
            </template>
            <el-menu-item class="child" v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
              <div class="text">{{ subItem.title }}</div>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :title="item.title" :key="item.index">
            <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeColor: '#b1b1b1',
      role: '',
      titles: [],
      items: [{
        icon: 'http://static.hpbanking.com/xg/uploads/files/ab54e5fe5dd354bc251e3b8002f72555-18-18.png',
        index: 'apply',
        title: '臻商分管理',
        subs: [
          {
            index: 'apply',
            title: '自评历程'
          },
          {
            index: 'apply',
            title: '提额历程'
          },
          {
            index: 'apply',
            title: '统计分析'
          }
        ]
      }
      ]
    }
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {},
  mounted() {
    // this.role = sessionStorage.getItem('role')
    // console.log('role:' + sessionStorage.getItem('role'))
  }
}
</script>
<style lang="scss">
</style>
