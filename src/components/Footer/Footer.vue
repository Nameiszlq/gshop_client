<template>
  <!--底部导航-->
  <footer class="footer-base" v-if="true">          
                                               <!-- 跳转相应的路由加对应类名 -->
    <a href="javascript:;" class="footer-item" :class="{on:$route.path==='/'}" @click="goTo('/')">
      <i class="iconfont icon-shouye"></i>
      <span class="text">首页</span>
    </a>
    <a
      href="javascript:;"
      class="footer-item"
      :class="{on:$route.path==='/Classify'}"
      @click="goTo('/Classify')"
    >
      <i class="iconfont icon-fenlei"></i>
      <span class="text">分类</span>
    </a>
    <a
      href="javascript:;"
      class="footer-item"
      :class="{on:$route.path==='/General'}"
      @click="goTo('/General')"
    >
      <i class="iconfont icon-wupin"></i>
      <span class="text">识物</span>
    </a>
    <a
      href="javascript:;"
      class="footer-item"
      :class="{on:$route.path==='/Shop'}"
      @click="goTo('/Shop')"
    >
      <i class="iconfont icon-gouwuche"></i>
      <span class="text">购物车</span>
    </a>
    <a
      href="javascript:;"
      class="footer-item"
      :class="{on:$route.path==='/Person'}"
      @click="goTo('/Person')"
    >
      <i class="iconfont icon-geren"></i>
      <span class="text">个人</span>
    </a>
  </footer>
</template>

<script>
export default {
  components: {},
  computed: {},
  methods: {
    goTo(path) {
      this.$router.replace(path);
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
.footer-base {
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  .footer-item {
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    &.on {
      color: #b4282d;
    }
    .text {
      margin-top: 0.1rem;
      margin-bottom: 0.17rem;
      color: #666;
      font-size: 0.32rem;
    }

    .iconfont {
      margin-top: 0.17rem;
      font-size: 0.55rem;
    }
  }
}
</style>
