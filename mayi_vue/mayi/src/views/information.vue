<template>
  <div class="message">
    <van-dropdown-menu active-color="#ee0a24">
      <van-dropdown-item
        v-model="xlxz"
        :options="option"
        @change="pitchonnews"
      />
    </van-dropdown-menu>
    <!-- 全部消息 -->
    <div class="total" v-if="xlxz == 0">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
      >
        <div class="totalmessage" v-if="data">
          <!-- 插眼 -->
          <van-row v-for="(item, index) in data[0]" :key="index">
            <van-col span="5" class="tomeleft">
              <van-image
                round
                width="3rem"
                height="3rem"
                :src="item.user_topimage"
              />
            </van-col>
            <van-col span="14" class="tomcentre">
              <div class="guanzhutext">{{ item.user_name }}</div>
              <van-icon name="shop" />
              <div class="datatime">{{ item.liketime }}</div>
            </van-col>
            <van-col span="5" class="tomerigth">
              <div v-if="item.pro_classes == '视频吧'">
                <video
                  style="width= 100%; height=100%; object-fit:fill"
                  src="../../public/md4/xiaohuangren.mp4"
                ></video>
              </div>
              <div v-else-if="item.pro_classes == '文字帖'">
                <p>{{ item.pro_text }}</p>
              </div>
            </van-col>
          </van-row>

          <!-- 点赞 -->
          <van-row v-for="(itemb, indexb) in data[1]" :key="indexb + 1">
            <van-col span="5" class="tomeleft">
              <van-image
                round
                width="3rem"
                height="3rem"
                :src="itemb.user_topimage"
              />
            </van-col>
            <van-col span="14" class="tomcentre">
              <div class="guanzhutext">{{ itemb.user_name }}</div>
              <van-icon name="good-job-o" />
              <div class="datatime">{{ itemb.attentiem }}</div>
            </van-col>
            <van-col span="5" class="tomerigth">
              <div v-if="itemb.pro_classes == '视频吧'">
                <video
                  style="width= 100%; height=100%; object-fit:fill"
                  src="../../public/md4/xiaohuangren.mp4"
                ></video>
              </div>
              <div v-else-if="itemb.pro_classes == '文字帖'">
                <p>{{ itemb.pro_text }}</p>
              </div>
            </van-col>
          </van-row>
          <!-- 用户评论 -->
          <van-row v-for="(itemd, indexd) in data[2]" :key="indexd + 3">
            <van-col span="5" class="tomeleft">
              <van-image
                round
                width="3rem"
                height="3rem"
                :src="itemd.user_topimage"
              />
            </van-col>
            <van-col span="14" class="tomcentre">
              <div class="guanzhutext">
                <div class="guanzi">{{ itemd.user_name }}</div>
                <div>{{ itemd.commentary_text }}</div>
              </div>
              <div class="datatime">{{ itemd.commen_tiem }}</div>
            </van-col>
            <van-col span="5" class="tomerigth">
              <div v-if="itemd.pro_classes == '视频吧'">
                <video
                  style="width= 100%; height=100%; object-fit:fill"
                  src="../../public/md4/xiaohuangren.mp4"
                ></video>
              </div>
              <div v-else-if="itemd.pro_classes == '文字帖'">
                <p>{{ itemb.pro_text }}</p>
              </div>
            </van-col>
          </van-row>

          <!-- 用户关注 -->
          <van-row v-for="(itemc, indexc) in data[3]" :key="indexc + 2">
            <van-col span="5" class="tomeleft">
              <van-image
                round
                width="3rem"
                height="3rem"
                :src="itemc.user_topimage"
              />
            </van-col>
            <van-col span="14" class="tomcentre">
              <div class="guanzhutext">
                <div class="guanzi">{{ itemc.user_name }}</div>
                <div class="guangd">关注了你</div>
              </div>
              <div class="datatime">{{ itemc.atten_time }}</div>
            </van-col>
            <van-col span="5" class="tomerigth">
              <div class="guanzhubtn">关注了你</div>
            </van-col>
          </van-row>
        </div>
        <div class="message">
          <van-row v-for="(itemb, indexb) in data[1]" :key="indexb + 1">
            <van-col span="5" class="tomeleft">
              <van-image
                round
                width="3rem"
                height="3rem"
                src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2703527895,2467486748&fm=26&gp=0.jpg"
              />
            </van-col>
            <van-col span="19" class="tomright">
              <h4>皮皮虾活动官方</h4>
              <p>皮皮虾又耍新花样</p>
              <p>
                最近上线了两个神秘频道！悄悄告诉你，只有进入首页后，向右不断滑动才会呈现出来哦，赶快去一探究竟吧~
              </p>
              <p>嘘 听说还会有彩蛋哦~</p>
            </van-col>
          </van-row>
        </div>
      </van-list>
    </div>

    <!-- 评论和回复 -->
    <div class="discuss" v-if="xlxz == 1">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
      >
        <van-row v-for="(itemd, indexd) in data[2]" :key="indexd + 3">
          <van-col span="5" class="tomeleft">
            <van-image
              round
              width="3rem"
              height="3rem"
              :src="itemd.user_topimage"
            />
          </van-col>
          <van-col span="14" class="tomcentre">
            <div class="guanzhutext">
              <div class="guanzi">{{ itemd.user_name }}</div>
              <div>{{ itemd.commentary_text }}</div>
            </div>
            <div class="datatime">{{ itemd.commen_tiem }}</div>
          </van-col>
          <van-col span="5" class="tomerigth">
            <div v-if="itemd.pro_classes == '视频吧'">
              <video
                style="width= 100%; height=100%; object-fit:fill"
                src="../../public/md4/xiaohuangren.mp4"
              ></video>
            </div>
            <div v-else-if="itemd.pro_classes == '文字帖'">
              <p>{{ itemb.pro_text }}</p>
            </div>
          </van-col>
        </van-row>
      </van-list>
    </div>
    <!-- 点赞 -->
    <div class="like" v-if="xlxz == 2">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
      >
        <van-row v-for="(itemb, indexb) in data[1]" :key="indexb + 1">
          <van-col span="5" class="tomeleft">
            <van-image
              round
              width="3rem"
              height="3rem"
              :src="itemb.user_topimage"
            />
          </van-col>
          <van-col span="14" class="tomcentre">
            <div class="guanzhutext">{{ itemb.user_name }}</div>
            <van-icon name="good-job-o" />
            <div class="datatime">{{ itemb.attentiem }}</div>
          </van-col>
          <van-col span="5" class="tomerigth">
            <div v-if="itemb.pro_classes == '视频吧'">
              <video
                style="width= 100%; height=100%; object-fit:fill"
                src="../../public/md4/xiaohuangren.mp4"
              ></video>
            </div>
            <div v-else-if="itemb.pro_classes == '文字帖'">
              <p>{{ itemb.pro_text }}</p>
            </div>
          </van-col>
        </van-row>
      </van-list>
    </div>
    <!-- 关注 -->
    <div class="attention" v-if="xlxz == 3">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
      >
        <van-row v-for="(itemc, indexc) in data[2]" :key="indexc + 2">
          <van-col span="5" class="tomeleft">
            <van-image
              round
              width="3rem"
              height="3rem"
              :src="itemc.user_topimage"
            />
          </van-col>
          <van-col span="14" class="tomcentre">
            <div class="guanzhutext">
              <div class="guanzi">{{ itemc.user_name }}</div>
              <div class="guangd">关注了你</div>
            </div>
            <div class="datatime">{{ itemc.atten_time }}</div>
          </van-col>
          <van-col span="5" class="tomerigth">
            <div class="guanzhubtn">关注了你</div>
          </van-col>
        </van-row>
      </van-list>
    </div>
    <!-- 插眼 -->
    <div class="notice" v-if="xlxz == 4">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
      >
        <van-row v-for="(item, index) in data[0]" :key="index">
          <van-col span="5" class="tomeleft">
            <van-image
              round
              width="3rem"
              height="3rem"
              :src="item.user_topimage"
            />
          </van-col>
          <van-col span="14" class="tomcentre">
            <div class="guanzhutext">{{ item.user_name }}</div>
            <van-icon name="shop" />
            <div class="datatime">{{ item.liketime }}</div>
          </van-col>
          <van-col span="5" class="tomerigth">
            <div v-if="item.pro_classes == '视频吧'">
              <video
                style="width= 100%; height=100%; object-fit:fill"
                src="../../public/md4/xiaohuangren.mp4"
              ></video>
            </div>
            <div v-else-if="item.pro_classes == '文字帖'">
              <p>{{ item.pro_text }}</p>
            </div>
          </van-col>
        </van-row>
      </van-list>
    </div>
    <!-- @我的 -->
    <div class="wd" v-if="xlxz == 5">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
      ></van-list>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      // 下拉选中的分类
      xlxz: 0,
      // 下拉数据
      option: [
        { text: "全部消息", value: 0 },
        { text: "评论和回复", value: 1 },
        { text: "点赞", value: 2 },
        { text: "关注", value: 3 },
        { text: "插眼", value: 4 },
        { text: "@我的", value: 5 }
      ],
      // 用户id
      user_id: "",
      // 用户数据
      data: "",
      loading: false,
      finished: false
    };
  },
  methods: {
    pitchonnews() {
      // console.log(this.user_id)
      // let data = {userid: this.user_id }
      this.$http
        .get("/classify", {
          params: {
            userid: this.user_id
          }
        })
        .then(res => {
          this.data = res.data.data;
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          this.finished = true;
          console.log(this.data);
        });
    },
    userid() {
      let userid = sessionStorage.getItem("user");
      if (!userid) {
        userid = 1;
      }
      this.user_id = userid;
      console.log($);
    }
  },
  created() {
    this.userid();
    this.pitchonnews();
  }
};
</script>

<style>
.van-dropdown-item__option {
  text-align: center;
}
.van-cell__value {
  display: none;
}
.van-cell:not(:last-child)::after {
  border-bottom: none;
}
.totalmessage {
  margin: 0 1rem;
}
.tomcentre {
  font-size: 1rem;
}
.guanzhutext {
  font-size: 0.8rem;
}
.guanzi {
  display: inline-block;
}
.guangd {
  margin-left: 0.4rem;
  display: inline-block;
  font-size: 0.5rem;
}
.tomerigth .guanzhubtn {
  width: 3rem;
  height: 2rem;
  text-align: center;
  font-size: 0.5rem;
  line-height: 2rem;
  margin-left: 0.5rem;
  border: 1px solid #999;
  border-radius: 10px;
}
.totalmessage .van-row {
  margin: 1rem 0;
}
.message {
  margin: 0 1rem;
}
.tomright h4 {
  margin-bottom: 0.5rem;
}
.tomright p {
  margin: 0;
  padding: 0;
}
.tomerigth div,
.tomerigth video {
  width: 100%;
  height: 3rem;
}
.datatime {
  margin-top: 0.2rem;
  font-size: 0.75rem;
}
.van-list__finished-text {
  margin-top: 1rem;
}
</style>
