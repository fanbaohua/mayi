import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Vant from "vant";
import "vant/lib/index.css";

Vue.config.productionTip = false;

axios.defaults.baseURL = "http://127.0.0.1:8105/api/mayi";
Vue.prototype.$http = axios;

Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
