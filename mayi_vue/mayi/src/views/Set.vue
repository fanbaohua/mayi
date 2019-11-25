<template>
  <div id="set">
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
    <div class="container_top">
      <div v-if="loginafter">
        <van-cell-group>
          <van-cell
            title="账号与安全"
            is-link
            class="ababab"
            to="/accountandsafety"
          />
        </van-cell-group>
        <van-cell-group>
          <van-cell title="通知设置" is-link class="ababab" to="/inform" />
        </van-cell-group>
      </div>
      <van-cell-group>
        <van-switch-cell
          v-model="checked"
          title="WIFI下视频自动播放"
          active-color="#f9516b"
          class="ababab"
        />
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell
          v-model="checked"
          title="非WIFI下视频自动播放"
          active-color="#f9516b"
          class="ababab"
        />
      </van-cell-group>
      <van-cell-group>
        <van-cell
          title="免流服务提示"
          is-link
          value="每日提醒一次"
          class="ababab"
          @click="showPopup"
        />
        <van-popup v-model="show" closeable round="true">
          <h3>免流服务提示</h3>
          <van-radio-group v-model="radio">
            <van-radio name="1">每日提醒一次</van-radio>
            <van-radio name="2">每周提醒一次</van-radio>
            <van-radio name="3">永不提醒</van-radio>
          </van-radio-group>
        </van-popup>
      </van-cell-group>
      <van-cell-group>
        <van-cell title="免流量刷皮皮虾" is-link class="ababab" />
      </van-cell-group>
    </div>
    <div class="container_con">
      <van-cell-group>
        <van-switch-cell
          v-model="checked"
          title="夜间模式"
          active-color="#f9516b"
          class="ababab"
        />
      </van-cell-group>

      <van-cell-group>
        <van-switch-cell
          v-model="checked"
          title="内容自动刷新"
          active-color="#f9516b"
          class="ababab"
        />
      </van-cell-group>

      <van-cell-group>
        <van-switch-cell
          v-model="checked"
          title="保存视频带神评"
          active-color="#f9516b"
          class="ababab"
        />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="清除缓存" is-link value="18.3m" class="ababab" />
      </van-cell-group>
    </div>

    <div class="container_bottom">
      <van-cell-group>
        <van-cell title="检查版本更新" is-link class="ababab" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="用户协议" is-link class="ababab" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="隐私协议" is-link class="ababab" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="社区公约" is-link class="ababab" />
      </van-cell-group>
    </div>

    <van-button type="primary" size="large">退出登录</van-button>
    <div class="buttom">
      <van-row>当前版本V2.3.3</van-row>
      <van-row>皮皮虾</van-row>
      <van-row>V2.3.3 Build huawei_c993bdf_20191114</van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      show: false,
      radio: "1",
      loginafter: true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style>
#set {
  background-color: #f5f6fa;
}

#set .van-ellipsis {
  font-weight: 900;
  font-size: 18px;
}

#set .container_top,
.container_con {
  margin-bottom: 3%;
}
#set .van-cell-group .ababab {
  font-size: 15px;
  font-weight: bold;
  padding: 3% 4%;
}
#set .buttom {
  padding: 3% 0;
}

#set .buttom .van-row {
  text-align: center;
  color: #a9a9a9;
  margin-bottom: 1%;
  padding: 1% 8%;
  font-size: 12px;
}

#set .container_top .van-popup {
  width: 60%;
  height: 30%;
}
#set .container_top .van-popup h3 {
  text-align: center;
}

#set .container_top .van-popup .van-radio {
  padding-left: 10%;
  margin-bottom: 4%;
}

#set .van-button {
  background-color: #fff;
  color: black;
  border: transparent;
  margin-top: 3%;
}
</style>
