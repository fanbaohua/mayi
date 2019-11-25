import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    val: ""
  },
  mutations: {
    setval(state, values) {
      state.val = values;
    }
  },
  actions: {},
  modules: {}
});
