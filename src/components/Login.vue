<template>
  <div class="container">
    <h1>Iniciar sesión con TMDb</h1>
    <button @click="login">Iniciar sesión</button>
  </div>
</template>

<script>
export default {
  methods: {
    async login() {
      const apiKey = 'd1f4920e92973a19da4a5043c772c961';
      const response = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`);
      const data = await response.json();
      const requestToken = data.request_token;
      window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:8080/movies`;
    }
  }
}
</script>

<style scoped>
.container {
    text-align: center;
    margin-top: 50px;
}

button {
    margin-top: 20px;
}
</style>
