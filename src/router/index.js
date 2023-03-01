import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import AppointmentView from "../views/AppointmentView.vue";
import LabTest from "../views/LabTestView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/appointment",
      name: "appointment",
      component: AppointmentView,
    },
    {
      path: "/test",
      name: "test",
      component: LabTest,
    },
  ],
});

export default router;
