<template>
  <div id="edit">
    <van-nav-bar
      title="资料编辑"
      right-text="完成"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="image">
      <van-uploader :after-read="onRead">
        <van-image round width="5rem" height="5rem" :src="images" />
      </van-uploader>
    </div>

    <div class="inputs">
      <p>昵称:</p>
      <van-cell-group>
        <van-field
          v-model="formdate.username"
          placeholder="12个字以内"
          maxlength="12"
        />
      </van-cell-group>

      <van-cell-group>
        <van-cell
          title="性别"
          is-link
          v-model="formdate.deindex"
          class="ababab"
          @click="showPopup"
        />
        <van-popup
          v-model="show"
          round
          position="bottom"
          :style="{ height: '40%' }"
        >
          <van-picker
            :columns="columns"
            @change="onChange"
            show-toolbar
            @cancel="onCancel"
            @confirm="onConfirm"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-cell
          title="生日/星座"
          is-link
          v-model="formdate.deindexs"
          class="ababab"
          @click="showPopups"
        />
        <van-popup
          v-model="shows"
          round
          position="bottom"
          :style="{ height: '40%' }"
        >
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            @change="onChanges"
            @cancel="onCancels"
            @confirm="onConfirms"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-cell
          title="所在地"
          is-link
          :value="formdate.deindexss"
          class="ababab"
          @click="showPopupss"
        />
        <van-popup
          v-model="showss"
          round
          position="bottom"
          :style="{ height: '40%' }"
        >
          <van-area
            :area-list="areaList"
            :columns-num="2"
            @cancel="onCancelss"
            @confirm="onConfirmss"
            @change="onChangsess"
          />
        </van-popup>
      </van-cell-group>
    </div>
    <div class="personality">
      <div class="personalitychildren">
        <p class="personalitychildrena">个性签名</p>
        <van-cell-group>
          <van-field
            v-model="formdate.introduced"
            rows="5"
            autosize
            type="textarea"
            maxlength="30"
            placeholder="请输入个性签名"
            show-word-limit
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
      formdate: {
        username: "",
        deindex: "",
        deindexs: "" || "未选择",
        deindexss: "",
        introduced: ""
      },
      images: "",
      show: false,
      columns: ["保密", "男", "女"],
      shows: false,
      currentDate: new Date(),
      showss: false,
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
          130000: "河北省",
          140000: "山西省",
          150000: "内蒙古自治区",
          210000: "辽宁省",
          220000: "吉林省",
          230000: "黑龙江省",
          310000: "上海市",
          320000: "江苏省",
          330000: "浙江省",
          340000: "安徽省",
          350000: "福建省",
          360000: "江西省",
          370000: "山东省"
        },
        city_list: {
          110100: "北京市",
          120100: "天津市",
          130100: "石家庄市",
          130200: "唐山市",
          130300: "秦皇岛市",
          130400: "邯郸市",
          130500: "邢台市",
          130600: "保定市",
          130700: "张家口市",
          130800: "承德市",
          130900: "沧州市",
          131000: "廊坊市",
          131100: "衡水市",
          140100: "太原市",
          140200: "大同市",
          140300: "阳泉市",
          140400: "长治市"
        },
        county_list: {
          110116: "怀柔区",
          110117: "平谷区",
          110118: "密云区",
          110119: "延庆区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区",
          120106: "红桥区",
          120110: "东丽区",
          120111: "西青区",
          120112: "津南区",
          120113: "北辰区",
          120114: "武清区",
          120115: "宝坻区",
          120116: "滨海新区",
          120117: "宁河区",
          120118: "静海区",
          120119: "蓟州区",
          130102: "长安区",
          130104: "桥西区",
          130105: "新华区",
          130107: "井陉矿区",
          130108: "裕华区",
          130109: "藁城区",
          130110: "鹿泉区",
          130111: "栾城区",
          130121: "井陉县",
          130123: "正定县",
          130125: "行唐县",
          130126: "灵寿县",
          130127: "高邑县"
        }
      }
    };
  },
  methods: {
    onRead(file) {
      sessionStorage.setItem("file", file.content);
      this.images = file.content;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    showPopup() {
      this.show = true;
    },
    showPopups() {
      this.shows = true;
      let bbb = new Date();
      this.formdate.deindexs =
        bbb.getFullYear() +
        "." +
        Number(bbb.getMonth() + 1) +
        "." +
        bbb.getDate();
    },
    showPopupss() {
      this.showss = true;
      this.formdate.deindexss = "江苏/宿迁";
    },
    onChange(picker, value) {
      this.formdate.deindex = value;
    },
    onChanges(picker) {
      let getval = picker.getValues();
      console.log(getval);
      let valueget = getval.join("-");
      this.formdate.deindexs = valueget;
    },
    onChangsess(picker) {
      let getvalss = picker.getValues();
      let getvalssone = getvalss[0].name;
      let getvalsstwo = getvalss[1].name;
      this.formdate.deindexss = getvalssone + "/" + getvalsstwo;
    },
    onCancel() {
      this.show = false;
      this.formdate.deindex = "保密";
    },
    onCancels() {
      this.shows = false;
      this.formdate.deindexs = "未选择";
    },
    onCancelss() {
      this.showss = false;
      this.formdate.deindexss = "请选择";
    },

    onConfirm() {
      this.show = false;
    },
    onConfirms() {
      this.shows = false;
    },
    onConfirmss() {
      this.showss = false;
    },
    onClickRight() {
      this.$router.push("/meself");
      this.$http
        .post("/submit", {
          params: this.formdate
        })
        .then(res => {
          alert(res.data.msg);
        });
    }
  },
  created() {
    this.images = sessionStorage.getItem("file");
    this.$http.get("/edit").then(res => {
      this.formdate.username = res.data.data[0].user_name;
      this.formdate.sex = res.data.data[0].usre_sex;
      this.formdate.address = res.data.data[0].user_address;
      this.formdate.deindexss = this.formdate.address;
      this.formdate.introduced = res.data.data[0].user_introduced;
      this.formdate.deindex = this.formdate.sex;
      sessionStorage.setItem("introduced", this.formdate.introduced);
      sessionStorage.setItem("deindexss", this.formdate.deindexss);
    });
  }
};
</script>

<style>
#edit .image {
  text-align: center;
  margin-top: 5%;
}

#edit .van-nav-bar__right .van-nav-bar__text {
  color: black;
}
#edit .van-nav-bar__left .van-icon {
  color: black;
}

#edit .van-nav-bar .van-ellipsis {
  font-weight: 900;
  font-size: 18px;
}

#edit .image .van-uploader {
  margin: auto;
}

#edit .inputs p {
  margin-left: 5%;
  margin-bottom: 2%;
}

#edit .personality .personalitychildrena {
  margin-left: 3%;
  font-size: 14px;
}

#edit .personality .childrentext {
  border: none;
  background-color: #e8dcb6;
  margin-left: 3%;
  padding: 5%;
}

#edit .personality {
  background-color: #f9f9f9;
  padding-top: 3%;
}

#edit .personality .personalitychildren {
  background-color: #fff;
  padding-top: 2%;
  position: relative;
}
</style>
