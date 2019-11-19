<template>
  <div id="meself">
    <div class="header">
      <van-nav-bar title="沫羽" left-arrow @click-left="onClickLeft" />
      <van-row>
        <van-col span="7">
          <van-image
            round
            width="5rem"
            height="5rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            to="/meself"
          />
        </van-col>
        <van-col span="17">
          <van-row>
            <van-row>
              <van-col span="6">0</van-col>
              <van-col span="6">0</van-col>
              <van-col span="6">0</van-col>
              <van-col span="6">24</van-col>
            </van-row>
            <van-row class="rowtwo">
              <van-col span="6">获赞</van-col>
              <van-col span="6">粉丝</van-col>
              <van-col span="6">关注</van-col>
              <van-col span="6">积分</van-col>
            </van-row>
            <button>编辑资料</button>
          </van-row>
        </van-col>
      </van-row>

      <p>这是一个神秘的皮皮侠</p>
      <van-tag round type="primary">宿迁</van-tag>
    </div>
    <van-tabs v-model="activeName" :animated="true" :swipeable="true">
      <van-tab title="全部" name="a">现在不发贴，光看别人火</van-tab>
      <van-tab title="帖子" name="b">现在不发贴，光看别人火</van-tab>
      <van-tab title="评论" name="c">下一条神评就是你,快去评论吧！</van-tab>
      <van-tab title="插眼" name="d">给帖子插个眼,不错过精彩评论</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "a"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
#meself .header {
  padding: 5% 2%;
  border-bottom: 1px solid #a9a9a9;
}
#meself .header .van-nav-bar {
  margin-bottom: 4%;
}

#meself .header .van-nav-bar .van-ellipsis {
  font-weight: 900;
  font-size: 18px;
}

#meself .header .van-row .van-col {
  text-align: center;
}
#meself .header .rowtwo .van-col {
  font-size: 14px;
  font-weight: bold;
  margin-top: 2%;
}

#meself .header button {
  color: #f9516b;
  border: 1px solid #f9516b;
  border-radius: 5px;
  background-color: #fff;
  padding: 3% 30%;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 4%;
}

#meself .header p {
  letter-spacing: 1px;
}

#meself .van-tabs {
  padding: 0 6%;
}

#meself .van-tabs .van-ellipsis {
  font-weight: bold;
  font-size: 17px;
}

#meself .van-tabs .van-tabs__content {
  margin-top: 4%;
}
</style>
