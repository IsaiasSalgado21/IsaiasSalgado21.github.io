<template>
    <div class="movie-card" @click="selectMovie">
      <img :src="getPosterUrl(movie.poster_path)" alt="Poster" />
      <h3>{{ movie.title }}</h3>
      <p>Rating: {{ movie.vote_average }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieCard',
    props: {
      movie: {
        type: Object,
        required: true,
      },
    },
    methods: {
      getPosterUrl(path) {
        return `https://image.tmdb.org/t/p/w500${path}`;
      },
      selectMovie() {
        this.$emit('select-movie', this.movie);
      },
    },
  };
  </script>
  
  <style scoped>
  .movie-card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    width: 200px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s;
  }
  .movie-card:hover {
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
  }
  h3 {
    margin: 10px 0 5px 0;
  }
  p {
    margin: 0;
    color: #555;
  }
  </style>
  