<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <van-search slot="right" v-model="value" :placeholder="val" show-action>
      </van-search>
    </van-nav-bar>
    <van-tabs>
      <van-tab v-for="(item, index) in titles" :title="item" :key="index">
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
            </van-row>
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
              <div v-if="item.pro_classes == 2">
                <p>{{ item.pro_title }}</p>
                <div>
                  {{ item.pro_text }}
                </div>
              </div>
              <div v-if="a == 3">
                <p></p>
              </div>
              <div class="zan">
                <van-row>
                  <van-col span="6" offset="2">
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
                    <img src="../../public/images/home/liaotian.png" alt />
                    <span>6879</span>
                  </van-col>
                  <van-col span="6" offset="2">
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
    </van-tabs>
  </div>
</template>
<script>
import $ from "jquery";
import { mapState } from "vuex";
export default {
  data() {
    return {
      titles: ["关注", "推荐", "图片", "视频", "文字"],
      finished: false,
      loading: false,
      list: [],
      recommander: false,
      shield: false,
      topbottom: true,
      show: false,
      zhezhao: false,
      a: 0,
      value: "",
      zan: true,
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
  computed: {
    ...mapState(["val"])
  },
  created() {
    this.$http.post("/search", { val: this.val }).then(res => {
      if (res.data.ok == 1) {
        console.log(res);
        this.list = res.data.dataes;
      }
    });
  },
  methods: {
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
    onClickLeft() {
      this.$router.go(-1);
      console.log("返回");
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
<style lang="less">
.van-search__content,
.van-search__action {
  position: relative;
  top: 5px;
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
</style>
