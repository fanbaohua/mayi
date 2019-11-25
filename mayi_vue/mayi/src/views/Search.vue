<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="hotlist">
      <p>热门榜单</p>
      <van-row>
        <van-col class="listleft" span="12">
          <ul>
            <li>最有槽点的吃喝玩乐 <span class="hot">热</span></li>
            <li>鲁豫 <span class="hot">热</span></li>
            <li>寻人故事</li>
          </ul>
        </van-col>
        <van-col span="12"
          ><ul>
            <li>长按点赞有惊喜 <span class="hot">热</span></li>
            <li>职业分享大赛</li>
            <li>壁纸</li>
          </ul></van-col
        >
      </van-row>
    </div>
    <van-divider />
    <div class="history">
      <p>搜索历史</p>
      <div>
        <ul>
          <li
            class="historylist"
            v-for="(item, index) in historylist"
            :key="index"
            @click="searches(item)"
          >
            <a href="javascript:;">{{ item }}</a>
            <span @click="delhistory($event)">x</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      value: "",
      historylist: [
        "皮皮虾44929644",
        "44929644",
        "皮皮",
        "朝阳",
        "bilibili",
        "小"
      ]
    };
  },
  computed: {
    ...mapState(["val"])
  },
  methods: {
    ...mapMutations(["setval"]),
    onSearch() {
      this.$http.post("/search", { params: this.value }).then(res => {
        console.log(res);
      });
    },
    delhistory(e) {
      $(e.currentTarget.parentElement).css("display", "none");
    },
    searches(val) {
      this.$http.post("/search", { val: val }).then(res => {
        if (res.data.ok == 1) {
          this.setval(val);
          this.$router.push("/searchcontent");
        }
      });
    }
  }
};
</script>
<style lang="less">
.hotlist {
  padding: 1rem 0;
  font-size: 14px;
}
.listleft {
  border-right: 1px solid #cccccc;
}
.hotlist p {
  font-size: 14px;
  font-weight: 700;
  margin-left: 1rem;
  margin-top: 0px;
}
.hotlist ul {
  margin-left: 1rem;
}
.hotlist li {
  margin-bottom: 1rem;
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  padding-right: 20%;
}
.hotlist li:nth-last-child(1) {
  margin-bottom: 0px;
}
.hot {
  font-size: 12px;
  display: inline-block;
  position: absolute;
  top: 2px;
  right: 0;
  color: #fff;
  background-color: red;
  border-radius: 4px;
  width: 1rem;
  height: 1rem;
  text-align: center;
}
.van-divider {
  height: 8px;
  background-color: #ebedf0;
}
.history p {
  font-size: 14px;
  font-weight: 700;
  margin-left: 1rem;
  margin-top: 0px;
}
.historylist {
  float: left;
  border: 1px solid #cccccc;
  margin-left: 1rem;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  padding-right: 2rem;
  position: relative;
}
.historylist span {
  position: absolute;
  top: 4px;
  right: 10px;
  color: #ccc;
}
.historylist a {
  color: #000;
}
.historylist a:active {
  color: #ccc;
}
</style>
