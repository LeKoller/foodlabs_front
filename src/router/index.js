import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/get-recipe",
    name: "Recipe",
    component: () => import("../views/GetRecipe.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
