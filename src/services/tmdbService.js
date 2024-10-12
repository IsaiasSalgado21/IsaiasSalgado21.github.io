const apiKey = 'd1f4920e92973a19da4a5043c772c961';

export async function createSession(requestToken) {
  const response = await fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ request_token: requestToken })
  });
  const data = await response.json();
  return data.session_id;
}

export async function fetchPopularMovies(sessionId) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&session_id=${sessionId}`);
  const data = await response.json();
  return data.results;
}

export async function fetchMovieDetails(movieId) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
  const data = await response.json();
  return data;
}

export async function rateMovie(movieId, rating, sessionId) {
  await fetch(`https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${apiKey}&session_id=${sessionId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value: rating })
  });
}

export async function deleteRate(movieId, sessionId) {
  await fetch(`https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${apiKey}&session_id=${sessionId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
}
