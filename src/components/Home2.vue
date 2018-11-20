<template>
  <div class="home2">
    <v-head :isShowHeaderMore="isShowHeaderMore"></v-head>
    <div class="contentWrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHead from './Header.vue'
import vFooter from './Footer.vue'
export default {
  data() {
    return {
      isShowHeaderMore: false
    }
  },
  created() {
  },
  methods: {
  },
  components: {
    vHead,vFooter
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/common.scss';
.home2 {
  font-size: 13px;
  background-color: white;
  @include extend();
  .contentWrapper{
    position: relative;
    background-color: white;
  }
}
</style>
