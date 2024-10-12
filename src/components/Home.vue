<template>
  <div class="home">
    <h1>Bienvenido a Movie Ratings</h1>
    <router-link to="/movies">Ver Películas</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
