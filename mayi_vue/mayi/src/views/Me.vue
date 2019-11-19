<template>
  <div id="me">
    <div class="metop">
      <div class="metopone" v-if="userinfo">
        <van-row class="row">
          <van-col span="14">
            <h3>欢迎来到皮皮虾</h3>
            <p>马上登录和大家一起嗨皮</p>
            <button>登录/注册</button>
          </van-col>
          <van-col span="10">
            <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
        </van-row>
      </div>
      <div class="metoptwo" v-else>
        <van-row class="row">
          <van-col span="7">
            <van-image
              round
              width="5rem"
              height="5rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
              @click="bottonimage"
            />
          </van-col>
          <van-col span="13   ">
            <span class="spanone">沫羽</span><br />
            <span class="spantwo">这是一个神秘的皮皮侠</span><br />
            <span class="spantheer">关注 0 粉丝 0 获赞 0</span><br />
          </van-col>
          <van-col span="4">
            <div class="homepage">个人主页</div>
          </van-col>
        </van-row>

        <div class="grids">
          <van-grid>
            <van-grid-item>
              <div class="gridone grid">
                <span class="span1">贴子</span><br />
                <span class="span2">我发布的</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div class="gridtwo grid">
                <span class="span1">评论</span><br />
                <span class="span2">我发出的</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div class="gridtheer grid">
                <span class="span1">插眼</span><br />
                <span class="span2">期待后续</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div class="gridfour grid">
                <span class="span1">收藏</span><br />
                <span class="span2">我的最爱</span>
              </div>
            </van-grid-item>
          </van-grid>
        </div>
      </div>

      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <van-image src="" class="swipeimage" />
        </van-swipe-item>
        <van-swipe-item>
          <van-image src="" class="swipeimage" />
        </van-swipe-item>
        <van-swipe-item>
          <van-image src="" class="swipeimage" />
        </van-swipe-item>
        <van-swipe-item>
          <van-image src="" class="swipeimage" />
        </van-swipe-item>
      </van-swipe>

      <div class="history">
        <span class="his">历史记录</span>
        <span><van-icon name="arrow"/></span>
      </div>
      <div class="Writing">
        <span class="his">创作中心</span>
        <span><van-icon name="arrow"/></span>
      </div>
    </div>
    <div class="topbottom">
      <div class="more">更多功能</div>
      <van-grid>
        <van-grid-item icon="browsing-history" text="神评鉴定" />
        <van-grid-item icon="photo-o" text="小说" />
        <van-grid-item icon="photo-o" text="皮皮游戏中心" />
        <van-grid-item icon="photo-o" text="小程序" />
        <van-grid-item icon="photo-o" text="皮皮商城" />
        <van-grid-item icon="photo-o" text="我的订单" />
        <van-grid-item icon="photo-o" text="小黑屋" />
        <van-grid-item icon="photo-o" text="意见反馈" />
        <van-grid-item icon="photo-o" text="设置" to="/set" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: false
    };
  },
  methods: {
    bottonimage() {
      this.$router.push("/meself");
    }
  }
};
</script>

<style lang="less" scoped>
#me {
  background-color: #f9f9f9;
}

#me .metop {
  margin-bottom: 3%;
  padding: 8% 3% 0 3%;
  position: relative;
  background-color: #ffffff;
}
#me .metop .metopone {
  position: relative;
  padding-bottom: 8%;
  margin-bottom: 6%;
}
#me .metop .metopone h3 {
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 4%;
  letter-spacing: 1px;
}

#me .metop .metopone p {
  font-size: 13px;
  color: #a9a9a9;
  font-weight: 600;
  margin: 5% 0;
}

#me .metop .metopone button {
  background-color: #f9516b;
  padding: 5% 15%;
  border: none;
  border-radius: 6px;
  letter-spacing: 2px;
  color: #ffffff;
  font-weight: 600;
  font-size: 17px;
  margin-top: 3%;
}

#me .metop .metopone .van-image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 44%;
  height: 85%;
}

#me .spanone {
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 3px;
}

#me .spantwo {
  font-size: 13px;
  font-weight: 600;
  color: #a9a9a9;
  letter-spacing: 1px;
}

#me .spantheer {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-top: 4%;
  display: inline-block;
}

#me .homepage {
  background-color: #f5f6fa;
  border: 1px solid transparent;
  font-size: 8%;
  letter-spacing: 1px;
  border-top-left-radius: 6em;
  border-bottom-left-radius: 6em;
  text-align: center;
  padding: 2%;
  position: absolute;
  right: 0;
  top: 16%;
}

#me .gridone {
  background-position: -14px -4px;
}

#me .gridtwo {
  background-position: -104px -4px;
}

#me .gridtheer {
  background-position: -18px -67px;
}

#me .gridfour {
  background-position: -100px -67px;
}

#me .grid {
  width: 100%;
  height: 100%;
  background-image: url("../../public/images/me/Snipaste_2019-11-18_16-07-17.png");
  border: 1px solid transparent;
  padding-left: 4%;
  padding-top: 3%;
  border-radius: 16%;
  box-shadow: 0px 3px 8px 0px #909090;
}
#me .grid .span1 {
  color: black;
  font-size: 18px;
  font-weight: 800;
  text-align: left;
  letter-spacing: 1px;
}

#me .grid .span2 {
  color: #a9a9a9;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: left;
}

#me .swipeimage {
  width: 100%;
  height: 100%;
  background-color: red;
}

#me .van-swipe {
  margin-top: 4%;
  margin-bottom: 3%;
}

.history,
.Writing {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 4% 0;
}

#me .his {
  color: #4e4e4e;
  font-weight: 600;
  font-size: 17px;
}

#me .topbottom {
  padding: 4% 3% 0 3%;
  position: relative;
  background-color: #ffffff;
}
#me .topbottom .more {
  color: #4e4e4e;
  font-weight: 600;
  font-size: 17px;
}
</style>
