import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Me.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/me",
    component: () => import("../views/Me.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
