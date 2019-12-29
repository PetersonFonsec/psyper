import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/Login.vue";
import Auth from "../services/Auth";
import { userKey } from "../global";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: login,
    meta: {
      requiresAuth: false
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const { requiresAuth } = to.meta;

  if (!requiresAuth) return next();

  const token = localStorage.getItem(userKey);

  if (!token) return next("/login");

  if (!Auth.validToken()) return next("/login");
});

export default router;
