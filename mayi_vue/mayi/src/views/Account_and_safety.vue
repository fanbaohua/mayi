<template>
  <div id="accounts">
    <van-nav-bar title="账号与安全" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-cell
        title="手机号 139....9063"
        is-link
        value="修改"
        class="ababab"
      />
    </van-cell-group>

    <van-cell-group>
      <van-cell title="微信" icon="location-o">
        <van-switch v-model="checked" active-color="#f9516b" slot="default" />
      </van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell title="注销账号" is-link class="ababab" />
    </van-cell-group>

    <van-cell-group>
      <van-cell title="修改密码" is-link class="ababab" />
    </van-cell-group>

    <van-cell-group>
      <van-cell title="登录设备管理" is-link class="ababab" />
    </van-cell-group>
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
.van-cell__left-icon {
  line-height: 250%;
}
.van-cell .van-cell__title {
  margin: auto;
}
.van-cell {
  margin: auto;
}
.van-switch {
  margin: auto;
}
[class*="van-hairline"]::after {
  border: none;
}
</style>
