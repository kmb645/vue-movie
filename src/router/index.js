import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieDetailView from "../views/MovieDetailView.vue";
import TVDetailView from "../views/TVDetailView.vue";
import PersonDetailView from "../views/PersonDetailView.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "movies" },
  },
  {
    path: "/movies",
    name: "movies",
    component: HomeView,
  },
  {
    path: "/tv-shows",
    name: "tvShow",
    component: HomeView,
  },
  {
    path: "/person",
    name: "person",
    component: HomeView,
  },
  {
    path: "/movie/:id",
    name: "Movie Detail",
    component: MovieDetailView,
  },
  {
    path: "/tv/:id",
    name: "tv Detail",
    component: TVDetailView,
  },
  {
    path: "/person/:id",
    name: "Person Detail",
    component: PersonDetailView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
