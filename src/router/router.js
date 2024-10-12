import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';
import Movies from '../components/Movies.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    }
  ]
});
