<template>
  <div id="app">
    <router-view />
    <van-tabbar
      v-model="active"
      :touter="true"
      active-color="#7d7e80"
      @change="abc(active)"
    >
      <van-tabbar-item :icon="iconna">首页</van-tabbar-item>
      <van-tabbar-item :icon="iconnb">发现</van-tabbar-item>
      <div class="divc">+</div>
      <van-tabbar-item :icon="iconnc">消息</van-tabbar-item>
      <van-tabbar-item :icon="iconnd">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      iconna: "wap-home",
      iconnb: "search",
      iconnc: "more-o",
      iconnd: "user-circle-o"
    };
  },
  methods: {
    abc(active) {
      window.console.log(active);
      if (active == 0) {
        this.iconna = "wap-home";
        this.iconnb = "search";
        this.iconnc = "more-o";
        this.iconnd = "user-circle-o";
      } else if (active == 1) {
        this.iconna = "wap-home-o";
        this.iconnb = "fire";
        this.iconnc = "more-o";
        this.iconnd = "user-circle-o";
      } else if (active == 2) {
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
</style>
