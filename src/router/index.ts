import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homeView",
      component: HomeView,
    },
    {
      path: "/chatRecord",
      name: "chatRecord",
      component: () => import("../views/ChatRecord.vue"),
    },
    {
      path: "/wechatMoments",
      name: "wechatMoments",
      component: () => import("../views/WechatMoments.vue"),
    },
    {
      path: "/nickname",
      name: "nickname",
      component: () => import("../views/Nickname.vue"),
    },
    {
      path: "/video",
      name: "video",
      component: () => import("../views/Video.vue"),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
