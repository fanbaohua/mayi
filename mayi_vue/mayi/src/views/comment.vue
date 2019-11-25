<template>
  <div class="comments">
    <div>
      <div v-if="'1'">
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    getlist() {
      const { data: res } = this.$http.get("/comments");
      console.log(res);
    }
  }
};
</script>

<style lang="less"></style>
