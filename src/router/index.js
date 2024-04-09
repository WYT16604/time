import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListFinished from "@/views/Task/ListFinished.vue";
import ListUnFinished from "@/views/Task/ListUnFinished.vue";

const routes = [
  // 事项：清单
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // 事项：已完成
  {
    path: "/finishedList",
    name: ListFinished,
    components: ListFinished,
  },
  // 事项：未完成
  {
    path: "/finishedList",
    name: ListFinished,
    components: ListUnFinished,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
