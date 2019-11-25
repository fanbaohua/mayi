<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
    <van-tabbar
      v-model="active"
      :touter="true"
      active-color="#7d7e80"
      @change="abc(active)"
    >
      <van-tabbar-item :icon="iconna" to="/">首页</van-tabbar-item>
      <van-tabbar-item :icon="iconnb" to="/found">发现</van-tabbar-item>
      <div class="divc">+</div>
      <van-tabbar-item :icon="iconnc" to="/information">消息</van-tabbar-item>
      <van-tabbar-item :icon="iconnd" to="/me">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      iconna: "wap-home-o",
      iconnb: "search",
      iconnc: "more-o",
      iconnd: "user-circle-o",
      transitionName: ""
    };
  },
  methods: {
    abc(active) {
      sessionStorage.setItem("active", active);
      if (active == "0") {
        this.iconna = "wap-home";
        this.iconnb = "search";
        this.iconnc = "more-o";
        this.iconnd = "user-circle-o";
      } else if (active == "1") {
        this.iconna = "wap-home-o";
        this.iconnb = "fire";
        this.iconnc = "more-o";
        this.iconnd = "user-circle-o";
      } else if (active == "2") {
        this.iconna = "wap-home-o";
        this.iconnb = "fire-o";
        this.iconnc = "more";
        this.iconnd = "user-circle-o";
      } else {
        this.iconna = "wap-home-o";
        this.iconnb = "fire-o";
        this.iconnc = "more-o";
        this.iconnd = "manager";
      }
    }
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      console.log(to, from, to.meta.index);
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.path == "/comments") {
        //设置动画名称
        this.transitionName = "slide-left";
      }
    }
  }
};
</script>

<style>
.divc {
  width: 12%;
  height: 63%;
  background-color: #f9516b;
  color: #fff;
  border-radius: 6px;
  text-align: center;
  line-height: 75%;
  font-size: 35px;
  font-weight: bold;
  margin: auto;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.5s;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
