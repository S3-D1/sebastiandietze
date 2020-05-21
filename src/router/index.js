import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/info",
    name: "Info",
    component: () => import(/* webpackChunkName: "about" */ "../views/Info.vue")
  },
  {
    path: "/lebenslauf",
    name: "CV",
    component: () => import(/* webpackChunkName: "about" */ "../views/CV.vue")
  },
  {
    path: "/interessen",
    name: "Interests",
    component: () => import(/* webpackChunkName: "interests" */ "../views/Interests.vue")
  },
  {
    path: "/empfehlungen",
    name: "Recommendation",
    component: () => import(/* webpackChunkName: "interests" */ "../views/Recommendation.vue")
  },
  {
    path: "/sprueche",
    name: "Citations",
    component: () => import(/* webpackChunkName: "interests" */ "../views/Citations.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
