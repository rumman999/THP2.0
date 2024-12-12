import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import CreationsSection from "../components/CreationsSection.vue";
import ProjectPage from "../views/ProjectPage.vue"; // Import the new ProjectPage component

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/creations",
    name: "Creations",
    component: CreationsSection,
  },
  {
    path: "/project/:id",
    name: "ProjectPage",
    component: ProjectPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Scroll to top on navigation with smooth animation
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
