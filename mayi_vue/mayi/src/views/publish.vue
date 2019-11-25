<template>
  <div class="publish">
    <div class="publish_nav">
      <van-nav-bar
        right-text="下一步"
        :left-arrow="false"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <div slot="left">
          <van-icon name="close" />
        </div>
        <div slot="title">
          <van-dropdown-menu>
            <van-dropdown-item
              v-model="publish_value"
              :options="publish_option"
            />
            <!-- <van-uploader accept="text" :after-read="afterRead" /> -->
          </van-dropdown-menu>
        </div>
      </van-nav-bar>
      <div class="uploading_classify">
        <van-grid>
          <van-grid-item>
            <img src="../../public/images/falianje.png" alt />
            <div class="text">发文字</div>
          </van-grid-item>
          <van-grid-item>
            <img src="../../public/images/fatext.png" alt />
            <div class="text">发链接</div>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="tupinaimg">
        <van-row>
          <van-col span="12">
            <img src alt />
          </van-col>
          <van-col span="12"></van-col>
        </van-row>
      </div>
      <van-uploader :after-read="afterRead" />
      <!-- <input id="keyword" placeholder="输入关键字搜索"  type="search" /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publish_value: 0,
      publish_option: [
        { text: "相机胶卷", value: 0 },
        { text: "所有图片", value: 1 },
        { text: "所有视屏 ", value: 2 }
      ]
    };
  },
  methods: {
    onClickLeft() {
      console.log("返回");
    },
    onClickRight() {
      console.log("按钮");
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  },
  created() {}
};
</script>

<style>
.van-nav-bar__left span {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.5rem;
}
.van-grid-item {
  margin: 0 auto;
}
</style>
