import { createRouter, createWebHistory } from "vue-router";
import UsersList from "../views/UsersList.vue";

const routes = [
  {
    path: "/",
    name: "UsersList",
    component: UsersList,
  },
  {
    path: "/user/:id",
    name: "UserDetails",
    component: () => import("../views/UserDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
