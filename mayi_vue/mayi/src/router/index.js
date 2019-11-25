import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
  },
  {
    path: "/set",
    component: () => import("../views/Set.vue")
  },
  {
    path: "/meself",
    component: () => import("../views/MeSelf.vue")
  },
  {
    path: "/edit",
    component: () => import("../views/Edit")
  },
  {
    path: "/searchcontent",
    component: () => import("../views/SearchContent.vue")
  },
  {
    path: "/comments",
    component: () => import("../views/comment.vue")
  },
  {
    path: "/search",
    component: () => import("../views/Search.vue")
  },
  // 消息页
  {
    path: "/info",
    component: () => import("../views/information.vue")
  },
  // 发表页
  {
    path: "/publish",
    component: () => import("../views/publish.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
