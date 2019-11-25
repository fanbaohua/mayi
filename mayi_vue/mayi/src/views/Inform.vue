<template>
  <div id="inform">
    <van-nav-bar title="通知设置" left-arrow @click-left="onClickLeft" />
    <div class="form">
      <p>内容通知</p>
      <div class="formdata">
        <van-cell-group>
          <van-cell
            title="精彩内容推送"
            size="large"
            label="每日精彩内容和视频推送"
          >
            <van-switch
              v-model="checked"
              active-color="#f9516b"
              slot="default"
            />
          </van-cell>
        </van-cell-group>
        <van-cell-group>
          <van-cell
            title="关注人的更新推送"
            size="large"
            label="每日你关注的人有更新市推送"
          >
            <van-switch
              v-model="checked"
              active-color="#f9516b"
              slot="default"
            />
          </van-cell>
        </van-cell-group>
      </div>
    </div>

    <div class="form">
      <p>互动通知</p>
      <div class="formdata">
        <van-cell-group>
          <van-switch-cell
            v-model="checked"
            title="评论"
            active-color="#f9516b"
            class="ababab"
          />
        </van-cell-group>
        <van-cell-group>
          <van-switch-cell
            v-model="checked"
            title="点赞"
            active-color="#f9516b"
            class="ababab"
          />
        </van-cell-group>
        <van-cell-group>
          <van-switch-cell
            v-model="checked"
            title="关注"
            active-color="#f9516b"
            class="ababab"
          />
        </van-cell-group>
        <van-cell-group>
          <van-switch-cell
            v-model="checked"
            title="@"
            active-color="#f9516b"
            class="ababab"
          />
        </van-cell-group>
        <van-cell-group>
          <van-switch-cell
            v-model="checked"
            title="插眼"
            active-color="#f9516b"
            class="ababab"
          />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
#inform .form {
  background-color: #f9f9f9;
}
[class*="van-hairline"]::after {
  border: none;
}
#inform .form p {
  margin: 0;
  padding: 3% 4%;
  font-size: 17px;
  font-weight: bold;
}
</style>
