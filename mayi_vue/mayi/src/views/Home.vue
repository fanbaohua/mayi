<template>
  <div class="home">
    <van-tabs
      v-model="activeName"
      title-active-color="#ff00ff"
      @change="currentes(activeName)"
      sticky
      :swipeable="true"
    >
      <div class="sousuo" @click="sousuo">
        <img src="../../public/images/home/sousuo.png" />
      </div>
      <van-tab
        v-for="(item, index) in titles"
        :key="index"
        :title="item"
        :name="index"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="(item, index) in list" :key="index">
            <van-row>
              <van-col span="4">
                <van-image
                  round
                  width="2rem"
                  height="2rem"
                  :src="item.user_topimage"
                />
              </van-col>
              <van-col span="14">{{ item.user_name }}</van-col>
              <van-col span="6">
                <div class="dropdown" @click="menu($event)">
                  <img
                    v-if="topbottom"
                    src="../../public/images/home/bottom.png"
                  />
                  <img v-else src="../../public/images/home/top.png" />
                </div>
              </van-col>
              <div class="xiala" style="display: none;">
                <p @click="showPopup()">
                  <img src="../../public/images/home/noloke.png" alt />
                  <span>不感兴趣</span>
                </p>
                <van-divider />
                <p @click="showPopupes()">
                  <img src="../../public/images/home/notou.png" alt />
                  <span>屏蔽作者：{{ item.user_name }}</span>
                </p>
                <van-divider />
                <p @click="showPopup()">
                  <img src="../../public/images/home/chongfu.png" alt />
                  <span>内容重复</span>
                </p>
                <van-divider />
                <p @click="showPopup()">
                  <img src="../../public/images/home/no.png" alt />
                  <span>内容引起不适</span>
                </p>
              </div>
            </van-row>
            <!-- 减少此类推荐 -->
            <van-popup
              :overlay="false"
              :round="true"
              v-model="recommander"
              class="recommander"
              >减少此类推荐</van-popup
            >
            <van-popup
              :overlay="false"
              :round="true"
              v-model="shield"
              class="recommander shield"
              >已屏蔽 {{ item.user_name }}
            </van-popup>
            <!-- 内容 -->
            <div>
              <!--  -->
              <div v-if="item.pro_classes == '1'">
                <p>{{ item.pro_title }}</p>
                <div>
                  <video-player
                    class="video-player"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions"
                  ></video-player>
                </div>
              </div>
              <div v-if="item.pro_classes == '2'">
                <p>{{ item.pro_title }}</p>
                <div>
                  {{ item.pro_text }}
                </div>
              </div>
              <div class="zan">
                <van-row>
                  <van-col span="6">
                    <img
                      v-show="zan == true"
                      @click="uptcondition($event, item.id, index)"
                      class="dianzan qian"
                      style="display: '';"
                      src="../../public/images/home/zan.png"
                    />
                    <img
                      v-show="zan == false"
                      @click="uptcondition($event, item.id, index)"
                      class="dianzan hou"
                      src="../../public/images/home/yizan.png"
                    />
                    <span>{{ item.likenum }}</span>
                  </van-col>
                  <van-col span="6">
                    <img
                      @click="uptconditiones($event, item.id)"
                      class="qian"
                      v-show="cai == false"
                      src="../../public/images/home/cai.png"
                    />
                    <img
                      @click="uptconditiones($event, item.id)"
                      v-show="cai == true"
                      class="hou"
                      src="../../public/images/home/yicai.png"
                    />
                    <span>踩</span>
                  </van-col>
                  <van-col span="6" @click="comments">
                    <img src="../../public/images/home/liaotian.png" alt />
                    <span>6879</span>
                  </van-col>
                  <van-col span="6">
                    <img
                      class="fengxiang"
                      src="../../public/images/home/fengxiang.png"
                    />
                    <span>234</span>
                  </van-col>
                </van-row>
              </div>
            </div>
          </van-cell>
        </van-list>
      </van-tab>
      <van-tab disabled></van-tab>
      <van-overlay :show="show" @click="hides" />
    </van-tabs>
  </div>
</template>

<script>
// ../../public/video/11hwavm.mp4
import $ from "jquery";
// import "video.js/dist/video-js.css";

// import { videoPlayer } from "vue-video-player";
export default {
  data() {
    return {
      activeName: 1,
      titles: ["关注", "推荐", "图片", "视频", "文字", "游戏", "汽车"],
      list: [],
      recommander: false,
      shield: false,
      topbottom: true,
      likenumes: "",
      loading: false,
      finished: false,
      show: false,
      zhezhao: false,
      a: 0,
      zan: true,
      cai: false,
      playerOptions: {
        autoplay: false, //如果true,浏览器准备好时开始回放。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            type: "", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src:
              "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" //url地址
          }
        ],
        poster:
          "//s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        // notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  created() {
    this.getlist();
  },
  mounted() {},
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  components: {},
  methods: {
    comments() {
      this.$router.push("/comments");
    },
    getlist(classes) {
      this.$http.get("/home", { params: { class: classes } }).then(res => {
        this.list = res.data.data;
        console.log(this.list);
      });
    },
    // 赞
    uptcondition(e, id, index) {
      if ($(e.target).attr("class") == "dianzan qian") {
        $(e.target).css("display", "none");
        $(e.currentTarget.nextElementSibling).css("display", "");
        this.$http.post("/home/addzan", { id: id, deladd: 0 }).then(res => {
          console.log(res);
          if (res.data.ok == 1) {
            this.list[index].likenum++;
            console.log(this.list[index]);
          }
        });
      } else if ($(e.target).attr("class") == "dianzan hou") {
        // this.zan = true;
        $(e.target).css("display", "none");
        $(e.currentTarget.previousElementSibling).css("display", "");
        this.$http.post("/home/addzan", { id: id, deladd: 1 }).then(res => {
          console.log(this.list[index], index);
          if (res.data.ok == 1) {
            this.list[index].likenum--;
            console.log(this.list[index]);
          }
        });
      }
    },
    // 踩
    uptconditiones(e, id) {
      console.log($(e.target).attr("class"), id);
      if ($(e.target).attr("class") == "qian") {
        $(e.target).css("display", "none");
        $(e.currentTarget.nextElementSibling).css("display", "");
        // this.$http.post("/home/cai", { id: id, deladd: 0 }).then(res => {
        //   console.log(res);
        //   if (res.data.ok == 1) {
        //     console.log("成功");
        //   }
        // });
      } else if ($(e.target).attr("class") == "hou") {
        $(e.target).css("display", "none");
        $(e.currentTarget.previousElementSibling).css("display", "");
        // this.$http.post("/home/cai", { id: id, deladd: 1 }).then(res => {
        //   console.log(res);
        //   if (res.data.ok == 1) {
        //     console.log("成功");
        //   }
        // });
      }
    },
    currentes() {
      setTimeout(function() {
        $(".van-tab--active")
          .css("font-size", "16px")
          .siblings(".van-tab")
          .css("font-size", "12px");
      }, 5);
      if (this.activeName == 3) {
        this.getlist(1);
      } else if (this.activeName == 4) {
        this.getlist(2);
      } else {
        this.getlist();
      }
    },
    showPopup() {
      $(".recommander").css("display", "block");
      this.recommander = true;
      setTimeout(function() {
        $(".recommander").css("display", "none");
        this.recommander = false;
      }, 1000);
      this.hides();
    },
    showPopupes() {
      console.log(1234);
      $(".shield").css("display", "block");
      this.shield = true;
      setTimeout(function() {
        $(".shield").css("display", "none");
        this.shield = false;
      }, 1000);
      this.hides();
    },
    menu(e) {
      this.show = true;
      $(".van-overlay").css("z-index", "6");
      if (
        $(e.currentTarget.parentElement.nextElementSibling).css("display") !=
        "none"
      ) {
        $(e.currentTarget.parentElement.nextElementSibling).hide(500);
      } else {
        $(e.currentTarget.parentElement.nextElementSibling).show(500);
      }
    },
    hides() {
      this.show = false;
      $(".xiala").hide(500);
    },
    sousuo() {
      this.$router.push("/search");
    },
    onLoad() {
      if (this.activeName == 3) {
        this.getlist(1);
      } else if (this.activeName == 4) {
        this.getlist(2);
      } else {
        this.getlist();
      }
      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.list.length == "") {
        this.finished = true;
      }
    }
  }
};
</script>

<style lang="less">
.van-tabs {
  position: relative;
}
.van-cell p {
  margin-top: 0;
}
.sousuo {
  position: fixed;
  top: 0px;
  right: 0px;
  width: 12%;
  box-shadow: -10px 0px 10px #fff;
  // height: 5%;
  background-color: #ffffff;
  z-index: 5;
  height: 44px;
}
.sousuo img {
  width: 65%;
  margin-top: 10px;
}
.parting {
  height: 20px;
  background-color: #ccc;
}
.van-list .van-cell {
  border-top: 5px solid #cccccc;
}
.dropdown {
  float: right;
}
.xiala {
  position: absolute;
  top: 20px;
  width: 93%;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 0 10px 0 10px;
  z-index: 9;
}
.xiala img {
  width: 7%;
  position: relative;
  top: 5px;
}
.xiala p {
  margin: 10px 0 10px 0;
}
.xiala span {
  display: inline;
  margin-left: 1rem;
}
.van-divider {
  margin: 0;
}
.video-player .video-js .vjs-big-play-button {
  top: 36%;
  left: 42%;
  width: 3rem;
  border-radius: 4rem;
}
.video-js .vjs-icon-placeholder {
  width: 100%;
  height: 100%;
  display: block;
}
.zan {
  margin-top: 10px;
}
.zan img {
  width: 22%;
  position: relative;
  top: 5px;
}
.zan span {
  margin-left: 0.5rem;
  font-size: 12px;
}
.zan .dianzan {
  top: 1px;
}
.zan .fengxiang {
  top: 3px;
}
.van-col--14 {
  margin-top: 5px;
}
.van-cell .recommander {
  width: 50%;
  background-color: #000000;
  text-align: center;
  color: #fff;
  opacity: 0.5;
  padding: 10px;
}
.van-tab {
  margin-bottom: 10%;
}
</style>
