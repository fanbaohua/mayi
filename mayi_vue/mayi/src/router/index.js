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
    path: "/accountandsafety",
    component: () => import("../views/Account_and_safety.vue")
  },
  {
    path: "/inform",
    component: () => import("../views/Inform.vue")
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
