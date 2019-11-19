<template>
  <div class="home">
    <van-tabs v-model="active" sticky>
      <van-tab
        v-for="index in 8"
        :key="index"
        :title="'标签 ' + index"
        @change="current()"
      >
        内容 {{ index }}
      </van-tab>
      <div class="sousuo">
        <img src="../../public/images/home/sousuo.png" />
      </div>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ""
    };
  },
  methods: {
    current() {
      // console.log(active);
    }
  }
};
</script>

<style lang="less" scoped>
.van-tabs {
  padding-right: 14%;
}
.sousuo {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 12%;
  box-shadow: -10px 0px 10px #fff;
  // height: 5%;
  // background-color: #00f;
  padding-top: 2%;
}
</style>
