import DashboardView from "@/views/DashboardView.vue";
import LoginView from "@/views/LoginView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: DashboardView },
    { path: "/login", component: LoginView },
  ],
});

export default router;