<template>
  <div class="container">
    <h1>Películas Populares</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id" @click="goToMovieDetail(movie.id)">
        <img :src="getMovieImage(movie)" :alt="movie.title" />
        <h2>{{ movie.title }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import { createSession, fetchPopularMovies } from '../services/tmdbService';

export default {
  data() {
    return {
      movies: [],
      sessionId: null
    };
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    const requestToken = urlParams.get('request_token');
    
    createSession(requestToken).then(sessionId => {
      this.sessionId = sessionId;
      fetchPopularMovies(sessionId).then(movies => {
        this.movies = movies;
      });
    });
  },
  methods: {
    goToMovieDetail(movieId) {
      this.$router.push({ name: 'movieDetail', params: { movieId: movieId, sessionId: this.sessionId } });
    },
    getMovieImage(movie) {
      return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
  }
}
</script>

<style scoped>
.container {
    margin-top: 20px;
}

ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}

li {
    text-align: center;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s;
}

li:hover {
    transform: scale(1.02);
}

img {
    width: 100%;
    height: auto;
    border-radius: 5px;
}
</style>
