<template>
  <div class="container">
    <h1>{{ movie.title }}</h1>
    <img :src="getMovieImage(movie)" :alt="movie.title" />
    <p>{{ movie.description }}</p>
    <label for="rate">Califica la película:</label>
    <input type="number" v-model="rating" min="1" max="10" />
    <button @click="addRating">Añadir Rate</button>
    <button @click="removeRating">Eliminar Rate</button>
  </div>
</template>

<script>
import { fetchMovieDetails, rateMovie, deleteRate } from '../services/tmdbService';

export default {
  data() {
    return {
      movie: {},
      rating: null,
      sessionId: this.$route.params.sessionId
    };
  },
  created() {
    const movieId = this.$route.params.movieId;
    fetchMovieDetails(movieId).then(movie => {
      this.movie = movie;
      this.movie.description = movie.overview; // Set description
    });
  },
  methods: {
    addRating() {
      rateMovie(this.movie.id, this.rating, this.sessionId).then(() => {
        alert('Rate añadido');
      });
    },
    removeRating() {
      deleteRate(this.movie.id, this.sessionId).then(() => {
        alert('Rate eliminado');
      });
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
    text-align: center;
}

img {
    width: 20%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 15px;
}
</style>
