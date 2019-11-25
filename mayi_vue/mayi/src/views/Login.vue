<template>
  <div class="login">
    <input type="text" name="login" />
    <button @click="yzm">获取验证码</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: {
        phone: 13961229063
      }
    };
  },
  methods: {
    async yzm() {
      let { data: res } = await this.$http.get("/yam", { params: this.phone });
      console.log(res);
    }
  }
};
</script>
