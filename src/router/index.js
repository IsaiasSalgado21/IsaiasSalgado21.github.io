import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Movies from '../components/Movies.vue';
import MovieDetail from '../components/MovieDetail.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/movies', component: Movies },
  { path: '/movie/:movieId', name: 'movieDetail', component: MovieDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
