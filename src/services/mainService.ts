import axios from 'axios'

export const mainService = {
  loadMovies
}

const movies = [{id: 1, title: 'movie-1'}, {id: 2, title: 'movie-2'}]

function loadMovies() {
  return movies;
}