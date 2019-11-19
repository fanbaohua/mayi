<template>
  <div class="home">
    <van-tabs
      v-model="activeName"
      title-active-color="#ff00ff"
      @change="currentes()"
      sticky
      :swipeable="true"
    >
      <div class="sousuo">
        <img src="../../public/images/home/sousuo.png" />
      </div>
      <van-tab
        v-for="(item, index) in titles"
        :key="index"
        :title="item"
        :name="item"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item">
            <van-row>
              <van-col span="4">
                <van-image
                  round
                  width="2rem"
                  height="2rem"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
              </van-col>
              <van-col span="14">放假啊司法考试的经历</van-col>
              <van-col span="6">
                <div class="dropdown" @click="menu()">
                  <img src="../../public/images/home/bottom.png" />
                </div>
                <van-dialog v-model="show" title="标题" show-cancel-button>
                  <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
                </van-dialog>
              </van-col>
            </van-row>
          </van-cell>
        </van-list>
      </van-tab>
      <van-tab disabled></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      activeName: "推荐",
      titles: ["关注", "推荐", "图片", "视频", "文字", "游戏", "汽车"],
      list: [],
      loading: false,
      finished: false,
      show: false
    };
  },
  created() {
    console.log($(".van-tab--active"));
    setTimeout(function() {
      $(".van-tab--active")
        .css("font-size", "16px")
        .siblings(".van-tab")
        .css("font-size", "12px");
    }, 100);
  },
  methods: {
    currentes() {
      setTimeout(function() {
        $(".van-tab--active")
          .css("font-size", "16px")
          .siblings(".van-tab")
          .css("font-size", "12px");
      }, 50);
      console.log($(".van-tab--active"));
    },
    menu() {
      console.log(1234);
    },
    onLoad() {
      for (let i = 0; i < 10; i++) {
        this.list.push(this.list.length + 1);
      }
      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.list.length >= 40) {
        this.finished = true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.van-tabs {
  position: relative;
}
.sousuo {
  position: fixed;
  top: 0px;
  right: 0px;
  width: 12%;
  box-shadow: -10px 0px 10px #fff;
  // height: 5%;
  background-color: #ffffff;
  padding-top: 3%;
  z-index: 999;
}
.sousuo img {
  width: 65%;
}
.van-tab--active .van-ellipsis {
  font-size: 20px;
}
.parting {
  height: 20px;
  background-color: #ccc;
}
.van-list .van-cell[data-v-fae5bece] {
  border-top: 5px solid #cccccc;
}
.dropdown {
  float: right;
}
</style>
