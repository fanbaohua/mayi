<template>
  <div id="meself">
    <div class="header">
      <van-nav-bar :title="name" left-arrow @click-left="onClickLeft" />
      <van-row>
        <van-col span="7">
          <van-image-preview v-model="show" :images="images">
          </van-image-preview>
          <van-image
            round
            width="5rem"
            height="5rem"
            :src="image"
            to="/meself"
            @click="showcli"
          >
          </van-image>
        </van-col>
        <van-col span="17">
          <van-row>
            <van-row>
              <van-col span="6">{{ likes }}</van-col>
              <van-col span="6">{{ focus }}</van-col>
              <van-col span="6">{{ fans }}</van-col>
              <van-col span="6">30</van-col>
            </van-row>
            <van-row class="rowtwo">
              <van-col span="6">获赞</van-col>
              <van-col span="6">粉丝</van-col>
              <van-col span="6">关注</van-col>
              <van-col span="6">积分</van-col>
            </van-row>
            <van-button to="/edit">编辑资料</van-button>
          </van-row>
        </van-col>
      </van-row>

      <p>{{ introduced }}</p>
      <van-tag round type="primary">{{ deindexss }}</van-tag>
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
      show: false,
      images: [],
      activeName: "a",
      likes: "",
      focus: "",
      fans: "",
      image: "",
      name: "",
      introduced: "",
      deindexss: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    showcli() {
      this.show = true;
    }
  },
  created() {
    this.likes = localStorage.getItem("likes");
    this.focus = localStorage.getItem("focus");
    this.fans = localStorage.getItem("fans");
    this.image = localStorage.getItem("image");
    this.name = localStorage.getItem("name");
    this.introduced = sessionStorage.getItem("introduced");
    this.deindexss = sessionStorage.getItem("deindexss");
    this.images.push(this.image);
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

#meself .header .van-button {
  padding: 0 30%;
  border: 1px solid #f9516b;
  background-color: #fff;
  color: #f9516b;
  border-radius: 6px;
  margin-top: 2%;
}

#meself .header .van-button .van-button__text {
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 17px;
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
