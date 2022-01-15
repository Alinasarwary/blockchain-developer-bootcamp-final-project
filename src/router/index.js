import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import add from "../views/addCitizen.vue";
import all from "../views/Citizens.vue";
import about from "../views/About.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add",
    name: "Add Citizen",
    component: add
  },
  {
    path: "/all",
    name: "Citizens",
    component: all
  }, 
  {
    path: "/about",
    name: "About",
    component: about
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
