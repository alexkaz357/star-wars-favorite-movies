import axios from 'axios'

export const mainService = {
  getMovies,
  loadMovies,
  findMovie
}

async function getMovies() {
  try {
    const res = await axios.get('https://swapi.dev/api/films/')
    console.log(res.data.results);
    return res.data.results
  } catch (error) {
    console.log(error)
  }
}

async function loadMovies() {
  let movies = loadFromStorage('movies');
  if (!movies.length) saveToStorage('movies', await getMovies());
  movies = loadFromStorage('movies');
  return movies;
}

function findMovie(movieId) {
  const movies = loadFromStorage('movies');
  const selectedMovie = movies.find(movie => movie.episode_id === movieId);
  return selectedMovie;
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function loadFromStorage(key) {
  const val = localStorage.getItem(key) || '[]';
  return JSON.parse(val);
}