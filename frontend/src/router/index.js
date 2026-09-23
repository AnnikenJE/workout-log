import AddWorkoutView from "@/views/AddWorkoutView.vue";
import DashboardView from "@/views/DashboardView.vue";
import WorkoutView from "@/views/WorkoutView.vue";
import AllWorkoutsView from "@/views/AllWorkoutsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: DashboardView },
    { path: "/add", component: AddWorkoutView },
    { path: "/workouts", component: AllWorkoutsView },
    { path: "/workout/:id", component: WorkoutView },
  ],
});

export default router;
